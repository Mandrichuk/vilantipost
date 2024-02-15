from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
import pymysql as ms
import logging
import uuid

from classes.Admin import Admin
from classes.Form import Form

from get_connection import get_connection
from functions.functions import get_fedex_number, get_hashed_value, get_values_to_keys, is_valid_login_data, send_email, ChatGPT_support, generate_unique_user_id, update_form_db

logging.basicConfig(level=logging.ERROR,
                    format='%(asctime)s - %(levelname)s - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S',
                    filename='logs.log',
                    filemode='a'
                    )

app = Flask(__name__)
CORS(app)




@app.route("/")
def index():
    user_id = request.cookies.get('user_id')
    if not user_id:
        response = make_response("Setting up user-specific cookie")
        user_id = generate_unique_user_id()
        response.set_cookie('user_id', user_id, max_age=60*60*24*365) 
    else:
        response = make_response(f"Welcome back, your user ID is {user_id}")
    return response


@app.route("/api/save-form-to-db", methods=["POST"])
def save_form():
    try:
        data = request.get_json()
        data["fedExNumber"] = get_fedex_number()
        form = Form.form_to_class(data) 
        is_adding_succeeded = Form.add_form_to_db(form)
        return jsonify(is_adding_succeeded, data), 200
    except Exception as e:
        logging.error(e)
        return jsonify({"error": str(e)}), 500


@app.route("/api/track-parcel/<fedExNumber>", methods=["GET"])
def get_form_by_fedex(fedExNumber):
    try:
        fedex_number = fedExNumber
        connection = get_connection()

        with connection.cursor() as cursor:
            cursor.execute("USE globalpost")
            cursor.execute(f"SELECT * FROM forms WHERE parcel_fedExNumber = '{fedex_number}'")
            result = cursor.fetchone()

            if result is not None:
                obj_result = get_values_to_keys(result)
                return jsonify(obj_result)

    except ms.Error as e:
        error_message = {"error": f"Error: {e}"}
        logging.error(e)
        return jsonify(error_message)


@app.route("/api/admin-login", methods=["POST"])
def admin_login():
    try: 
        data = request.get_json()
        login = data["loginInput"]
        password = get_hashed_value((data["passwordInput"]))
        validity = is_valid_login_data(login, password)

        return jsonify({"status": validity})
    
    
    except Exception as e:
        error_message = {"error": f"Error: {e}"}
        logging.error(e)
        return jsonify(error_message)


@app.route("/api/get-all-forms", methods=["GET"])
def get_all_forms():
    try:
        connection = get_connection()

        with connection.cursor() as cursor:
            cursor.execute("USE globalpost")
            cursor.execute("SELECT * FROM forms")
            result = cursor.fetchall()
            return jsonify(result)

    except ms.Error as e:
        error_message = {"error": f"Error: {e}"}
        logging.error(e)
        return jsonify(error_message)
    

@app.route("/api/send-email", methods=["POST"])
def send_email_route():
    try:
        data = request.get_json()
        print(data["email"], data["emailName"], data["message"])
        status = send_email(data["email"], data["emailName"], data["message"])
        print(status)
        return jsonify(data), 200
    except Exception as e:
        error_message = {"error": f"Error: {e}"}
        logging.error(e)
        return jsonify(error_message)


@app.route("/api/chatbot", methods=["POST"])
def ai_support():
    data = request.get_json()
    return ChatGPT_support(data["message"])


@app.route("/api/delete-form-from-db", methods=["POST"])
def delete_form_from_db():
    try:
        data = request.get_json()
        fedex_number = data["formId"]
        connection = get_connection()

        with connection.cursor() as cursor:
            cursor.execute("USE globalpost")
            cursor.execute(f"DELETE FROM forms WHERE id = '{fedex_number}'")
            connection.commit()
            return jsonify({"message": "Form deleted successfully"}), 200
    except ms.Error as e:
        error_message = {"error": f"Error: {e}"}
        logging.error(e)
        return jsonify(error_message)


@app.route("/api/get-form-by-id/<FormId>", methods=["GET"])
def get_form_by_id(FormId):
    try:
        connection = get_connection()

        with connection.cursor() as cursor:
            cursor.execute("USE globalpost")
            cursor.execute("SELECT * FROM forms WHERE id = %s", (FormId),)
            result = cursor.fetchone()

            if result is not None:
                obj_result = get_values_to_keys(result)
                return jsonify(obj_result)

    except ms.Error as e:
        error_message = {"error": f"Error: {e}"}
        logging.error(e)
        return jsonify(error_message)


@app.route("/api/update-form-in-db", methods=["POST"])
def update_form_in_db():
    data = request.get_json()
    print(data["id"], data)
    is_updated = update_form_db(data["id"], data)
    print(is_updated)
    return jsonify({"status": "success", "message": "Form updated successfully"})




if __name__ == "__main__":
    app.run(debug=True)
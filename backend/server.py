from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql as ms
import logging

from get_connection import get_connection
from get_hashed_value import get_hashed_value
from forms.form_to_class import form_to_class
from forms.add_form_to_db import add_form_to_db
from forms.get_fedex_number import get_fedex_number
from forms.get_values_to_keys import get_values_to_keys
from admin.is_valid_login_data import is_valid_login_data
from emails.send_email import send_email
from ChatGPT_support.ChatGPT_support import ChatGPT_support

logging.basicConfig(level=logging.ERROR,
                    format='%(asctime)s - %(levelname)s - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S',
                    filename='logs.log',
                    filemode='a'
                    )


app = Flask(__name__)
CORS(app)


@app.route("/", methods=["GET"])
def index():
    try:
        connection = get_connection()

        with connection.cursor() as cursor:
            cursor.execute("USE globalpost")
            cursor.execute("SELECT * FROM forms")
            result = cursor.fetchall()
            return jsonify(result)

    except ms.Error as e:
        error_message = {"error": f"Error: {e}"}
        print(error_message)
        return jsonify(error_message)



@app.route("/api/save-form-to-db", methods=["POST"])
def save_form():
    try:
        data = request.get_json()
        data["fedExNumber"] = get_fedex_number()
        form = form_to_class(data)
        add_form_to_db(form)
        return jsonify(data), 200
    except Exception as e:
        logging.error(e)
        return jsonify(f"error {str(e)}"), 500




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
    print(data)
    return ChatGPT_support(data["message"])

if __name__ == "__main__":
    app.run(debug=True)

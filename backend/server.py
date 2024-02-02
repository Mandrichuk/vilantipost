from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql as ms

from get_connection import get_connection
from get_hashed_value import get_hashed_value
from forms.form_to_class import form_to_class
from forms.add_form_to_db import add_form_to_db
from forms.get_fedex_number import get_fedex_number
from forms.get_values_to_keys import get_values_to_keys
from admin.is_valid_login_data import is_valid_login_data

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

        return (f"success: {jsonify(data)}")
    except Exception as e:
        return jsonify(f"error {str(e)}")




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
            else:
                print("No results found")

    except ms.Error as e:
        error_message = {"error": f"Error: {e}"}
        print(error_message)
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
        print(error_message)
        return jsonify(f"error {str(e)}")


app.route("/api/get-all-forms")
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
        print(error_message)
        return jsonify(error_message)
    


if __name__ == "__main__":
    app.run(debug=True)

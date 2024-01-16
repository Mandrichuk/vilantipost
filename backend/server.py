from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql as ms

from forms.form_to_class import form_to_class
from forms.add_form_to_db import add_form_to_db
from forms.get_connection import get_connection
from forms.get_fedex_number import get_fedex_number

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
    print(fedExNumber)
    return f"success: {fedExNumber}"
    # try:
    #     fedex_number = request.args.get("fedexNumber")
    #     connection = get_connection()

    #     with connection.cursor() as cursor:
    #         cursor.execute("USE globalpost")
    #         cursor.execute(f"SELECT * FROM forms WHERE fedExNumber = '{fedex_number}'")
    #         result = cursor.fetchall()
    #         print(result)
    #         return jsonify(result)

    # except ms.Error as e:
    #     error_message = {"error": f"Error: {e}"}
    #     print(error_message)
    #     return jsonify(error_message)


if __name__ == "__main__":
    app.run(debug=True)

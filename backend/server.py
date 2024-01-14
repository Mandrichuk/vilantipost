from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql as ms

from forms.class_Form import Form
from forms.form_to_class import form_to_class
from forms.add_form_to_db import add_form_to_db
from config import server_connection

app = Flask(__name__)
CORS(app)





@app.route("/", methods=["GET"])
def index():
    try:
        connection = ms.connect(
            host=server_connection["HOST"],
            port=server_connection["PORT"],
            user=server_connection["USER"],
            password=server_connection["PASSW"],
        )

        with connection.cursor() as cursor:
            cursor.execute("SHOW DATABASES")
            databases = [name[0] for name in cursor]
            response = {"databases": databases}

        return jsonify(response)

    except ms.Error as e:
        error_message = {"error": f"Error: {e}"}
        print(error_message)
        return jsonify(error_message)



# @app.route("/api/save-form", methods=["POST"])
# def save_form():
#     try:
#         data = request.get_json()
#         form = form_to_class(data)
#         add_form_to_db(form)

#         return (f"success: {jsonify(data)}")
#     except Exception as e:
#         return jsonify(f"error {str(e)}")


if __name__ == "__main__":
    app.run(debug=True)

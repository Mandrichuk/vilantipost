from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql as ms

from forms.class_Form import Form
from forms.form_to_class import form_to_class
from forms.add_form_to_db import add_form_to_db
from config import server_connection

app = Flask(__name__)
CORS(app)

connection = ms.connect(
    host=server_connection["host"], 
    port=server_connection["port"], 
    user=server_connection["user"], 
    password=server_connection["password"], 
    database=server_connection["database"]
)




@app.route("/", methods=["GET"])
def index():
    print(server_connection["host"])
    return "FLASK ACTIVE"


@app.route("/api/save-form", methods=["POST"])
def save_form():
    try:
        data = request.get_json()
        form = form_to_class(data)
        add_form_to_db(form)

        return (f"success: {jsonify(data)}")
    except Exception as e:
        return jsonify(f"error {str(e)}")


if __name__ == "__main__":
    app.run(debug=True)

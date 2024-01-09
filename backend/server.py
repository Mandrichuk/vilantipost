from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

from forms.class_Form import Form
from forms.form_to_class import form_to_class
from forms.add_form_to_db import add_form_to_db


app = Flask(__name__)
CORS(app)


@app.route("/", methods=["GET"])
def index():
    return "FLASK ACTIVE"


@app.route("/api/save-form", methods=["POST"])
def save_form():
    try:
        data = request.get_json()
        form = form_to_class(data)
        add_form_to_db(form)


        return jsonify(data)
    except Exception as e:
        return jsonify(f"error {str(e)}")


if __name__ == "__main__":
    app.run(debug=True)

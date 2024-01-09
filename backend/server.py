from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def hello():
    data = {"members": ["John", "Paul", "Ringo", "George", "Mick", "Keith"]}
    return jsonify(data)

@app.route("/api/save-form", methods=["POST"])
def save_form():
    try:
        data = request.get_json()
        return jsonify(data)
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)

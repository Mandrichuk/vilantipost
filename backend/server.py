from flask import Flask, request, jsonify
from flask_cors import CORS
import stripe

stripe.api_key = 'sk_test_51OQ6tgHJ7Lg8p1ynsTNxtZAZhHU3gPHSTAOmXZFbCF6rnfLtAYUmty7BJaZPd4a2vxnNRPHB9NQfP9ASWW3j1mN2009f06LVOU'

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def hello():
  data = {"members": ["John", "Paul", "Ringo", "George", "Mick", "Keith"]} 
  return jsonify(data)


if __name__ == "__main__":
  app.run(debug=True)
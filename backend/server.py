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

@app.route("/payment", methods=["POST"])
def payment(): 
  
  email = request.json.get("email", None)

  if not email:
    return "You need to send an email", 400
  
  intent = stripe.PaymentIntent.create(
    amount=60_00,
    currency="usd",
    receipt_email=email,
  )


  return "0"



if __name__ == "__main__":
  app.run(debug=True)
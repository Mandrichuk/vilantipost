import requests

client_id = 'YOUR_CLIENT_ID'
client_secret = 'YOUR_CLIENT_SECRET'
access_token = 'YOUR_ACCESS_TOKEN'

payment_url = 'https://api.gopay.com/api/payments/payment'

def create_payment(payer_data):
    payment_data = {
        "payer": {
            "default_payment_instrument": "BANK_ACCOUNT",
            "allowed_payment_instruments": ["BANK_ACCOUNT"],
            "default_swift": "FIOBCZPP",
            "payment_instrument": {
                "bank_account": {
                    "account_number": "2300432033",
                    "bank_code": "2010",
                    "iban": "CZ5620100000002300432033",
                    "swift_bic": "FIOBCZPP",
                    "country_code": "CZ"
                }
            },
            "contact": {
                "first_name": "John",
                "last_name": "Doe",
                "email": "john.doe@example.com",
                "phone_number": "+420123456789",
                "city": "Prague",
                "street": "Národní 123",
                "postal_code": "11000",
                "country_code": "CZ"
            }
        },
        "amount": 60000,
        "currency": "USD",
        "order_number": "ORDER123",
        "order_description": "Payment for services",
        "callback": {
            "return_url": "https://www.yourwebsite.com/return",
            "notification_url": "https://www.yourwebsite.com/notify"
        }
    }

    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }

    response = requests.post(payment_url, json=payment_data, headers=headers)

    if response.ok:
        print("Payment created successfully:", response.json())
    else:
        print("Failed to create payment:", response.text)

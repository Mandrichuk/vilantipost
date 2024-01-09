import sqlite3
import os

if os.path.exists("forms.db"):
    os.remove("forms.db")


forms_data = [
    {
        "sender": "Mike Brown",
        "sender_country": "United States",
        "sender_city": "New York",
        "sender_street": "Broadway",
        "sender_houseNumber": "123",
        "sender_zipCode": "10001",
        "sender_email": "mike.brown@example.com",
        "sender_phoneNumber": "555-1234",
        "recipient": "Alice Johnson",
        "recipient_country": "Canada",
        "recipient_city": "Toronto",
        "recipient_street": "King Street",
        "recipient_houseNumber": "456",
        "recipient_zipCode": "M5V 1J1",
        "recipient_email": "alice.johnson@example.com",
        "recipient_phoneNumber": "416-5678",
        "shippingForm_addressInput": "123 Main St, Anytown",
        "paymentForm_contactAfter": True,
        "paymentForm_acceptRules": True,
    },
    {
        "sender": "John Smith",
        "sender_country": "United Kingdom",
        "sender_city": "London",
        "sender_street": "Oxford Street",
        "sender_houseNumber": "789",
        "sender_zipCode": "W1A 1AA",
        "sender_email": "john.smith@example.com",
        "sender_phoneNumber": "44-20-1234-5678",
        "recipient": "Emily Davis",
        "recipient_country": "Australia",
        "recipient_city": "Sydney",
        "recipient_street": "George Street",
        "recipient_houseNumber": "987",
        "recipient_zipCode": "2000",
        "recipient_email": "emily.davis@example.com",
        "recipient_phoneNumber": "61-2-8765-4321",
        "shippingForm_addressInput": "456 High St, Anothercity",
        "paymentForm_contactAfter": False,
        "paymentForm_acceptRules": True,
    },
    {
        "sender": "David Miller",
        "sender_country": "Germany",
        "sender_city": "Berlin",
        "sender_street": "Friedrichstrasse",
        "sender_houseNumber": "456",
        "sender_zipCode": "10117",
        "sender_email": "david.miller@example.com",
        "sender_phoneNumber": "49-30-7890-1234",
        "recipient": "Sophie Schmidt",
        "recipient_country": "France",
        "recipient_city": "Paris",
        "recipient_street": "Champs-Elysées",
        "recipient_houseNumber": "789",
        "recipient_zipCode": "75008",
        "recipient_email": "sophie.schmidt@example.com",
        "recipient_phoneNumber": "33-1-5678-9012",
        "shippingForm_addressInput": "789 Avenue de la République, Paris",
        "paymentForm_contactAfter": True,
        "paymentForm_acceptRules": False,
    },
]

with sqlite3.connect("forms.db") as connect:
    cursor = connect.cursor()

    cursor.execute(
        """
            CREATE TABLE IF NOT EXISTS forms(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                sender TEXT,
                sender_country TEXT,
                sender_city TEXT,
                sender_street TEXT,
                sender_houseNumber TEXT,
                sender_zipCode TEXT,
                sender_email TEXT,
                sender_phoneNumber TEXT,
                recipient TEXT,
                recipient_country TEXT,
                recipient_city TEXT,
                recipient_street TEXT,
                recipient_houseNumber TEXT,
                recipient_zipCode TEXT,
                recipient_email TEXT,
                recipient_phoneNumber TEXT,
                shippingForm_addressInput TEXT,
                paymentForm_contactAfter BOOLEAN,
                paymentForm_acceptRules BOOLEAN
            )
        """
    )

    for form_data in forms_data:
        cursor.execute(
            """
            INSERT INTO forms (
                sender, sender_country, sender_city, sender_street, sender_houseNumber,
                sender_zipCode, sender_email, sender_phoneNumber,
                recipient, recipient_country, recipient_city, recipient_street,
                recipient_houseNumber, recipient_zipCode, recipient_email, recipient_phoneNumber,
                shippingForm_addressInput,
                paymentForm_contactAfter, paymentForm_acceptRules
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
            (
                form_data["sender"],
                form_data["sender_country"],
                form_data["sender_city"],
                form_data["sender_street"],
                form_data["sender_houseNumber"],
                form_data["sender_zipCode"],
                form_data["sender_email"],
                form_data["sender_phoneNumber"],
                form_data["recipient"],
                form_data["recipient_country"],
                form_data["recipient_city"],
                form_data["recipient_street"],
                form_data["recipient_houseNumber"],
                form_data["recipient_zipCode"],
                form_data["recipient_email"],
                form_data["recipient_phoneNumber"],
                form_data["shippingForm_addressInput"],
                form_data["paymentForm_contactAfter"],
                form_data["paymentForm_acceptRules"],
            ),
        )

    connect.commit()

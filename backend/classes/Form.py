from dataclasses import dataclass
from get_connection import get_connection

@dataclass
class Form:
    def __init__(
        self,
        sender,
        sender_country,
        sender_city,
        sender_street,
        sender_houseNumber,
        sender_zipCode,
        sender_email,
        sender_phoneNumber,
        recipient,
        recipient_country,
        recipient_city,
        recipient_street,
        recipient_houseNumber,
        recipient_zipCode,
        recipient_email,
        recipient_phoneNumber,
        shippingForm_addressInput,
        paymentForm_contactAfter,
        paymentForm_acceptRules,
        fedExNumber
    ):
        self.sender = sender
        self.sender_country = sender_country
        self.sender_city = sender_city
        self.sender_street = sender_street
        self.sender_houseNumber = sender_houseNumber
        self.sender_zipCode = sender_zipCode
        self.sender_email = sender_email
        self.sender_phoneNumber = sender_phoneNumber

        self.recipient = recipient
        self.recipient_country = recipient_country
        self.recipient_city = recipient_city
        self.recipient_street = recipient_street
        self.recipient_houseNumber = recipient_houseNumber
        self.recipient_zipCode = recipient_zipCode
        self.recipient_email = recipient_email
        self.recipient_phoneNumber = recipient_phoneNumber

        self.shippingForm_addressInput = shippingForm_addressInput

        self.paymentForm_contactAfter = paymentForm_contactAfter
        self.paymentForm_acceptRules = paymentForm_acceptRules

        self.parcel_fedExNumber = fedExNumber

    def __str__(self):
        return (
            f"Form: sender={self.sender}, sender_country={self.sender_country}, "
            f"sender_city={self.sender_city}, sender_street={self.sender_street}, "
            f"sender_houseNumber={self.sender_houseNumber}, sender_zipCode={self.sender_zipCode}, "
            f"sender_email={self.sender_email}, sender_phoneNumber={self.sender_phoneNumber}, "
            f"recipient={self.recipient}, recipient_country={self.recipient_country}, "
            f"recipient_city={self.recipient_city}, recipient_street={self.recipient_street}, "
            f"recipient_houseNumber={self.recipient_houseNumber}, recipient_zipCode={self.recipient_zipCode}, "
            f"recipient_email={self.recipient_email}, recipient_phoneNumber={self.recipient_phoneNumber}, "
            f"shippingForm_addressInput={self.shippingForm_addressInput}, "
            f"paymentForm_contactAfter={self.paymentForm_contactAfter}, "
            f"paymentForm_acceptRules={self.paymentForm_acceptRules}, "
            f"parcel_fedExNumber={self.parcel_fedExNumber}"
        )

    @classmethod
    def form_to_class(cls, formData):
        formFromClient = formData["formFromClient"]
        formToClient = formData["formToClient"]
        shippingForm = formData["shippingForm"]
        paymentForm = formData["paymentForm"]
        fedExNumber = formData["fedExNumber"]

        form = Form(
            formFromClient["sender"],
            formFromClient["country"],
            formFromClient["city"],
            formFromClient["street"],
            formFromClient["houseNumber"],
            formFromClient["zipCode"],
            formFromClient["email"],
            formFromClient["phoneNumber"],
            formToClient["recipient"],
            formToClient["country"],
            formToClient["city"],
            formToClient["street"],
            formToClient["houseNumber"],
            formToClient["zipCode"],
            formToClient["email"],
            formToClient["phoneNumber"],
            shippingForm["addressInput"],
            paymentForm["contactAfter"],
            paymentForm["acceptRules"],
            fedExNumber
        )
        
        return form
    
    @classmethod
    def add_form_to_db(cls, formData):
        connection = get_connection()
        cursor = connection.cursor()

        cursor.execute(
            """
            INSERT INTO forms (
                sender, 
                sender_country, 
                sender_city, 
                sender_street, 
                sender_houseNumber, 
                sender_zipCode, 
                sender_email, 
                sender_phoneNumber,
                recipient,
                recipient_country,
                recipient_city,
                recipient_street,
                recipient_houseNumber,
                recipient_zipCode,
                recipient_email,
                recipient_phoneNumber,
                shippingForm_addressInput,
                paymentForm_contactAfter,
                paymentForm_acceptRules,
                parcel_fedExNumber
            ) 
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s); 
            """,
            (
                formData.sender,
                formData.sender_country,
                formData.sender_city,
                formData.sender_street,
                formData.sender_houseNumber,
                formData.sender_zipCode,
                formData.sender_email,
                formData.sender_phoneNumber,
                formData.recipient,
                formData.recipient_country,
                formData.recipient_city,
                formData.recipient_street,
                formData.recipient_houseNumber,
                formData.recipient_zipCode,
                formData.recipient_email,
                formData.recipient_phoneNumber,
                formData.shippingForm_addressInput,
                formData.paymentForm_contactAfter,
                formData.paymentForm_acceptRules,
                formData.parcel_fedExNumber
            ),
        )

        connection.commit()
        connection.close()


        return True
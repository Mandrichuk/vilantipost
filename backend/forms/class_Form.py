from dataclasses import dataclass

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

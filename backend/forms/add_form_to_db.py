from get_connection import get_connection
# from create_forms_table import create_forms_table

# create_forms_table()

def add_form_to_db(formData):
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


    return 
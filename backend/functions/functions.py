
import os
from openai import OpenAI
from dotenv import load_dotenv
from get_connection import get_connection
from random import randint
from cryptography.hazmat.primitives import hashes
import smtplib
import uuid


load_dotenv()
def ChatGPT_support(propmt):
    role_model = """
    I am a multilingual virtual assistant capable of understanding and responding to questions in Russian, English, and other languages. My task is to identify the language of the user's question and respond in that language.
    
    Before providing an answer, I will:
    Make sure that my responses takes less than 300 characters.
    # Important: Always!! rephrase the user's question and cover it in <<>> format (NOT THE FULL RESPONSE BUT ONLY THE TOPIC).
    ALWAYS highlight key words (only one word at the time, if there are multiple words so separate them) like this: <<...>>.
    I will only respond to questions for which predefined answers are available. If the user's question does not match any of them, I will politely inform them that I can only provide assistance with the website's functionality and inquire if they have any questions regarding the site. I will also suggest an example question that the user can ask.
    
    Predefined answers:

    How to send a parcel/envelopes/documents?

    Go to the main page of the globalpost website, fill out the form, pay, and wait for confirmation to your specified email.
    What is allowed to be sent?

    <<Office documents:>> Invitations, contracts, correspondence.
    <<Legal documents:>> Contracts, agreements, complaints, licenses.
    <<Financial documents:>> Accounts, invoices, reports, statements.
    Personal documents: Passports, visas, birth certificates, certificates of marriage.
    <<Other documents:>> Certificates, stamps, documents with an apostille.
    What is prohibited from sending?

    Bank cards, money, crypto keys, driver's licenses.
    How can I contact you?

    Telegram: <https://www.telegram.org/>
    Whatsapp: <https://www.whatsapp.com/>
    Facebook: <https://www.facebook.com/>
    Email: <hello@email.com>
    How to track my parcel?

    The parcel can be tracked by the FedEx number, find the "Track parcel" section and enter a valid number.
    Here's a question to answer: \n
    """

    combined_propmt = role_model + propmt

    api_key = os.getenv('OPENAI_API_KEY')
    if not api_key:
        raise ValueError("API key not found. Make sure the 'OPENAI_API_KEY' variable is set in the .env file.")
    
    client = OpenAI(api_key=api_key)
    completion = client.completions.create(
        model="gpt-3.5-turbo-instruct",
        prompt=combined_propmt,
        max_tokens=300,
        temperature=0.6
    )

    return completion.choices[0].text


def update_form_db(formId, new_values):
    print(formId, new_values)
    connection = get_connection()
    try:
        with connection.cursor() as cursor:
            query = """
            UPDATE forms
            SET
                sender = %s,
                sender_country = %s,
                sender_city = %s,
                sender_street = %s,
                sender_houseNumber = %s,
                sender_zipCode = %s,
                sender_email = %s,
                sender_phoneNumber = %s,
                recipient = %s,
                recipient_country = %s,
                recipient_city = %s,
                recipient_street = %s,
                recipient_houseNumber = %s,
                recipient_zipCode = %s,
                recipient_email = %s,
                recipient_phoneNumber = %s,
                shippingForm_addressInput = %s,
                paymentForm_contactAfter = %s,
                paymentForm_acceptRules = %s,
                parcel_fedExNumber = %s
            WHERE id = %s
            """
            cursor.execute(query, (
                new_values['sender'],
                new_values['sender_country'],
                new_values['sender_city'],
                new_values['sender_street'],
                new_values['sender_houseNumber'],
                new_values['sender_zipCode'],
                new_values['sender_email'],
                new_values['sender_phoneNumber'],
                new_values['recipient'],
                new_values['recipient_country'],
                new_values['recipient_city'],
                new_values['recipient_street'],
                new_values['recipient_houseNumber'],
                new_values['recipient_zipCode'],
                new_values['recipient_email'],
                new_values['recipient_phoneNumber'],
                new_values['shippingForm_address'],
                new_values['paymentForm_contactAfter'],
                new_values['paymentForm_acceptRules'],
                new_values['parcel_fedExNumber'],
                formId
            ))
            connection.commit()
    except Exception as e:
        connection.rollback()
        raise e
    finally:
        connection.close()

    return True


def generate_unique_user_id():
    return str(uuid.uuid4())


def create_admins_table():
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS admins (
        id INT AUTO_INCREMENT PRIMARY KEY,
        login TEXT,
        password TEXT 
    );
    """)


def create_forms_table():
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS forms (
            id INT AUTO_INCREMENT PRIMARY KEY,
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
            paymentForm_contactAfter TEXT,
            paymentForm_acceptRules TEXT,
            parcel_fedExNumber TEXT
        );
        """
    )

    return 


def get_fedex_number():
	return str(randint(10000000, 99999999))


def get_hashed_value(string):
    string = string.encode()
    digest = hashes.Hash(hashes.SHA256())
    digest.update(string)
    hash_value = digest.finalize()
    return hash_value.hex()


def get_values_to_keys(data_list):
  keys = [
      "id",
      "sender",
      "sender_country",
      "sender_city",
      "sender_street",
      "sender_houseNumber",
      "sender_zipCode",
      "sender_email",
      "sender_phoneNumber",
      "recipient",
      "recipient_country",
      "recipient_city",
      "recipient_street",
      "recipient_houseNumber",
      "recipient_zipCode",
      "recipient_email",
      "recipient_phoneNumber",
      "shippingForm_address",
      "paymentForm_contactAfter",
      "paymentForm_acceptRules",
      "parcel_fedExNumber"
  ]

  return dict(zip(keys, data_list))


def is_valid_login_data(login, password):
    connection = get_connection()
    cursor = connection.cursor()
    cursor.execute(f"SELECT * FROM admins WHERE login = '{login}' AND password = '{password}'")
    admin = cursor.fetchone()
    return True if admin else False


def send_email(receiver_email, name, message):
    sender_email = "andrew.mandrichuk2007@gmail.com"
    key = "aqpt ytcc jyqt kbji"
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()

    server.login(sender_email, key)
    server.sendmail(sender_email, receiver_email, message)

    return True

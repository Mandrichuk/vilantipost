import smtplib

sender_email = "andrew.mandrichuk2007@gmail.com"
key = "aqpt ytcc jyqt kbji"

def send_email(receiver_email, name, message):
  server = smtplib.SMTP("smtp.gmail.com", 587)
  server.starttls()

  server.login(sender_email, key)
  server.sendmail(sender_email, receiver_email, message)

  return True

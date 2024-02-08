from get_connection import get_connection

def is_valid_login_data(login, password):
  connection = get_connection()
  cursor = connection.cursor()
  cursor.execute(f"SELECT * FROM admins WHERE login = '{login}' AND password = '{password}'")
  admin = cursor.fetchone()
  return True if admin else False
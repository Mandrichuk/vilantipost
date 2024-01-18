from get_connection import get_connection 

def create_forms_table():
  connection = get_connection()
  cursor = connection.cursor()

  cursor.execute("""
  CREATE TABLE IF NOT EXISTS admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login TEXT UNIQUE,
    password TEXT 
  );
  """)

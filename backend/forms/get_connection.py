import pymysql as ms
from config import server_connection 

def get_connection():
    print(server_connection)
    try: 
        connection = ms.connect(
            host="localhost",
            port=3308,
            user="root",
            password="root",
            db="globalpost",
        )

        return connection
    except Exception as e:
        print(f"Connection error: {e}")
        return e

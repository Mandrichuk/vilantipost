import pymysql as ms
from config import server_connection 

def get_connection():
    try: 
        connection = ms.connect(
            host=server_connection["HOST"],
            port=server_connection["PORT"],
            user=server_connection["USER"],
            password=server_connection["PASSW"],
            db=server_connection["DB"],
        )

        return connection
    except Exception as e:
        print(f"Connection error: {e}")
        return e

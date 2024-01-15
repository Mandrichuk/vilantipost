import pymysql as ms


def get_connection():
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

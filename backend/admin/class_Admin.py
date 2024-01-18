class Admin:
    def __init__(
        self,
        login,
        password
    ):
        self.login = login
        self.password = password

    def __str__(self):
        return (f"Form: login={self.login}, password={self.password}")

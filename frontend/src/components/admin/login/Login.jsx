import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styles from "./login.module.css";
import Navbar from "../../common/navbar/Navbar";
import { adminLoginPage } from "../../../constants";
import TextInput from "../../common/TextInput";

function Login() {
  const language = useSelector((state) => state.language.language);
  const loginPageText = adminLoginPage[language];
  const [loginInputs, setLoginInputs] = useState({
    loginInput: "",
    passwordInput: "",
  });

  function submitForm(event) {
    event.preventDefault();

    let isValid = isFormValid(loginInputs);
    if (isValid) {
      sendToBackend();
      setLoginInputs({
        loginInput: "",
        passwordInput: "",
      });
    }
  }

  function sendToBackend() {
    const stringifiedForm = JSON.stringify(loginInputs);

    axios
      .post("http://127.0.0.1:5000/api/admin-login", stringifiedForm, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при отправке данных на сервер:", error);
      });
  }

  function loginInputHandleChange(field, value) {
    setLoginInputs((prevLoginInputs) => ({
      ...prevLoginInputs,
      [field]: value,
    }));
  }

  function isFormValid(form) {
    const { loginInput, passwordInput } = form;

    if (loginInput && passwordInput) {
      return true;
    }
    return false;
  }

  return (
    <div
      className={`${styles.backgroundCover} w-full flex flex-col items-center bg-white`}
    >
      <Navbar />
      <div className={`wrapper`}>
        <div
          className={`${styles.login} w-full  flex flex-col items-center justify-center`}
        >
          <div className={`titleText`}>{loginPageText.titleText}</div>
          <div
            className={`${styles.inputsContainer} w-full max-w-[350px] flex flex-col items-cneter justify-center mt-[30px]`}
          >
            <div className={`mb-5`}>
              <TextInput
                type={loginPageText.loginInput.type}
                placeholder={loginPageText.loginInput.placeholder}
                value={loginPageText.loginInput.value}
                field={loginPageText.loginInput.field}
                getValue={loginInputHandleChange}
              />
            </div>

            <div className={`mb-5`}>
              <TextInput
                type={loginPageText.passwordInput.type}
                placeholder={loginPageText.passwordInput.placeholder}
                value={loginPageText.passwordInput.value}
                field={loginPageText.passwordInput.field}
                getValue={loginInputHandleChange}
              />
            </div>

            <div className={`{styles.submitButton}`}>
              <button
                type="submit"
                className={`darkerButton`}
                onClick={(event) => submitForm(event)}
              >
                {loginPageText.submitButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

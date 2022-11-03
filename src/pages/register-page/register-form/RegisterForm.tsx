import React, { useRef, useState, useEffect } from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../commonComponents/form/form.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userAPI } from "services/UserService";
import ErrorMessage from "commonComponents/error-message/ErrorMesage";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%~]).{8,24}$/;

const USER_ROLE = "f4bbe82f-fd06-4d45-83ac-d9a52a70fbb5";

function RegisterForm() {
  const [
    registerUser,
    {
      isSuccess: isRegisterSucces,
      isError: isRegisterError,
      error: registerError,
    },
  ] = userAPI.useRegisterUserMutation();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";

  const emailRef = useRef<null | HTMLInputElement>(null);
  const errRef = useRef<null | HTMLParagraphElement>(null);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatchPassword, setValidMatchPassword] = useState(false);
  const [matchFocusPassword, setMatchFocusPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState<Array<string>>([]);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatchPassword(match);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrorMessage([]);
  }, [email, password, matchPassword]);

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const emailOnFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailFocus(true);
  };

  const emailOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailFocus(false);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const passwordOnFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordFocus(true);
  };

  const passwordOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordFocus(false);
  };

  const changeMatchPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMatchPassword(e.target.value);
  };

  const matchPasswordOnFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMatchFocusPassword(true);
  };

  const matchPasswordOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMatchFocusPassword(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PASSWORD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrorMessage((oldArray) => [...oldArray, "Invalid Entry"]);
      return;
    }
    setErrorMessage([]);
    registerUser({ email, password, role: USER_ROLE });
  };

  useEffect(() => {
    if (isRegisterSucces) {
      navigate(from, { replace: true });
    }
  }, [isRegisterSucces]);

  useEffect(() => {
    if (registerError) {
      if (`data` in registerError) {
        registerError.data.errors.forEach((element: { message: string }) => {
          setErrorMessage((oldArray) => [...oldArray, element.message]);
        });
      }
    }
  }, [isRegisterError]);

  return (
    <section className="form">
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <label htmlFor="email">Почта:</label>
        <input
          className={validEmail ? "valid" : "invalid"}
          type="text"
          id="email"
          ref={emailRef}
          autoComplete="off"
          onChange={changeEmail}
          required={true}
          aria-invalid={validEmail ? "false" : "true"}
          aria-describedby="emailnote"
          onFocus={emailOnFocus}
          onBlur={emailOnBlur}
        />
        <p
          id="emailnote"
          className={
            emailFocus && email && !validEmail ? "instructions" : "offscreen"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          Пример: example@example.ru
        </p>
        {/* Password Input */}
        <label htmlFor="password">Пароль:</label>
        <input
          className={validPassword && password ? "valid" : "invalid"}
          type="password"
          id="password"
          onChange={changePassword}
          required={true}
          aria-invalid={validEmail ? "false" : "true"}
          aria-describedby="passwordNote"
          onFocus={passwordOnFocus}
          onBlur={passwordOnBlur}
        />
        <p
          id="passwordNote"
          className={
            passwordFocus && !validPassword ? "instructions" : "offscreen"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          Пароль должен содержать от 8 до 24 символов. <br />
          Обязательно заглавную и строчную буквы. <br />
          Цифры и спецзнаки: !@%~&# <br />
          Пример: Aa12345@ <br />
        </p>
        {/* Match Password Input */}
        <label htmlFor="confirm_password">Подтвердите пароль:</label>
        <input
          className={
            validMatchPassword && validPassword && matchPassword
              ? "valid"
              : "invalid"
          }
          type="password"
          id="confirm_password"
          onChange={changeMatchPassword}
          required={true}
          aria-invalid={validEmail ? "false" : "true"}
          aria-describedby="matchPasswordNote"
          onFocus={matchPasswordOnFocus}
          onBlur={matchPasswordOnBlur}
        />
        <p
          id="matchPasswordNote"
          className={
            matchFocusPassword && !validMatchPassword
              ? "instructions"
              : "offscreen"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          Пароль должен совпадать
        </p>
        {/* Error message */}
        {errorMessage && (
          <ErrorMessage errorMessage={errorMessage} errorRef={errRef} />
        )}
        {/* Submit Button */}
        <button
          disabled={
            !validEmail || !validPassword || !validMatchPassword ? true : false
          }
          type="submit"
        >
          Регистрация
        </button>
      </form>
      <p className="subText">
        Уже есть аккаунт?
        <span className="line">
          <Link to="/login">Войти</Link>
        </span>
      </p>
    </section>
  );
}
export default RegisterForm;

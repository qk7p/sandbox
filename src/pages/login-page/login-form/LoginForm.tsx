import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../../commonComponents/form/form.css";
import useLocalStorage from "hooks/useLocalStorage";
import { userAPI } from "services/UserService";
import { useAppDispatch } from "hooks/useAppDispatch";
import { setUser } from "store/slices/userSlice";
import ErrorMessage from "commonComponents/error-message/ErrorMesage";

function LoginForm() {
  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginError,
    },
  ] = userAPI.useLoginUserMutation();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const emailRef = useRef<null | HTMLInputElement>(null);
  const errorRef = useRef<null | HTMLParagraphElement>(null);

  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<Array<string>>([]);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrorMessage([]);
  }, [email, password]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && password) {
      setErrorMessage([]);
      await loginUser({ email, password });
    } else {
      setErrorMessage((oldArray) => [...oldArray, "Введите почту и пароль"]);
    }

  };

  useEffect(() => {
    if (isLoginSuccess) {
      if (loginData) {
        dispatch(
          setUser({
            email: email,
            access_token: loginData?.data.access_token,
            refresh_token: loginData?.data.refresh_token,
          })
        );
      } else {
        setErrorMessage((oldArray) => [
          ...oldArray,
          "Не получен ответ от сервера.",
        ]);
      }

      navigate(from, { replace: true });
    }
  }, [isLoginSuccess]);

  useEffect(() => {
    if (loginError) {
      if (`data` in loginError) {
        loginError.data.errors.forEach((element: { message: string }) => {
          setErrorMessage((oldArray) => [...oldArray, element.message]);
        });
      }
    }
  }, [isLoginError]);

  return (
    <section className="form">
      <h1>Вход в аккаунт</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Почта:</label>
        <input
          type="text"
          id="email"
          ref={emailRef}
          autoComplete="off"
          onChange={handleEmailChange}
          value={email}
          required
        />
        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          id="password"
          ref={emailRef}
          onChange={handlePasswordChange}
          value={password}
          required
        />
        <button type="submit">Войти</button>
      </form>
      {errorMessage && (
        <ErrorMessage errorMessage={errorMessage} errorRef={errorRef} />
      )}
      <p className="subText">
        Нет аккаунта?
        <span className="line">
          <Link to="/register">Создать</Link>
        </span>
      </p>
    </section>
  );
}

export default LoginForm;

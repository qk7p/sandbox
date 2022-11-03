import { Block } from "commonComponents/block/Block";
import LoginForm from "./login-form/LoginForm";
import "./login-page.css";

function LoginPage() {
  return (
    <div className="loginPage">
      <Block>
        <LoginForm />
      </Block>
    </div>
  );
}

export default LoginPage;

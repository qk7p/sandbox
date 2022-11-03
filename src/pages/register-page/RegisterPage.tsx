import { Block } from "commonComponents/block/Block";
import "./register-page.css";
import RegisterForm from "./register-form/RegisterForm";

function RegisterPage() {
  return (
    <div className="registerPage">
      <Block>
        <RegisterForm />
      </Block>
    </div>
  );
}

export default RegisterPage;

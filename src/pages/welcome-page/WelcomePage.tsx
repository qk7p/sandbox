import { Block } from "commonComponents/block/Block";
import LoginForm from "pages/login-page/login-form/LoginForm";
import ProjectLogo from "assets/icons/general/logo.svg";
import "./welcome-page.css";

function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="welcome-logo">
        <img
          src={ProjectLogo}
          alt="project_logo"
          // width="1440px"
          width="100%"
        />
      </div>
      <section className="welcome-about">
        <Block>
          <div className="welcome-text">
            <h1> Привет, ты в песочнице.</h1>
            <p>
              Проект, в котором я отрабатываю полученные при обучении навыки.{" "}
              <br />
              Ты можешь перейти к моему резюме или просмотреть мои
              мини-приложения.
              <br /> Чтобы получить доступ к мини-приложениям, необходимо
              авторизоваться. <br />
              Для быстрой авторизации можно использовать аккаунт: <br />
              <br />
              Почта: hr@review.ru <br /> Пароль: Hr12345!
            </p>
          </div>
        </Block>
        {/* //TODO исправить при реализации авторизации */}
        {true ? (
          <Block>
            <LoginForm />
          </Block>
        ) : null}
        <Block headerTitle="Комментарии:">
          <div className="comments">
            <p>Раз раз раз</p>
            <p>два два два</p>
            <p>три три три</p>
            {true && (
              <div>
                <input type="text" />
                <button>отправить</button>
              </div>
            )}
          </div>
        </Block>
      </section>
      <section className="projects">
        <Block>
          <div className="projects-list">
            <h1>Нестер</h1>

            <h1>Составлялка писем</h1>

            <h1>Мини е-коммерц</h1>
          </div>
        </Block>
      </section>
    </div>
  );
}

export default WelcomePage;

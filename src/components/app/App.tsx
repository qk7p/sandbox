import { Route, Routes } from "react-router-dom";
import { Layout } from "pages/layout/Layout";
import { Nester } from "pages/nester/Nester";
import { NotFound } from "pages/not-found/NotFound";
import RegisterPage from "pages/register-page/RegisterPage";
import LoginPage from "pages/login-page/LoginPage";
import WelcomePage from "pages/welcome-page/WelcomePage";
import RequireAuth from "components/require-auth/RequireAuth";
import ResumePage from "pages/resume-page/ResumePage";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/resume" element={<ResumePage />} />
        {/* private */}
        <Route element={<RequireAuth />}>
          <Route path="/nester" element={<Nester />} />
        </Route>
        {/* for all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

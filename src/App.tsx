import { Route, Routes } from "react-router-dom";
import { Layout } from "pages/layout/Layout";
import { Nester } from "pages/nester/Nester";
import { NotFound } from "pages/not-found/NotFound";
import RegisterPage from "pages/register-page/RegisterPage";
import LoginPage from "pages/login-page/LoginPage";
import WelcomePage from "pages/welcome-page/WelcomePage";
import RequireAuth from "components/require-auth/RequireAuth";
import { useAuth } from "hooks/useAuth";

function App() {

  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* private */}
        <Route element={<RequireAuth />}>
          <Route path="/nester" element={<Nester />} />
        </Route>
        {/* for all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequireAuth() {
  const location = useLocation();

  return true ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;

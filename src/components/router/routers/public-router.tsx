import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "pages";
import { LOGIN } from "constants/routes";

export const PublicRouter = () => (
  <Routes>
    <Route path={LOGIN} element={<Login />} />
    <Route path="*" element={<Navigate to={LOGIN} />} />
  </Routes>
);

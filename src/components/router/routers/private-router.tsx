import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "components";
import { Home } from "pages";
import { HOME } from "constants/routes";

export const PrivateRouter = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path={HOME} element={<Home />} />
      <Route path="*" element={<Navigate to={HOME} />} />
    </Route>
  </Routes>
);

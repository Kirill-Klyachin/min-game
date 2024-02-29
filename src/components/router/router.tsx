import { PublicRouter, PrivateRouter } from "./routers";
import { useAuth } from "hooks";

export const Router = () => {
  const { isAuth } = useAuth();

  return isAuth ? <PrivateRouter /> : <PublicRouter />;
};

import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { logout } from "api";
import {
  WebsocketContext,
  PlayerContext,
  ActionsPlayerContext,
} from "contexts";
import { USER_ID } from "constants/local-storage";

export const MainLayout = () => {
  const { socket } = useContext(WebsocketContext);
  const { id } = useContext(PlayerContext);
  const { setId } = useContext(ActionsPlayerContext);

  const handleClick = async () => {
    try {
      await logout({ id });
      const str = JSON.stringify({
        event: "done_step",
      });
      socket?.send(str);

      setId(0);
      sessionStorage.removeItem(USER_ID);
      document.cookie = `userId=null`;
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <button onClick={handleClick}>выйти</button>
      <Outlet />
    </>
  );
};

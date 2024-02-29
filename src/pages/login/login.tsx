import { useState, useContext } from "react";
import cn from "classnames";
import { WebsocketContext, ActionsPlayerContext } from "contexts";
import { logIn } from "api";
import { USER_ID } from "constants/local-storage";
import styles from "./login.module.css";

export const Login = () => {
  const { socket } = useContext(WebsocketContext);
  const { setId } = useContext(ActionsPlayerContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeLogin: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget;
    setLogin(value);
  };

  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const { value } = e.currentTarget;
    setPassword(value);
  };

  const handleSubmit = async () => {
    try {
      const body = { login, password };
      const { data } = await logIn(body);
      const { id } = data;

      sessionStorage.setItem(USER_ID, id.toString());
      document.cookie = `userId=${id}`;
      setId(id);
      const str = JSON.stringify({
        event: "done_step",
      });
      socket?.send(str);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={cn(styles.item, styles.input)}
        placeholder="login"
        value={login}
        onChange={handleChangeLogin}
      />
      <input
        className={cn(styles.item, styles.input)}
        placeholder="password"
        value={password}
        onChange={handleChangePassword}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

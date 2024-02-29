import React from "react";
import {
  Ground,
  Player,
  OutherPlayers,
  Handlers,
  WebsocketConnect,
} from "components";
import styles from "./home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <WebsocketConnect />
        <Ground />
        <Player />
        <OutherPlayers />
        <Handlers />
      </div>
    </div>
  );
};

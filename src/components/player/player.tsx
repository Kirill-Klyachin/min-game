import React, { useEffect, useContext, useState } from "react";
import {
  WebsocketContext,
  PlayerContext,
  ActionsPlayerContext,
} from "contexts";
import { makeStep } from "api";
import { PLAYER_ACTION, STEP, STEP_PX } from "constants/player";
import { useGetPlayer } from "api";
import styles from "./player.module.css";

//добавнить единицу времени для анимации (1 щелчок запускает 1 такую еденицу)
//взависимости от этой единицы будет запускаться та или еная анимация на этой время
//(шаг, рубка, удар)

export const Player = () => {
  const { socket } = useContext(WebsocketContext);
  const { coordinates, action, id } = useContext(PlayerContext);
  const { setCoordinates, setAction } = useContext(ActionsPlayerContext);

  const playerData = useGetPlayer({ id });

  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    if (playerData) {
      const { coordinates } = playerData;
      setCoordinates(coordinates);
    }
  }, [playerData, setCoordinates]);

  useEffect(() => {
    const asyncEffect = async () => {
      try {
        if (action) {
          const { data } = await makeStep({ action }, id);

          const { coordinates } = data;
          setCoordinates(coordinates);
          setAction(null);

          if (socket) {
            const str = JSON.stringify({
              event: "done_step",
            });
            socket.send(str);
          }
        }
      } catch (e) {
        console.error(e);
      }
    };

    asyncEffect();
  }, [action]);

  /*  useEffect(() => {
    if (socket) {
      socket.send(
        JSON.stringify({
          event: "chat-message",
          payload: { userName: "1", message: "2" },
        })
      );
    }
  }, [socket]); */

  useEffect(() => {
    const [x, y] = coordinates;
    //TODO: вынести логику позиционирования
    const left = x * STEP_PX;
    const top = y * STEP_PX;
    //

    setLeft(left);
    setTop(top);
  }, [coordinates]);

  return (
    <div className={styles.container} style={{ top, left }}>
      <div className={styles.player}></div>
    </div>
  );
};

import React, { useContext, useEffect, useMemo, useState } from "react";
import { useGetOtherPlayers } from "api";
import { PlayerContext, WebsocketContext } from "contexts";
import { STEP_PX } from "constants/player";
import styles from "./outher-players.module.css";

export const OutherPlayers = () => {
  const { message } = useContext(WebsocketContext);
  const { id } = useContext(PlayerContext);
  const otherPlayers = useGetOtherPlayers({ id });
  const [socketData, setSocketData] = useState<any[] | null>(null);

  const currentData = useMemo(
    () => socketData ?? otherPlayers,
    [otherPlayers, socketData]
  );

  useEffect(() => {
    if (message) {
      const { event, payload } = message;

      if (event === "done_step") {
        const filterData = payload.filter((item: any) => item.id !== id);
        setSocketData(filterData);
      }
    }
  }, [message]);

  const display = useMemo(
    () =>
      currentData?.map((item) => {
        const { id, x, y } = item;

        //TODO: вынести логику позиционирования
        const left = x * STEP_PX;
        const top = y * STEP_PX;
        //

        return (
          <div className={styles.container} key={id} style={{ top, left }}>
            <div className={styles.player}></div>
          </div>
        );
      }),
    [currentData]
  );

  return <>{display}</>;
};

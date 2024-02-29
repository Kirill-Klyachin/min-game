import React, { useContext } from "react";
import { Player } from "components";
import { PlayerContext } from "contexts";
import styles from "./chunk.module.css";

type ChunkProps = {
  data: any;
  coordinates: number[];
};

export const Chunk = ({ data, coordinates }: ChunkProps) => {
  const { coordinates: playerCoordinates } = useContext(PlayerContext);
  const isHerePlayer =
    playerCoordinates[0] === coordinates[0] &&
    playerCoordinates[1] === coordinates[1];

  return (
    <div className={styles.chunk}>
      <div className={styles.coordinates}>{coordinates}</div>
      {/* {isHerePlayer && <Player />} */}
    </div>
  );
};

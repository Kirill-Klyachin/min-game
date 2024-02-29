import React, { useMemo } from "react";
import styles from "./chunk-row.module.css";
import { Chunk } from "components/ground/components";
import { Chunk as TChunk } from "types";

type ChunkRowProps = {
  row: TChunk[];
};

export const ChunkRow = ({ row }: ChunkRowProps) => {
  const display = useMemo(
    //TODO: fixed key
    () =>
      row.map((item, index) => {
        return <Chunk key={index} data={item} coordinates={item.coordinates} />;
      }),
    [row]
  );

  return <div className={styles.row}>{display}</div>; //z-index: (index (in array) + 1) * 100
};

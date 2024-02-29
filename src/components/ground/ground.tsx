import React, { useMemo } from "react";
import { useGetGround } from "api";
import { ChunkRow } from "./components";

export const Ground = () => {
  const groundData = useGetGround();

  const display = useMemo(
    //TODO: fixed key
    () => groundData.map((item, index) => <ChunkRow key={index} row={item} />),
    [groundData]
  );

  return <div>{display}</div>;
};

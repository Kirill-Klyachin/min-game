import { useEffect, useState } from "react";
import { instance } from "api";
import { PLAYER } from "constants/api";
import { GetPlayerParams, GetPlayerResponse } from "./types";

export const getPlayer = async ({ id }: GetPlayerParams) =>
  instance.get<GetPlayerResponse>(PLAYER, { params: { id } });

export const useGetPlayer = ({ id }: GetPlayerParams) => {
  const [player, setPlayer] = useState<GetPlayerResponse | null>(null);

  useEffect(() => {
    const asyncEffect = async () => {
      try {
        const { data } = await getPlayer({ id });
        setPlayer(data);
      } catch (e) {
        console.error(e);
      }
    };

    asyncEffect();
  }, [id]);

  return player;
};

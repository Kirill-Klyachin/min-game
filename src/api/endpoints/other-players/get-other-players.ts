import { useEffect, useState } from "react";
import { instance } from "api";
import { OTHER_PLAYERS } from "constants/api";
import { GetOtherPlayersParams, GetOtherPlayersResponse } from "./types";

export const getOtherPlayers = async ({ id }: GetOtherPlayersParams) =>
  instance.get<GetOtherPlayersResponse>(OTHER_PLAYERS, { params: { id } });

export const useGetOtherPlayers = ({ id }: GetOtherPlayersParams) => {
  const [player, setPlayer] = useState<
    GetOtherPlayersResponse["players"] | null
  >(null);

  useEffect(() => {
    const asyncEffect = async () => {
      try {
        const { data } = await getOtherPlayers({ id });
        setPlayer(data.players);
      } catch (e) {
        console.error(e);
      }
    };

    asyncEffect();
  }, [id]);

  return player;
};

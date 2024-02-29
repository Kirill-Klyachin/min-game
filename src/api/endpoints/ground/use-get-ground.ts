import { useState, useEffect } from "react";
import { Ground } from "types";
import { getGound } from "./get-ground";

export const useGetGround = () => {
  const [groundData, setGroundData] = useState<Ground>([]);

  useEffect(() => {
    const asyncEffect = async () => {
      try {
        const { data } = await getGound();
        const { ground } = data;

        setGroundData(ground);
      } catch (e) {
        console.error(e);
      }
    };

    asyncEffect();
  }, []);

  return groundData;
};

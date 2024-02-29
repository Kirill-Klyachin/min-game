import { useContext, useCallback, useEffect } from "react";
import { KEY_CODE } from "./constants";
import { PLAYER_ACTION } from "constants/player";
import { ActionsPlayerContext } from "contexts";

export const Handlers = () => {
  const { setAction } = useContext(ActionsPlayerContext);

  const handleKayDown = useCallback(
    (e: KeyboardEvent) => {
      const { code } = e;

      if (code === KEY_CODE.keyW) {
        setAction(PLAYER_ACTION.stepForward);
      } else if (code === KEY_CODE.keyS) {
        setAction(PLAYER_ACTION.stepBack);
      } else if (code === KEY_CODE.keyD) {
        setAction(PLAYER_ACTION.stepRight);
      } else if (code === KEY_CODE.keyA) {
        setAction(PLAYER_ACTION.stepLeft);
      }
    },
    [setAction]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKayDown);

    return () => {
      document.removeEventListener("keydown", handleKayDown);
    };
  }, [handleKayDown]);

  return null;
};

import { useState, useEffect, useContext } from "react";
import { PlayerContext, ActionsPlayerContext } from "contexts";
import { USER_ID } from "constants/local-storage";

export const useAuth = () => {
  const { id } = useContext(PlayerContext);
  const { setId } = useContext(ActionsPlayerContext);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (id) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [id]);

  useEffect(() => {
    const userId = sessionStorage.getItem(USER_ID);

    if (userId) setId(Number(userId));
  }, []);

  return { isAuth };
};

import { useCallback, useEffect, useState } from "react";
import { IUser } from "../../interfaces/types";

const useFetch = () => {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("https://gitconnected.com/v1/portfolio/valeriubahov");
      if (!response.ok) {
        throw new Error(`Cannot retrieve user data`);
      }
      const data = await response.json();
      setUser(data);
      setIsLoading(!isLoading);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return { user, isLoading };
};

export default useFetch;

import { useCallback, useEffect, useState } from "react";

const useFetch = () => {
  const [user, setUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

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

import { createContext, useContext } from "react";
import { IContext, UserProviderProps } from "../../interfaces/types";
import useFetch from "../customHooks/fetchUserData";

export const UserDataContext = createContext<IContext | undefined>(undefined);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const { user, isLoading } = useFetch();

  return (
    <UserDataContext.Provider value={{ user, isLoading }}>{children}</UserDataContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserDataContext);

  if (!context) {
    throw new Error("Cannot use `useUserContext` outside of `UserProvider`");
  }

  return context;
};

export default UserProvider;

import React from "react";
import { UserProviderProps } from "../../interfaces/types";

const Layout: React.FC<UserProviderProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;

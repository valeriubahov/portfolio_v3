import React from "react";
import ReactDOM from "react-dom/client";
import UserProvider from "./components/context/UserContext";
import Pages from "./components/Pages";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <Pages />
    </UserProvider>
  </React.StrictMode>
);

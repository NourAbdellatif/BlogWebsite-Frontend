import React, { useState } from "react";

export const AuthenticationContext = React.createContext();

export default function AuthenticationProvider(props) {
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const Login = () => {
    setIsLoggedIn(true);
  };
  const Logout = () => {
    setIsLoggedIn(false);
  };
  return (
    <AuthenticationContext.Provider value={{ isLoggedIn, Login, Logout }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
}

export const useAuthentication = () => {
  return React.useContext(AuthenticationContext);
};

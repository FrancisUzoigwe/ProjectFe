import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const userState = useSelector((state: any) => state.user);
  // console.log(userState);
  
  return (
    <div>{userState ? <div>{children}</div> : <Navigate to="/user" />}</div>
  );
};

export default PrivateRoute;

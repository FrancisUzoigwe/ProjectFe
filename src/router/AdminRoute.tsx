import { PropsWithChildren, FC } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute: FC<PropsWithChildren> = ({ children }) => {
  const admin = useSelector((state: any) => state.admin);
  return <div>{admin ? <div>{children}</div> : <Navigate to={`/`} />}</div>;
};

export default AdminRoute;

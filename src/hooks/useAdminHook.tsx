import { useQuery } from "@tanstack/react-query";
import { adminOneRead } from "../apis/adminAuthAPI";
import { useSelector } from "react-redux";
import { viewOneAdminTask, viewTask } from "../apis/taskAPI";

export const useAdminTask = () => {
  // const admin = useSelector((state: any) => state.admin);
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => viewTask(),
  });
  return { data, isLoading };
};

export const useAdminView = () => {
  const admin = useSelector((state: any) => state.admin);
  const { data, isLoading } = useQuery({
    queryKey: ["admins"],
    queryFn: () => adminOneRead(admin),
  });

  return { data, isLoading };
};

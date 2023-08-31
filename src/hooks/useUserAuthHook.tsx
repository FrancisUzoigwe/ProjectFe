import { useQuery } from "@tanstack/react-query";
import { readOneUser,readUser } from "../apis/userAuthAPI";
import { useSelector } from "react-redux";

export const useReadUser = () => {
  const user = useSelector((state: any) => state.user);
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => readOneUser(user),
  });
  console.log("read",user);
  return { data, isLoading };
};

export const useReadAllUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => readUser(),
  });
  return { data, isLoading };
};

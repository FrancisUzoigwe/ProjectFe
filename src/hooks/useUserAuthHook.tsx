import { useQuery } from "@tanstack/react-query";
import { getUserByNameAPI, readOneUser, readUser } from "../apis/userAuthAPI";
import { useSelector } from "react-redux";

export const useReadUser = () => {
  const user = useSelector((state: any) => state.user);
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => readOneUser(user),
  });
  console.log("read", user);
  return { data, isLoading };
};

export const useReadAllUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => readUser(),
  });
  return { data, isLoading };
};

export const useUserByName = (name: string) => {
  const { data: user, isLoading: isLoad } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUserByNameAPI(name),
  });
  return { user, isLoad };
};

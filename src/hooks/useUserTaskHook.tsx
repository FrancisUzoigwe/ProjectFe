import { useQuery } from "@tanstack/react-query";
import { readProgressAPI, toProgressAPI, viewOneTask } from "../apis/taskAPI";
import { useSelector } from "react-redux";

export const useUserTask = () => {
  const user = useSelector((state: any) => state.user);
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => viewOneTask(user),
  });

  return { data, isLoading };
};

export const useReadProgress = () => {
  const { data: progress } = useQuery({
    queryKey: ["progress"],
    queryFn: readProgressAPI,
  });
  return { progress };
};

// export const useProgressTask = (taskID: string) => {
//   const { data: progress, isLoading: isLoaded } = useQuery({
//     queryKey: ["progress"],
//     queryFn: () => toProgressAPI(taskID),
//   });
//   return { data: progress, isLoading: isLoaded };
// };

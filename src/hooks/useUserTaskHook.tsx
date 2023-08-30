import { useQuery } from "@tanstack/react-query";
import { viewTask } from "../apis/taskAPI";

export const useUserTask = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: viewTask,
  });

  return { data, isLoading };
};

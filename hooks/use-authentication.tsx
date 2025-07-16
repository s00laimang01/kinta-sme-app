import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/lib/utils";

export const useAuthentication = (key?: any, retry: number = 5000) => {
  //

  const {
    isLoading,
    data: user,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["user", key],
    queryFn: () => getUser(),
    refetchInterval: retry,
  });

  return {
    isLoading,
    user,
    error,
    isAuthenticated: isSuccess,
  };
};

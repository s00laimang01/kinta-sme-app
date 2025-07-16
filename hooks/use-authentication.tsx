import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/lib/utils";
import Cookies from "js-cookie";

export const useAuthentication = (key?: any, retry?: number) => {
  //

  console.log({ cookies: Cookies.get("token") });

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

  console.log({ user });

  return {
    isLoading,
    user,
    error,
    isAuthenticated: isSuccess,
  };
};

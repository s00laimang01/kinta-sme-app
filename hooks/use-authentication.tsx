import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/lib/utils";
import { useEffect, useState } from "react";

export const useAuthentication = (key?: any, retry?: number) => {
  const [isFirstRender, setIsFirstRender] = useState(true);

  const {
    isLoading,
    data: user,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["user", key],
    queryFn: () => getUser(),
    refetchInterval: retry,
    enabled: isFirstRender, // Only run query on first render
  });

  useEffect(() => {
    // Set isFirstRender to false after first query completes
    if (!isLoading && isFirstRender) {
      setIsFirstRender(false);
    }
  }, [isLoading, isFirstRender]);

  return {
    isLoading,
    user,
    error,
    isAuthenticated: isSuccess,
    isFirstRender,
  };
};

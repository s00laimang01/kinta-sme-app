import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import Text from "./text";
import {
  myApi,
  errorMessage,
  getDedicatedAccount,
  apiResponse,
} from "@/lib/utils";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { Button } from "./ui/button";
import VerifyEmail from "./verify-email";
import { Skeleton } from "./ui/skeleton";
import { useAuthentication } from "@/hooks/use-authentication";
import { dedicatedAccountNumber } from "@/types";

const TopUpCard = () => {
  const { user } = useAuthentication();

  console.log({ user });

  const { isLoading, data: __data } = useQuery({
    queryKey: ["get-dedicated-account"],
    queryFn: async () =>
      (await myApi.get<apiResponse<dedicatedAccountNumber>>("/account/me"))
        .data,
    //refetchInterval: 5000,
  });

  const { data: account } = __data || {};

  const copyAccountNumber = (text = "") => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Copied to clipboard", {
        richColors: true,
        closeButton: true,
      });
    });
  };

  const sendVerificationCode = async () => {
    try {
      await myApi.post(`/users/me/verify-account/`, { type: "email" });

      toast.success("Verification code sent successfully");
    } catch (error) {
      toast.error(errorMessage(error).message);
    }
  };

  if (isLoading) {
    return <Skeleton className="w-full h-[11rem]" />;
  }

  return (
    <Card className="bg-primary/80 rounded-sm mt-4">
      <CardContent className="space-y-3">
        <Text className="font-semibold text-white/80">
          {account?.accountDetails.bankName.toUpperCase() ||
            "USER ACCOUNT NOT VERIFIED"}
        </Text>
        <div className="w-full flex items-center justify-between">
          <CardTitle className="text-4xl font-bold text-white">
            {account?.accountDetails?.accountNumber || "N/A"}
          </CardTitle>
          {account?.hasDedicatedAccountNumber ? (
            <Button
              onClick={() =>
                copyAccountNumber(account.accountDetails.accountNumber)
              }
              className="rounded-sm bg-white/20 hover:bg-white/30"
            >
              Copy
            </Button>
          ) : (
            <VerifyEmail email={user?.auth?.email!}>
              <Button
                onClick={sendVerificationCode}
                className="rounded-sm bg-white/20 hover:bg-white/30"
              >
                VERIFY EMAIL
              </Button>
            </VerifyEmail>
          )}
        </div>
        <Text className="text-white/80">
          {account?.accountDetails.accountName || "EMAIL NOT YET VERIFIED"}
        </Text>
      </CardContent>
    </Card>
  );
};

export default TopUpCard;

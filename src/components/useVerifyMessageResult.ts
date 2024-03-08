import { useEffect } from "react";
import { useVerifyMessage, Config, UseVerifyMessageParameters } from "wagmi";

const useVerifyMessageResult = ({
  signture,
  message,
  account,
}: {
  signture: UseVerifyMessageParameters<Config>["signature"];
  message: UseVerifyMessageParameters<Config>["message"];
  account: UseVerifyMessageParameters<Config>["address"];
}) => {
  const result = useVerifyMessage({
    address: account,
    message: message,
    signature: signture,
  });
  
  return result;
};

export default useVerifyMessageResult;

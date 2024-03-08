import {
  useSignMessage,
  UseVerifyMessageParameters,
  UseAccountReturnType,
  Config,
} from "wagmi";
import useVerifyMessageResult from "./useVerifyMessageResult";
import { useCallback, useEffect, useState } from "react";

const message = "hello world" as const;

const SignMessage = ({
  account,
}: {
  account: UseAccountReturnType<Config>["address"];
}) => {
  const [signture, setSignture] =
    useState<UseVerifyMessageParameters<Config>["signature"]>();
  const { signMessage } = useSignMessage();

  const verifyResult = useVerifyMessageResult({
    signture,
    message,
    account,
  });

  console.log({
    verifyResult,
  });

  useEffect(() => {
    console.log({
      signture,
      message,
      account,
    });
  }, [account, signture]);

  const getSignture = useCallback(() => {
    signMessage(
      { message },
      {
        onSuccess: (res) => {
          if (res) {
            setSignture(res);
          }
        },
      }
    );
  }, [signMessage]);

  return (
    <>
      <button onClick={getSignture}>Sign message</button>
    </>
  );
};

export default SignMessage;

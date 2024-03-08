import {
  useSignTypedData,
  UseVerifyMessageParameters,
  UseAccountReturnType,
  Config,
} from "wagmi";
import useVerifyTypedDataResult, {
  domain712,
  message712,
  types712,
} from "./useVerifyTypedDataResult";
import { useEffect, useState } from "react";

const Sign712 = ({
  account,
}: {
  account: UseAccountReturnType<Config>["address"];
}) => {
  const { signTypedData } = useSignTypedData();
  const [signture, setSignture] =
    useState<UseVerifyMessageParameters<Config>["signature"]>();

  const verifyResult = useVerifyTypedDataResult({
    signture,
    account,
  });

  useEffect(() => {
    console.log({
      verifyResult712: verifyResult,
      signture,
      account
    });
  }, [account, signture, verifyResult]);

  return (
    <button
      onClick={() =>
        signTypedData(
          {
            domain: domain712,
            types: types712,
            primaryType: "Mail",
            message: message712,
          },
          {
            onSuccess: (res) => {
              if (res) {
                setSignture(res);
              }
            },
          }
        )
      }
    >
      Sign 712
    </button>
  );
};

export default Sign712;

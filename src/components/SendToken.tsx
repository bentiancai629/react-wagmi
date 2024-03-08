import { useSendTransaction, useTransaction } from "wagmi";
import { parseEther } from "viem";
import { useEffect, useState } from "react";

const SendToken = () => {
  const [hash, setHash] = useState<`0x${string}`>();
  const { sendTransaction } = useSendTransaction();
  const hashResult = useTransaction({ hash });

  useEffect(() => {
    console.log({
      hashResult,
    });
  }, [hashResult]);

  console.log({
    value: parseEther("0.000001"),
  });
  return (
    <button
      onClick={() =>
        sendTransaction(
          {
            to: "0xAf0F0fb4db5cE4247F17790b2b2eA5140e22A968",
            value: parseEther("0.000001"),
          },
          {
            onSuccess: (hash) => {
              if (hash) {
                setHash(hash);
                console.log({
                  hash,
                });
              }
            },
          }
        )
      }
    >
      Send transaction
    </button>
  );
};

export default SendToken;

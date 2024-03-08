import React, { useEffect, useState } from "react";
import { useAccount, useBlock, useChainId, useChains } from "wagmi";
import Balance from "./Balance";
import SignMessage from "./SignMessage";
import Sign712 from "./Sign712";
//rface

const ShowMesseage = () => {
  const account = useAccount();

  const block = useBlock();
  const chainId = useChainId();
  const chains = useChains();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      console.log({
        account,
        block,
        chainId,
        chains,
      });
    }
  }, [account, block, chainId, chains, open]);

  return (
    <>
      <button onClick={() => setOpen(!open)}>show message</button>
      {account && <Balance account={account.address}></Balance>}
      {account && <SignMessage account={account.address}></SignMessage>}
      {account && <Sign712 account={account.address}></Sign712>}
    </>
  );
};

export default ShowMesseage;

import React from "react";

import { useBalance,UseAccountReturnType,Config } from "wagmi";

import TokenBalance from './TokenBalance'

const Balance = ({ account }: { account: UseAccountReturnType<Config>['address'] }) => {
  const balance = useBalance({
    address: account,
    // token: '0x489c5CB7fD158B0A9E7975076D758268a756C025',
    query: {
      enabled: true,
    },
  });
  return (
    <div>
      {balance.data?.symbol} : {balance.data?.formatted}
      <TokenBalance account={account} token={'0x489c5CB7fD158B0A9E7975076D758268a756C025'}></TokenBalance>
    </div>
  );
};

export default Balance;

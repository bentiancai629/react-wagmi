import { useBalance, UseAccountReturnType, Config } from "wagmi";

const TokenBalance = ({
  account,
  token,
}: {
  account: UseAccountReturnType<Config>['address'];
  token: UseAccountReturnType<Config>['address'];
}) => {
  const tokenBalance = useBalance({
    address: account,
    token: token,
    query: {
      enabled: true,
    },
  });
  return (
    <div>
      {tokenBalance.data?.symbol} : {tokenBalance.data?.formatted}
    </div>
  );
};

export default TokenBalance;

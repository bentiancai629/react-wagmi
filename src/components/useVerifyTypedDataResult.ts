import { useVerifyTypedData, Config, UseVerifyMessageParameters } from "wagmi";
// All properties on a domain are optional

export const domain712 = {
  name: "Ether Mail",
  version: "1",
  chainId: 1,
  verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
} as const;

// The named list of all type definitions
export const types712 = {
  Person: [
    { name: "name", type: "string" },
    { name: "wallet", type: "address" },
  ],
  Mail: [
    { name: "from", type: "Person" },
    { name: "to", type: "Person" },
    { name: "contents", type: "string" },
  ],
} as const;

export const message712 = {
  from: {
    name: "nick",
    wallet: "0x7cDDF3Fa98BF3C0C5Dd09c582bC9A645179d6b8d",
  },
  to: {
    name: "naxidaETH",
    wallet: "0x000000000000000000000000000000000000fc58",
  },
  contents: "Hello, NaxidaETH!",
} as const;

const useVerifyTypedDataResult = ({
  signture,
  account,
}: {
  signture: UseVerifyMessageParameters<Config>["signature"];
  account: UseVerifyMessageParameters<Config>["address"];
}) => {
  const result = useVerifyTypedData({
    domain:domain712,
    types: types712,
    message: message712,
    primaryType: "Mail",
    address: account,
    signature: signture,
  });

  return result;
};

export default useVerifyTypedDataResult;

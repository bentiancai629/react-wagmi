import { useConnect } from "wagmi";

const ConnectWallet = () => {
  const { connectors, connect } = useConnect();
  //   const connecetWallet = () => {
  //     console.log({
  //       key: "connect wallet",
  //     });
  //     connect({ connector:connectors.});
  //   };

  return connectors.map((connector) => (
    <button
      key={connector.uid}
      onClick={() => {
        console.log({
          key: "connect wallet",
        });
        connect({ connector });
      }}
    >
      {connector.name}
    </button>
  ));
  //   return <button onClick={connecetWallet}>connect wallet</button>;
};

export default ConnectWallet;

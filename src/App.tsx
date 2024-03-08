import "./App.css";
import ConnectWallet from "./components/ConnectWallet";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "./wagmi-config";
import ShowMesseage from "./components/ShowMesseage";
import SendToken from "./components/SendToken";

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="top">
          <ConnectWallet />
        </div>
        <div className="main">
          <ShowMesseage></ShowMesseage>
        </div>
        <SendToken></SendToken>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;

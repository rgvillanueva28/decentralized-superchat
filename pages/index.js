import {
  useMetamask,
  useAddress,
  useNetwork,
  useNetworkMismatch,
  ChainId,
  useDisconnect,
} from "@thirdweb-dev/react";
import Head from "next/head";
import Button from "../components/Button";

export default function Home() {
  const connectWallet = useMetamask();
  const address = useAddress();
  const [network, switchNetwork] = useNetwork();
  const isMismatched = useNetworkMismatch();
  const disconnect = useDisconnect({ reconnectPrevious: false });

  return (
    <>
    <Head>
      <title>Superchat Dapp</title>
    </Head>
      <div className="container flex flex-1 mx-auto min-h-screen ">
        <div className="flex flex-col items-center justify-center mx-auto min-h-screen">
          <h1 className="text-6xl mb-5 text-center ">
            Welcome to Decentralized Superchat
          </h1>
          <h2 className="text-xl mb-5 text-center ">
            Please connect your metamask wallet on the Goerli Chain (Ethereum
            Testnet)
          </h2>

          {address ? (
            <Button onClick={disconnect}>Disconnect</Button>
          ) : (
            <Button onClick={connectWallet} disabled={address}>
              Connect Wallet
            </Button>
          )}

          {address && (
            <p>
              <strong>Address: </strong>
              {address}
            </p>
          )}
          {address && (
            <p>
              <strong>Network: </strong>
              <span className={isMismatched ? "text-red-500" : ""}>
                {network?.data?.chain?.name}
              </span>
            </p>
          )}
          {address && isMismatched && (
            <>
              <p className="text-red-500">Network Mismatch</p>
              <Button onClick={() => switchNetwork(ChainId.Goerli)}>
                Switch to Goerli Testnet
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

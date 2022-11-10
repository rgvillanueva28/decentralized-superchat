import "../styles/globals.css";
import { Catamaran } from "@next/font/google";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

const catamaran = Catamaran();

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
      <main className={catamaran.className + " bg-gradient"}>
        <Component {...pageProps} />
      </main>
    </ThirdwebProvider>
  );
}

export default MyApp;

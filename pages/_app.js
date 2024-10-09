import toast, { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  holesky,
  bsc
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { TOKEN_ICO_Provider } from "../context/index";

const config = getDefaultConfig({
  appName: "Token ICO Dapp",
  projectId: "6d836139a63aa0df1597c559947a4808",
  chains: [bsc],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            theme={darkTheme({
              accentColor: "#3C13D4",
              accentColorForeground: "white",
              borderRadius: "small",
              fontStack: "system",
              overlayBlur: "small",
            })}
          >
            <TOKEN_ICO_Provider>
              <Component {...pageProps} />
              <Toaster />
            </TOKEN_ICO_Provider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>

      <script src="assets/js/jquery-3.5.1.min.js"></script>
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/wow.min.js"></script>
      <script src="assets/js/appear.js"></script>
      <script src="assets/js/jquery.magnific-popup.min.js"></script>
      <script src="assets/js/metisMenu.min.js"></script>
      <script src="assets/js/jquery.marquee.min.js"></script>
      <script src="assets/js/parallax-scroll.js"></script>
      <script src="assets/js/countdown.js"></script>
      <script src="assets/js/easing.min.js"></script>
      <script src="assets/js/scrollspy.js"></script>
      <script src="assets/js/main.js"></script>
    </>
  );
}

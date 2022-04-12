import { AppShell, MantineProvider } from "@mantine/core";
import type {} from "@skyra/discord-components-core";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { UserProvider } from "../context/UserProvider";
import "../styles/main.css";
function MyApp({ Component, pageProps }: AppProps) {
  "test";
  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <UserProvider>
        <AppShell padding="md" header={<Header />} footer={<Footer />}>
          <Component {...pageProps} />
        </AppShell>
      </UserProvider>
    </MantineProvider>
  );
}

export default MyApp;

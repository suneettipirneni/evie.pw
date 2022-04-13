import { AppShell, MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import type {} from "@skyra/discord-components-core";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { UserProvider } from "../context/UserProvider";
import "../styles/main.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <NotificationsProvider>
        <UserProvider>
          <AppShell padding="md" header={<Header />} footer={<Footer />}>
            {/** @ts-ignore No idea what's triggering this to think a page isn't a JSX Component */}
            <Component {...pageProps} />
          </AppShell>
        </UserProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;

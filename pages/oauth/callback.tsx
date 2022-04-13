import { useNotifications } from "@mantine/notifications";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import OpenGraph from "../../components/branding/util/OpenGraph";
import { useUser } from "../../context/UserProvider";
import { APILogin } from "../../types";
import { Nico } from "../../utils/nico";

const OauthCallback: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useUser();
  const { push, query, asPath } = useRouter();
  const notifications = useNotifications();

  const finalizeAuthFlow = useCallback(
    async (code: string | null) => {
      setLoading(true);
      notifications.showNotification({
        id: "oauth-callback",
        color: "grape",
        title: "Logging in...",
        message: "Please wait while we log you in...",
        loading: true,
        autoClose: false,
        disallowClose: true
      });

      try {
        const data: APILogin = await Nico.post(`/oauth/callback`, {
          code,
          clientId: process.env.CLIENT_ID,
          redirectUri: `${process.env.LIVE_URL}/oauth/callback`
        });
        setUser(data);

        notifications.updateNotification("oauth-callback", {
          title: "Successfully logged in!",
          message: `Welcome back ${data.user.username}!`,
          autoClose: 2000
        });

        return push("/");
      } catch (error) {
        console.error(error);
        notifications.updateNotification("oauth-callback", {
          title: "Error logging in!",
          message: `Something went wrong while logging in. Please try again.`,
          color: "red"
        });
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    void finalizeAuthFlow(
      query.code ??
        new URL(window?.location.href).searchParams.get("code") ??
        null
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  while (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blurple drop-shadow-2xl" />
      </div>
    );
  }

  return (
    <>
      <OpenGraph
        title="oAuth2 Callback"
        url="https://evie.pw/oauth/callback"
        image="https://evie.pw/assets/EvieLogo.png"
        description="Evie is a Discord bot that helps you build the community you want."
      />
      <NextSeo nofollow noindex />
    </>
  );
};

export default OauthCallback;

declare module "querystring" {
  interface ParsedUrlQuery {
    code: string | null;
  }
}

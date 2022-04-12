import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import { useUser } from "../../context/UserProvider";
import { APILogin } from "../../types";
import { Nico } from "../../utils/nico";

const OauthCallback: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useUser();
  const { push, query, asPath } = useRouter();

  const finalizeAuthFlow = useCallback(
    async (code: string | null) => {
      setLoading(true);

      try {
        const data: APILogin = await Nico.post(`/oauth/callback`, {
          code,
          clientId: process.env.CLIENT_ID,
          redirectUri: `${process.env.LIVE_URL}/oauth/callback`
        });

        console.log(data);

        setUser(data);
        setLoading(false);

        // return push("/");
      } catch (error) {
        console.error(error);
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

  return (
    <>
      <NextSeo title="OAUTH Callback" nofollow noindex />
      <Header />
    </>
  );
};

export default OauthCallback;

declare module "querystring" {
  interface ParsedUrlQuery {
    code: string | null;
  }
}

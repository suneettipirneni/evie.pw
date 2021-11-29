import "tailwindcss/tailwind.css";
import "../styles/main.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import PlausibleProvider from "next-plausible";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="eviebot.rocks">
      <div className="App">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Evie</title>
          <meta content="Evie Discord Bot" property="og:title" />
          <meta name="theme-color" content="#7289da" />
          <meta
            content="Evie is a feature-rich, easy to use Discord bot built to deliver the best experience of a bot on Discord!"
            property="og:description"
          />
          <meta
            name="description"
            content="Evie is a feature-rich, easy to use Discord bot built to deliver the best experience of a bot on Discord!"
          />
          <meta content="https://eviebot.rocks" property="og:url" />
          <meta
            content="https://eviebot.rocks/assets/EvieIcon.png"
            property="og:image"
          />
          <meta content="#43B581" data-react-helmet="true" name="theme-color" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7289da" />
          <meta name="msapplication-TileColor" content="#7289da" />
          <meta name="theme-color" content="#7289da" />
        </Head>
        <nav
          className="relative z-50 h-24 select-none"
          x-data="{ showMenu: false }"
        >
          <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium md:overflow-visible lg:justify-center sm:px-4 md:px-2">
            <div className="flex items-center justify-start w-1/4 h-full pr-4">
              <div className="transition duration-500 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-150 ...">
                <Link href="https://evie.eviebot.rocks" passHref>
                  <span className="p-1 text-xl font-black leading-none text-gray-900">
                    <Image
                      src="/assets/EvieHead.svg"
                      width="60"
                      height="60"
                      alt="Evie Head Logo, a modern beagle looking head of a beagle"
                    />
                  </span>
                </Link>
              </div>
            </div>
            <div className="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex">
              <div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                  <a
                    href="https://discord.gg/82Crd8tZRF"
                    className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blurple rounded-full hover:bg-white group"
                  >
                    <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                      Support Server
                    </span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                <a
                  href="https://dash.eviebot.rocks"
                  className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blurple rounded-full hover:bg-white group"
                >
                  <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                    Dashboard
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <Component {...pageProps} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section className="">
          <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav className="flex flex-wrap justify-center -mx-5 -my-2">
              <div className="px-5 py-2">
                <a
                  href="https://discord.gg/82Crd8tZRF"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  Support Server
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  href="https://top.gg/bot/807543126424158238"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  top.gg
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  href="http://privacy.eviebot.rocks"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  Privacy Policy
                </a>
              </div>
            </nav>
            <div className="flex justify-center mt-8 space-x-6">
              <a
                href="https://github.com/TeamEvie"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x={48}
              y={0}
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x={48}
              y={3}
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x={48}
              y={5}
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x={48} y={7} fill="#2c2f33" />
          </g>
        </svg>
      </div>
    </PlausibleProvider>
  );
}

export default MyApp;

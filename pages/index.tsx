import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ReactRoundedImage from "react-rounded-image";

const coolBox: string =
  "m-4 p-6 text-left no-underline border-solid border-4 hover:border-opacity-50 border-light-blue-500 rounded-lg text-white max-w-screen-sm";

const Home: NextPage = () => {
  return (
    <div>
      <div className="grid justify-items-stretch ...">
        <div className="justify-self-center ...">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight  mt-10 mb-8 sm:mt-14 sm:mb-10 text-white">
            It's time to use Evie in your Discord server.
          </h1>
          <div className=" grid-cols-4">
            <ReactRoundedImage
              image="/assets/leaderboard.png"
              roundedColor="#7289da"
              imageWidth="500"
              imageHeight="500"
              roundedSize="13"
              hoverColor="#FFFFFF"
              borderRadius="50"
            />
          </div>

          <br></br>

          <div className="justify-self-center ...">
            <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11 text-center">
              Evie is a feature-rich, easy to use Discord bot built to deliver
              the best experience of a bot on Discord!
            </p>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n        #GFG {\n            text-decoration: none;\n        }\n    ",
              }}
            />
            <div className="grid justify-items-stretch ...">
              <div className="justify-self-center ...">
                <div className="hover: transition duration-500 hover:scale-125">
                  <a
                    href="https://discord.com/oauth2/authorize?client_id=807543126424158238&permissions=518855707712&scope=bot%20applications.commands"
                    id="GFG"
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                  >
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
                    <span className="relative z-20 flex items-center text-sm">
                      <svg
                        className="relative w-5 h-5 mr-2 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      Invite Evie
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
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
            <use xlinkHref="#gentle-wave" x={48} y={7} fill="#7289da" />
          </g>
        </svg>
      </div>
      <div className="feature-image">
        <div className="features">
          <div className="text-5xl leading-none font-extrabold tracking-tight mb-4 text-white">
            What is Evie all about?
          </div>
          <div className="text-2xl tracking-tight mb-10 text-center">
            Here at Jamble Studios we strive to provide you with the best
            Discord Bots, weather it's being a reliable music bot or adding
            useful and fun commands to your server.
          </div>
          <div className="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
            <div className="w-full flex md:flex-col bg-gradient-to-br from-purple-500 to-indigo-500">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <h5 className="text-xl font-semibold mb-2 text-shadow">
                  Lag Free Audio
                </h5>
                <p className="font-medium text-violet-100 text-shadow mb-4 text-left">
                  Jamble's music player allows you to both queue and play music
                  without waiting for them to download. Jamble currently
                  supports Spotify, YouTube and SoundCloud.
                </p>
              </div>
            </div>
            <div className="w-full flex md:flex-col bg-gradient-to-br from-purple-500 to-indigo-500">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <h5 className="text-xl font-semibold mb-2 text-shadow">
                  Handy utilities
                </h5>
                <p className="font-medium text-violet-100 text-shadow mb-4 text-left">
                  Jamble has a range of useful utilities for moderation, such as
                  clearing channels on command, and more coming soon (were
                  mainly focusing on music atm).
                </p>
              </div>
            </div>
            <div className="w-full flex md:flex-col bg-gradient-to-br from-purple-500 to-indigo-500 text-center">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8 text-center">
                <h5 className="text-xl font-semibold mb-2 text-shadow text-center">
                  Uptime!
                </h5>
                <p className="font-medium text-violet-100 text-shadow mb-4 text-left">
                  Unlike many other competitors, we never go down and if we do
                  it's usually just a 10 second update to make Jamble even more
                  easier for you server owners and more fun and easy for all.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

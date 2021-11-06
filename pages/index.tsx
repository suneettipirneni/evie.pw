import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const coolBox: string =
  "m-4 p-6 text-left no-underline border-solid border-4 hover:border-opacity-50 border-light-blue-500 rounded-lg text-white max-w-screen-sm";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-darkBlurple">
      <main className="font-mono min-h-screen flex flex-col justify-center items-center bg-darkBlurple">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-white mt-10 mb-8 sm:mt-14 sm:mb-10">
          Welcome to Flash⚡!
        </h1>

        <div className="flex items-center justify-center flex-wrap max-w-screen-md">
          <a href="/posts" className={coolBox}>
            <h2>Posts &rarr;</h2>
            <p>View some posts.</p>
          </a>

          <a href="https://nextjs.org/learn" className={coolBox}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={coolBox}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={coolBox}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;

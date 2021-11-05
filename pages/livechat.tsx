import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [username, setUsername] = useState("username");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  let allMessages: never[] = [];

  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher("74f818b3e6c76d4d852b", {
      cluster: "ap4",
    });

    const channel = pusher.subscribe("chat");
    channel.bind("message", function (data: never) {
      allMessages.push(data);
      setMessages(allMessages);
    });
  });

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await fetch("http://localhost:8000/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        message,
      }),
    });

    setMessage("");
  };
  return (
    <div className="h-screen bg-darkBlurple">
      <main className="font-mono min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-white mt-10 mb-8 sm:mt-14 sm:mb-10">
          Welcome to Flash⚡!
        </h1>

        <p className="text-4xl sm:text-6xl lg:text-2xl leading-none font-extrabold tracking-tight text-transparent bg-clip-text text-white mt-10 mb-8 sm:mt-14 sm:mb-10">
          Get started by chatting below!
        </p>
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white"></div>
        <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"></div>
        <div
          className="list-group list-group-flush border-bottom scrollarea"
          style={{ minHeight: "500px" }}
        >
          {messages.map((message) => {
            return (
              <div className="">
                <a className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500">
                  <span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                  <span className="relative">
                    {message.username} - {message.message}
                  </span>
                </a>
              </div>
            );
          })}
        </div>
        <input
          className="hidden sm:block text-gray-400 text-sm leading-5 py-0.5 px-1.5 border border-gray-300 rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <form onSubmit={submit}>
          <input
            className="hidden sm:block text-gray-400 text-sm leading-5 py-0.5 px-1.5 border border-gray-300 rounded-md"
            placeholder="Write a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </form>
      </main>
    </div>
  );
};

export default () => <Home />;

import Image from "next/image";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

export default function EHeader() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <section className="w-full px-8 text-white">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a
            href="#_"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
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
          </a>
          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8">
            <div className="mr-5 font-medium leading-6 text-white hover:text-blurple">
              <Link href="/">Home</Link>
            </div>
            <a
              href="https://discord.gg/82Crd8tZRF"
              className="mr-5 font-medium leading-6 text-white hover:text-blurple"
            >
              Support Server
            </a>
            <a
              href="https://dash.eviebot.rocks"
              className="mr-5 font-medium leading-6 text-white hover:text-blurple"
            >
              Dashboard
            </a>
            <a
              href="#_"
              className="mr-5 font-medium leading-6 text-white hover:text-blurple"
            >
              Blog
            </a>
          </nav>
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <div className="transition duration-500 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-150 ...">
            <span className="p-1 text-xl font-black leading-none text-gray-900">
              <img
                src={user ? user.picture! : "/assets/EvieHead.svg"}
                width="60"
                height="60"
                alt="Evie Head Logo, a modern beagle looking head of a beagle"
              />
            </span>
          </div>
          {user ? `Hello, ${user.name}` : ""}
          <a
            href={user ? "/api/auth/logout" : "/api/auth/login"}
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            {user ? "Log out" : "Log in"}
          </a>
        </div>
      </div>
    </section>
  );
}

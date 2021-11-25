// 404.js
import Link from "next/link";

export default function FourOhFour() {
  return (
    <section className="text-center">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight  mt-10 mb-8 sm:mt-14 sm:mb-10 text-white text-center">
        Hey that page doesn&apos;t exist.
      </h1>
      <div className="relative flex flex-col sm:flex-row sm:space-x-4 justify-center">
        <Link href="/">
          <a className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
            Return Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </Link>
      </div>
    </section>
  );
}

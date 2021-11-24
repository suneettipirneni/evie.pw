<script lang="ts">
import { defineComponent } from "vue";
import fetch from "node-fetch";

interface ContributorData {
  login: string;
  avatar_url: string;
  contributions: string;
}

export default defineComponent({
  data() {
    return {
      contributors: new Array<ContributorData>(),
    };
  },
  async created() {
    await this.getContributors();
  },
  methods: {
    async getContributors() {
      const res = await fetch(
        "https://api.github.com/repos/twisttaan/evieweb/contributors"
      );
      const json = await res.json();
      // ts-ignore
      this.contributors = json;
    },
  },
});
</script>

<template>
  <div className="App">
    <nav
      className="relative flex flex-wrap items-center content-between py-3 px-4  bg-transparent"
    >
      <div
        className="transition duration-500 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-150 ..."
      >
        <img src="/assets/EvieHead.svg" width="60" height="60" />
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a
        href="https://dash.eviebot.rocks"
        className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blurple rounded-full hover:bg-white group"
      >
        <span
          className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"
        ></span>
        <span
          className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600"
        >
          Dashboard
        </span>
      </a>
      &nbsp;&nbsp;&nbsp;
      <a
        href="https://docs.eviebot.rocks"
        className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blurple rounded-full hover:bg-white group"
      >
        <span
          className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"
        ></span>
        <span
          className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600"
        >
          Documentation
        </span>
      </a>
      &nbsp;&nbsp;&nbsp;
      <a
        href="https://discord.gg/82Crd8tZRF"
        className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blurple rounded-full hover:bg-white group"
      >
        <span
          className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"
        ></span>
        <span
          className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600"
        >
          Support Server
        </span>
      </a>
    </nav>
    <router-view />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="page_end"></div>
    <br />
    <div className="page_end"></div>
    <div className="footer">
      <br />
      <div className="twisttaan">
        eviebot.rocks with ❤️ by
        <div className="grid justify-items-stretch ...">
          <div className="justify-self-center ...">
            <div className="flex content-center flex-row flex-wrap">
              <a
              v-for="(contributor, index) in contributors"
              :key="contributor + '_' + index"
              :href="'https://github.com/' + contributor.login"
              className="flex min-w-1/2 w-3/12	m-4	p-4"
            >
              <img
                :src="contributor.avatar_url"
                className="overflow-hidden rounded-h h-20 w-20"
              />
              <div
                className="flex flex-grow flex-shrink flex-col justify-center ml-4 text-center"
              >
                <h4>
                  {{ contributor.login }}
                </h4>
                <small> Contributions: {{ contributor.contributions }} </small>
              </div>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <svg
      class="waves"
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
      <g class="parallax">
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="0"
          fill="rgba(255,255,255,0.7"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="3"
          fill="rgba(255,255,255,0.5)"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="5"
          fill="rgba(255,255,255,0.3)"
        />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#2c2f33" />
      </g>
    </svg>
  </div>
</template>

<style>
body {
  font-family: "Poppins", sans-serif !important;
  background-color: #2c2f33;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  border-top: 6px #7289da solid !important;
  font-size: 16px;
}

.banner {
  background-color: #7289da;
}

.page_end {
  background-image: url("./assets/down-blurple.svg") !important;
  background-position: bottom !important;
  background-size: 200% !important;
  background-repeat: no-repeat !important;
}

.nav-link {
  font-size: 14px !important;
  background: transparent !important;
  font-family: Lato, sans-serif !important;
  text-transform: capitalize !important;
}
.nav-link:hover {
  background: transparent !important;
  color: #7289da !important;
  font-weight: bold !important;
}

.login-btn {
  border: 2px solid #7289da !important;
  font-size: 10px !important;
}
.login-btn:hover {
  background: #454f80 !important;
}
.navbar {
  box-shadow: none !important;
}

.navbar-brand {
  font-size: 25px !important;
}

.navbar-toggler-icon {
  color: #fff !important;
}

.btn {
  border-radius: 10px !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  filter: drop-shadow(0 0 0.75rem #7289da);
}

.btn-primary {
  background-color: #7289da !important;
}
.btn-secondary {
  background-color: #7289da !important;
}

.title {
  line-height: 90px !important;
  margin-bottom: -2px !important;
  font-size: 36px !important;
}

.subtitle {
  color: rgb(255, 255, 255) !important;
  font-size: 16px !important;
  font-family: "Lato", sans-serif;
}

.features .title {
  font-size: 40px !important;
  color: #ffffff !important;
  line-height: 70px !important;
}

.features .subtitle {
  font-size: 20px !important;
  color: #99aab5;
}

.features .card-body {
  text-align: left !important;
}

.features .card-title {
  margin: 0 0 -3px !important;
}
.cards {
  margin-top: 30px !important;
}

.card {
  border-radius: 5px !important;
  box-shadow: none !important;
  filter: drop-shadow(0 0 0.75rem #000000);
}

.card-title {
  font-size: 28px !important;
  font-weight: 600 !important;
  color: #7289da !important;
}

.statistics {
  text-align: center !important;
  padding-top: 300px !important;
}

.statistics .card-body {
  padding: 0 !important;
  height: 280 !important;
  width: 332 !important;
  max-height: 280 !important;
  max-width: 332 !important;
}

.statistics .title {
  font-size: 40px !important;
  color: #ffffff !important;
  line-height: 70px !important;
}

.statistics .subtitle {
  font-size: 20px !important;
  color: #a2a8bd;
}

.card.statistic {
  background: transparent !important;
  box-shadow: none !important;
  color: #f7f7f7 !important;
}

.start {
  padding: 60px 50px !important;
}

.start .card {
  background: transparent !important;
  color: #f6f9ff !important;
}

.features .card {
  background: #2c2f33;
  border-radius: 22px !important;
  border: 4px solid #99aab5;
}
.features .card-text {
  color: rgba(255, 255, 255, 0.46) !important;
}

.features .card-body {
  padding: 40px 40px 40px 30px !important;
}

.navbar-toggler-icon {
  color: #fff !important;
}
.footer {
  text-align: center !important;
  padding: 5px 6px !important;
  color: #ecf2ff;
  padding: 30px 30px !important;
}

.footer .nouridio {
  font-family: "Montserrat" !important;
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  line-height: 5px !important;
  letter-spacing: 0.15em !important;
  font-variant: small-caps !important;
}

.footer .nouridio a {
  color: #7289da !important;
  text-decoration: none !important;
}

.footer .bot-footer {
  text-align: center !important;
  color: #a2a8bd !important;
}

.feature-image img {
  border-radius: 1em;
  /* border:3px solid #ffffff; */
  filter: drop-shadow(0 0 0.75rem #7289da);
  max-width: 100%;
}
body.dark .feature-image img {
  border-color: #ffffff;
}

.goback {
  position: relative;
  z-index: -5;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 30vh;
  }
  h1 {
    font-size: 24px;
  }
}
</style>

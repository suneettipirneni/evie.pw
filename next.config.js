/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  images: {
    domains: ["cdn.discordapp.com", "dummyimage.com"]
  },
  env: {
    API_URL: process.env.API_URL,
    CLIENT_ID: process.env.CLIENT_ID,
    LIVE_URL: process.env.LIVE_URL
  }
};

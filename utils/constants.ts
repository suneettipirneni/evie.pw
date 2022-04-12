export const OAUTH_ENTRYPOINT = `https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.LIVE_URL}/oauth/callback&response_type=code&scope=guilds%20identify`;
export const QUOTES = [
  {
    quote: "Woof.",
    author: "Lilly"
  }
];

import { User } from "../types";

export const profilePic = (user: User) => {
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}${
    user.avatar.startsWith("a_") ? ".gif" : ".png"
  }?size=512`;
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Human = {
  name: string;
  age: number;
  nickname: string;
  skills: string[];
  hobbies: string[];
  discordTag: string;
  education: {
    school: string;
    degree: string;
    graduated: string;
  };
};

const Error: Human = {
  name: "Error",
  age: 0,
  nickname: "Error",
  skills: ["Error"],
  hobbies: ["Error"],
  discordTag: "Error",
  education: {
    school: "Error",
    degree: "Error",
    graduated: "Error",
  },
};

const Jeff: Human = {
  name: "Jeff",
  age: 30,
  nickname: "Jeffy",
  skills: ["JavaScript", "TypeScript", "React", "Next.js"],
  hobbies: ["Coding", "Gaming", "Reading"],
  education: {
    school: "University of California, Berkeley",
    degree: "Bachelor of Science",
    graduated: "2019",
  },
  discordTag: "Jeffy#9076",
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Human>
) {
  if (req.body.query === "Jeff") {
    res.status(200).json(Jeff);
  } else {
    res.status(404).json(Error);
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as mongoose from "mongoose";
import { postModel } from "../_app";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {
  async function makePost() {
    await postModel.findOneAndUpdate(
      {
        postid: "23123",
      },
      {
        title: "test",
        content: "test",
        date: new Date(),
        userid: "12345678901234567890123456789012",
      },
      {
        upsert: true,
        new: true,
      }
    );
  }

  type Post = {
    title: String;
    content: String;
    date: Date;
    userid: String;
    postid: String;
  };

  const Test: Post = {
    title: "Test",
    content: "Test",
    date: new Date(),
    userid: "Test",
    postid: "Test",
  };
  makePost();
  res.status(200).json(Test);
}

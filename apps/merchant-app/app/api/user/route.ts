import { NextResponse } from "next/server";
import db from "@repo/db/client";

export const GET = async () => {
  // await db.user.create({
  //   data: { email: "rev@gmail", number: "12345", password: "12345" },
  // });
  return NextResponse.json({
    message: "hi there",
  });
};

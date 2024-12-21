import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  const requestData = await req.json();
  const email = requestData.email;
  const cookieStore = await cookies();

  //   Check if the email and password are correct

  if (!email) {
    cookieStore.set("isLoggedIn", "false");
    return NextResponse.json({ isLoggedIn: false });
  }
  cookieStore.set("isLoggedIn", "true");
  return NextResponse.json({ isLoggedIn: true });
};

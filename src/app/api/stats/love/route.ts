import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getLoveCount, incrementLove } from "@/lib/stats-store";

const LOVED_COOKIE = "portfolio_loved";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export const dynamic = "force-dynamic";

export async function POST() {
  try {
    const cookieStore = await cookies();
    const alreadyLoved = cookieStore.get(LOVED_COOKIE);

    if (alreadyLoved?.value === "1") {
      const loveCount = await getLoveCount();
      return NextResponse.json({ loveCount, alreadyLoved: true });
    }

    const loveCount = await incrementLove();
    const response = NextResponse.json({ loveCount, alreadyLoved: false });
    response.cookies.set(LOVED_COOKIE, "1", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    });
    return response;
  } catch {
    return NextResponse.json({ loveCount: 0 }, { status: 500 });
  }
}

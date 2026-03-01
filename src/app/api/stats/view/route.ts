import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getViews, incrementViews } from "@/lib/stats-store";

const VIEWER_COOKIE = "portfolio_visitor";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export const dynamic = "force-dynamic";

export async function POST() {
  try {
    const cookieStore = await cookies();
    const existing = cookieStore.get(VIEWER_COOKIE);

    if (existing?.value) {
      const views = await getViews();
      return NextResponse.json({ views });
    }

    const views = await incrementViews();
    const response = NextResponse.json({ views });
    response.cookies.set(VIEWER_COOKIE, crypto.randomUUID(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    });
    return response;
  } catch {
    return NextResponse.json({ views: 0 }, { status: 500 });
  }
}

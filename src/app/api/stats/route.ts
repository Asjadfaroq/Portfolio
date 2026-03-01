import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getViews, getLoveCount } from "@/lib/stats-store";

const LOVED_COOKIE = "portfolio_loved";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [views, loveCount] = await Promise.all([getViews(), getLoveCount()]);
    const cookieStore = await cookies();
    const loved = cookieStore.get(LOVED_COOKIE)?.value === "1";
    return NextResponse.json({ views, loveCount, loved });
  } catch {
    return NextResponse.json({ views: 0, loveCount: 0, loved: false }, { status: 500 });
  }
}

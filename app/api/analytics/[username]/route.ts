import { NextRequest, NextResponse } from "next/server";
import { getUserAnalytics, UserNotFoundError, RateLimitError } from "@/lib/github-analytics";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    const { username } = await params;
    const searchParams = request.nextUrl.searchParams;
    const fresh = searchParams.get("fresh") === "true";

    if (!username || username.trim() === "") {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    const analytics = await getUserAnalytics(username, fresh);
    return NextResponse.json(analytics, { status: 200 });
  } catch (error) {
    if (error instanceof UserNotFoundError) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }
    if (error instanceof RateLimitError) {
      return NextResponse.json({ error: error.message }, { status: 429 });
    }
    console.error("Analytics API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}

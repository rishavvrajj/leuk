import { revalidatePath } from "next/cache";
import {
  getPortfolioFresh,
  UserNotFoundError,
  RateLimitError,
} from "@/lib/github";

interface Ctx {
  params: Promise<{ username: string }>;
}

export async function POST(_req: Request, { params }: Ctx) {
  const { username } = await params;

  try {
    // Fetch fresh data from GitHub, bypassing the cache entirely.
    const portfolio = await getPortfolioFresh(username);

    // Bust the cached page (which also invalidates the server-side Data
    // Cache for its fetches) so the next render re-pulls from GitHub
    // instead of serving the hour-old snapshot.
    revalidatePath(`/${portfolio.username}`, "page");

    return Response.json(portfolio);
  } catch (err) {
    if (err instanceof UserNotFoundError) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }
    if (err instanceof RateLimitError) {
      return Response.json(
        { error: "GitHub rate limit hit, try again in an hour" },
        { status: 429 }
      );
    }
    return Response.json({ error: "Refresh failed" }, { status: 500 });
  }
}
import { NextRequest, NextResponse } from "next/server";
import { getUserAnalytics, UserNotFoundError, RateLimitError } from "@/lib/github-analytics";
import { ComparisonResult } from "@/lib/analytics-types";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const leftUsername = searchParams.get("left");
    const rightUsername = searchParams.get("right");

    if (!leftUsername || !rightUsername) {
      return NextResponse.json(
        { error: "Both 'left' and 'right' query parameters are required" },
        { status: 400 }
      );
    }

    const [left, right] = await Promise.all([
      getUserAnalytics(leftUsername),
      getUserAnalytics(rightUsername),
    ]);

    // Compute language overlap
    const leftLangs = Object.keys(left.languageBreakdown);
    const rightLangs = Object.keys(right.languageBreakdown);
    const languageOverlap = leftLangs.filter((lang) => rightLangs.includes(lang));

    // Summary and contextual conclusions
    const leftScore = left.leukAnalyticsScore;
    const rightScore = right.leukAnalyticsScore;

    let summaryComparison = `${left.username} (Score: ${leftScore}) and ${right.username} (Score: ${rightScore}) demonstrate distinct strengths in their public GitHub signals.`;

    let contextualConclusion = "";
    if (leftScore > rightScore + 5) {
      contextualConclusion = `${left.username} displays stronger overall public GitHub momentum, consistency, and impact metrics. ${right.username} shows targeted specialization in ${rightLangs[0] || "specific technologies"}.`;
    } else if (rightScore > leftScore + 5) {
      contextualConclusion = `${right.username} displays stronger overall public GitHub momentum, consistency, and impact metrics. ${left.username} shows targeted specialization in ${leftLangs[0] || "specific technologies"}.`;
    } else {
      contextualConclusion = `Both candidates exhibit closely matched overall metrics with complementary technical stacks (${left.username}: ${leftLangs.slice(0, 2).join(", ")}; ${right.username}: ${rightLangs.slice(0, 2).join(", ")}).`;
    }

    const recommendations = {
      leftKeyStrengths: left.recruiterInsights.technicalStrengths.map((s) => s.strength),
      rightKeyStrengths: right.recruiterInsights.technicalStrengths.map((s) => s.strength),
      contextualConclusion,
    };

    const result: ComparisonResult = {
      left,
      right,
      summaryComparison,
      languageOverlap,
      recommendations,
    };

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    if (error instanceof UserNotFoundError) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }
    if (error instanceof RateLimitError) {
      return NextResponse.json({ error: error.message }, { status: 429 });
    }
    console.error("Comparison API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}

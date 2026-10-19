import { NextRequest, NextResponse } from "next/server";
import { getUserAnalytics, UserNotFoundError, RateLimitError } from "@/lib/github-analytics";
import { ComparisonResult, CategoryComparison } from "@/lib/analytics-types";

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

    // Category comparisons across 7 dimensions
    const categories: { key: keyof typeof left.scoreBreakdown; label: string }[] = [
      { key: "consistency", label: "Consistency" },
      { key: "impact", label: "Impact" },
      { key: "originality", label: "Originality" },
      { key: "technicalBreadth", label: "Technical Breadth" },
      { key: "collaboration", label: "Collaboration" },
      { key: "growth", label: "Growth / Momentum" },
      { key: "repositoryQuality", label: "Repository Quality" },
    ];

    const categoryComparisons: CategoryComparison[] = categories.map(({ key, label }) => {
      const lScore = left.scoreBreakdown[key].score;
      const rScore = right.scoreBreakdown[key].score;
      let winner: "left" | "right" | "tie" = "tie";
      if (lScore > rScore + 3) winner = "left";
      else if (rScore > lScore + 3) winner = "right";

      let commentary = "";
      if (winner === "left") {
        commentary = `${left.name || left.username} leads in ${label} (${lScore} vs ${rScore}), showing stronger execution in this metric.`;
      } else if (winner === "right") {
        commentary = `${right.name || right.username} takes the lead in ${label} (${rScore} vs ${lScore}), outperforming in this category.`;
      } else {
        commentary = `Both developers are closely matched in ${label} (${lScore} vs ${rScore}).`;
      }

      return {
        category: key,
        label,
        leftScore: lScore,
        rightScore: rScore,
        winner,
        commentary,
      };
    });

    const leftScore = left.leukAnalyticsScore;
    const rightScore = right.leukAnalyticsScore;

    let winner = leftScore >= rightScore ? (left.name || left.username) : (right.name || right.username);
    if (Math.abs(leftScore - rightScore) <= 2) {
      winner = "Comparative Parity (Balanced Evaluation)";
    }

    let summaryComparison = `${left.name || left.username} (Score: ${leftScore}, Grade ${left.letterGrade}) and ${right.name || right.username} (Score: ${rightScore}, Grade ${right.letterGrade}) evaluated across code velocity, community impact, and architecture.`;

    let contextualConclusion = "";
    if (leftScore > rightScore + 3) {
      contextualConclusion = `${left.name || left.username} leads with an overall Leuk Score of ${leftScore} vs ${rightScore}, driven by stronger consistency and community footprint. ${right.name || right.username} brings targeted specialization in their primary stack.`;
    } else if (rightScore > leftScore + 3) {
      contextualConclusion = `${right.name || right.username} leads with an overall Leuk Score of ${rightScore} vs ${leftScore}, demonstrating superior velocity and repository maintenance. ${left.name || left.username} maintains strong niche recognition.`;
    } else {
      contextualConclusion = `Incredible parity between both engineers (Scores: ${leftScore} vs ${rightScore}). They represent complementary engineering archetypes with distinct technical strengths.`;
    }

    let analysis = "";
    if (left.totalStars > right.totalStars * 10) {
      analysis = `${left.name || left.username} demonstrates significant community scale with ${left.totalStars} aggregate stars, while ${right.name || right.username} (${right.totalStars} stars) focuses on targeted repository execution. Comparing open-source impact against commit velocity highlights distinct engineering priorities.`;
    } else if (right.totalStars > left.totalStars * 10) {
      analysis = `${right.name || right.username} exhibits prominent open-source reach with ${right.totalStars} aggregate stars, while ${left.name || left.username} (${left.totalStars} stars) maintains focused project delivery. Evaluating star distribution alongside recent push frequency provides a complete technical profile.`;
    } else if (left.activityMetrics.last90DaysPushes > right.activityMetrics.last90DaysPushes * 3) {
      analysis = `${left.name || left.username} shows higher commit frequency with ${left.activityMetrics.last90DaysPushes} pushes in the last 90 days, compared to ${right.name || right.username} with ${right.activityMetrics.last90DaysPushes} pushes. This indicates differing release cycles and development cadence.`;
    } else {
      analysis = `Both engineers exhibit active public contributions across multiple repositories, with balanced commit cadence and complementary language distributions.`;
    }

    let executiveVerdict = `**Recommended Selection:** ${winner}\n\n`;
    if (leftScore > rightScore) {
      executiveVerdict += `**Evaluation Summary for ${left.name || left.username}:** Higher aggregate evaluation score (${leftScore} vs ${rightScore}) driven by consistent repository activity, robust documentation hygiene, and community reach.`;
    } else if (rightScore > leftScore) {
      executiveVerdict += `**Evaluation Summary for ${right.name || right.username}:** Superior performance across key technical metrics (${rightScore} vs ${leftScore}), demonstrating exceptional push momentum and architectural breadth.`;
    } else {
      executiveVerdict += `**Evaluation Summary (Parity):** Both engineers achieve equal overall evaluation scores (${leftScore}/100), offering balanced trade-offs between architectural breadth and velocity.`;
    }

    const recommendations = {
      leftKeyStrengths: left.recruiterInsights.technicalStrengths.map((s) => s.strength),
      rightKeyStrengths: right.recruiterInsights.technicalStrengths.map((s) => s.strength),
      contextualConclusion,
      winner,
      verdict: executiveVerdict,
      roast: analysis,
    };

    const result: ComparisonResult = {
      left,
      right,
      summaryComparison,
      languageOverlap,
      recommendations,
      categoryComparisons,
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

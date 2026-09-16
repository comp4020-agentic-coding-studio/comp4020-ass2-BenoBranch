import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
  body?: string;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const lectures = api.nodes.filter((node) => node.type === "lectures");
const assessments = api.nodes.filter((node) => node.type === "assessments");

// The promises the build's own schema and per-page checks can't see, because
// they only look at one document at a time. What each lecture must contain
// (industry, pitch, breakingChanges, rollbackPlan) is enforced in
// content.config.ts instead, at build time -- see CLAUDE.md's rule on
// where a course promise belongs.
describe("course coherence", () => {
  it("adds every assessment's weight to exactly 100", () => {
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total, "assessment weights across the course must sum to 100").toBe(100);
  });

  it("runs each of the twelve teaching weeks exactly once", () => {
    const weeks = lectures.map((node) => Number(node.meta?.week)).sort((a, b) => a - b);
    expect(weeks).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
  });

  it("never deprecates the same industry twice", () => {
    const industries = lectures.map((node) => String(node.meta?.industry));
    expect(new Set(industries).size, "every lecture's industry must be unique").toBe(
      industries.length,
    );
  });

  it("carries a real deck on at least one lecture", () => {
    const withSlides = lectures.filter((node) => typeof node.meta?.slides === "string");
    expect(withSlides.length, "at least one lecture must link a deck").toBeGreaterThan(0);
  });
});

import type { CourseMetaInput } from "astro-course-university";
import { z } from "astro/zod";

// The level digits ANU uses: 1000--4000 undergraduate, 6000 and 8000
// postgraduate. Both the code pattern and the level field derive from this.
const LEVELS = [1, 2, 3, 4, 6, 8] as const;
const allowedCode = new RegExp(`^SLOP[${LEVELS.join("")}]\\d{3}$`);

export const slopCourseMetaSchema = z
  .strictObject({
    code: z.string().regex(allowedCode, {
      message: "use SLOP plus a 1000–4000, 6000 or 8000 level code",
    }),
    title: z.string().trim().min(1).max(100),
    session: z.string().trim().min(1).max(40),
    year: z.number().int().min(2026).max(2200),
    level: z.literal(LEVELS),
    startDate: z.iso.date(),
    endDate: z.iso.date(),
    description: z.string().trim().min(80).max(300),
    tags: z.array(z.string().trim().min(2).max(24)).min(1).max(3),
  })
  .superRefine((course, ctx) => {
    const codeLevel = Number(course.code.at(4));
    if (course.level !== codeLevel) {
      ctx.addIssue({
        code: "custom",
        path: ["level"],
        message: `must match ${course.code}'s first digit (${codeLevel})`,
      });
    }
    if (course.startDate > course.endDate) {
      ctx.addIssue({
        code: "custom",
        path: ["startDate"],
        message: "must not be after endDate",
      });
    }
  });

// The single source of truth for the course record. The generated homepage,
// navigation label and /api/index.json all read this object.
//
// Level 4: this is a capstone-facing course, aimed at students about to
// graduate into jobs where they'll be the one greenlighting (or pitching) an
// automation strategy, not just reading about one. The code's last three
// digits (632) were assigned when this repo was provisioned; only the level
// digit changed.
export const courseMeta = slopCourseMetaSchema.parse({
  code: "SLOP4632",
  title: "Deprecation Notice",
  session: "Semester 1",
  year: 2027,
  level: 4,
  startDate: "2027-02-22",
  endDate: "2027-05-28",
  description:
    "Twelve industries, twelve deprecation notices: the pitch for replacing " +
    "each with AI, written in the confident voice that pitch is sold in, " +
    "then the audit of what it leaves out — the cost, and the capability " +
    "that doesn't survive the migration.",
  tags: ["automation policy", "critical writing", "case studies"],
}) satisfies CourseMetaInput;

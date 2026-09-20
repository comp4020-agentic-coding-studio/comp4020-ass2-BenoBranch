# Process overview

## What I built

SLOP4632: Deprecation Notice is a 4000-level capstone course. Every lecture
is a formal, software-style deprecation notice for one real industry
currently being pitched for AI replacement. Each notice keeps two voices
apart: the pitch and migration path read like the actual sales case, while
breaking changes and the rollback plan are plain, checked, and never
satirical. Twelve industries escalate across the semester, from clerical and
mechanical work early on to care and creative labour later, ending with a
week that turns the format on the course's own method. Assessment tracks
that arc: a weekly log naming one checkable claim, an original notice
students write themselves, and a closing review board where they defend or
block a classmate's notice with evidence, not opinion.

## How I got here

Before writing any content, I called `advisor()` on the plan. It flagged
something I hadn't accounted for: a marker skimming two non-adjacent weeks in
ten minutes has no way to tell deliberate satirical register from
unsupervised slop, unless the site says so somewhere straight. That became
"the frame", a plain statement on the policies page and a home-page section, built as load-bearing, not decoration
([`7407a1b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BenoBranch/commit/7407a1b)).

I put the four-part notice shape into the `lectures` Zod schema, not a spec
test, and committed it red before any content existed
([`207da84`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BenoBranch/commit/207da84))
, a week literally can't ship half-audited. A planned two-week vertical
slice (weeks 1 and 9) surfaced something the plan hadn't: Astro validates a
whole content collection at sync time, not per file, so two finished weeks
out of twelve can never produce a green `pnpm check` alone. Rather than stub
the other ten, I wrote all twelve in one pass, which also meant building the
three real assessments early, once a dangling `related` reference in the
session files hard-failed the build
([`6b2bc04...fb3ee41`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BenoBranch/compare/22f5cdc...fb3ee41)).
Before committing, `advisor()` caught that this was about to land as one
"wrote the whole course" commit, against the plan's own sequencing rule; I
split it into five along the decision lines above instead.

One thing I left deliberately uncoded: whether a week's `breakingChanges`
says anything beyond restating its `pitch`, the course's actual bet.
`spec/README.md` already says human-judgement lines belong to the crit, and
a length or similarity threshold here would be theatre standing in for a
reader's judgement. I checked the escalation claim instead of asserting it:
a script comparing each week's `breakingChanges` word count against its
`pitch` showed the ratio climbing from 2.43 at week 1 to 4.69 at week 8, with
rollback plans roughly doubling in length by weeks 10–12
([`9eb33ca`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BenoBranch/commit/9eb33ca)).

With every item shipped, reading harsh Assignment 1 feedback (process 80,
artefact 60 for being janky on mobile, response 70) made restarting the
harness look like the safer move. I checked first: A1's `CLAUDE.md` history
showed two commits over the unmodified starter file, matching the marker's
own comment; this repo already carried four course-specific rules written
before any content existed
([`22f5cdc`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BenoBranch/commit/22f5cdc)).
A second `advisor()` pass pushed back, I'd only checked the process side,
not the two things A1 scored lower on. So I screenshotted four pages at
390×844 to check for the mobile crowding A1 was marked down for, and
confirmed the repo was still private with CI unrun, rather than let the more
comfortable half of the evidence stand alone.

Two image decisions came from the same rule: staff bios stayed text-only
rather than generate headshots, and the hero and card art are programmatic
SVG rasterised with Sharp in the site's own gold-and-black palette instead of
a stock photo, no fabricated photography anywhere on the site
([`eae3ada`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BenoBranch/commit/eae3ada),
[`57cecf1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BenoBranch/commit/57cecf1)).

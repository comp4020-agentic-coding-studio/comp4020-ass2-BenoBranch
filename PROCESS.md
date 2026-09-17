# Process overview

## What I built

**SLOP4632: Deprecation Notice** — a 4000-level capstone course where every
lecture is a formal software-style deprecation notice for one real industry
being pitched for AI replacement. Each notice is written in two deliberate
registers: the sunset rationale and migration path in the confident,
overconfident voice the real pitch is sold in, and the breaking-changes and
rollback-plan sections in the plain, checked voice of an audit. Twelve
industries escalate from clerical work to care and creative labour to a
capstone that turns the format on the course's own method; assessment moves
the same way, from a weekly log of one checkable claim, to a notice students
write themselves, to a live review board where they defend or block a
classmate's notice with evidence.

## How I got here

The topic came from combining two ideas I liked — deprecating things, and a
"Calling Bullshit"-style stance toward AI hype — into the notice format
itself. Before writing any content I called `advisor()` on the plan; it
flagged a real risk: a marker skimming two non-adjacent weeks in ten minutes
can't tell deliberate satirical register from unsupervised slop unless the
site names the device somewhere straight. That became "the frame" — a plain
policies-page statement and a home-page section — as a load-bearing design
decision, not decoration ([`7407a1b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BenoBranch/commit/7407a1b)).

I put the four-part notice shape into the `lectures` Zod schema rather than a
spec test, deliberately committing it red before any content existed
([`207da84`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BenoBranch/commit/207da84)) — a week literally cannot ship half-audited.
Building the planned non-adjacent vertical slice (week 1 and week 9) surfaced
something the plan hadn't accounted for: Astro validates a whole content
collection at sync time, not per file, so two complete weeks out of twelve can
never produce a green `pnpm check` on their own. Rather than stub the other
ten with disposable filler, I wrote all twelve in one pass and said so
plainly in `.process-log.md` instead of quietly merging plan steps. The same
pass hit a second build-only discovery — a course-graph integration
hard-fails on a dangling `related` reference, separately from the schema —
which forced the three assessments to be built earlier than planned
([`6b2bc04...fb3ee41`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BenoBranch/compare/22f5cdc...fb3ee41)).

Before that whole pass was committed, `advisor()` caught that it was about to
become the single "wrote the whole course" blob commit the plan's own
sequencing section had warned against; I split it into five commits along
the decision lines already narrated in the process log instead.

The two remaining pieces — people's text-only bios (no fabricated
photography, [`eae3ada`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BenoBranch/commit/eae3ada)) and the hero/card artwork (an
SVG→sharp deprecation-stamp motif in the site's actual gold/black brand
palette, [`57cecf1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BenoBranch/commit/57cecf1)) — both stayed image-free of anything
resembling a real photograph, on the same rule.

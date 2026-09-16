# Your harness

This file is yours, and it arrives with no rules in it on purpose --- this note
is all there is, and it goes when you write your own. The rules you hold the
agent to are part of what gets marked, so they should be rules you decided on.

Nothing about the starter is recorded here. The platform under you is fixed and
documented in `README.md`, and the
[course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/)
publishes this deliverable's brief and spec. Read both before you plan or build;
what the agent needs to carry from either is your call.

## Process log, carried forward from ass1

- **Update `.process-log.md` as you go, not at the end.** It's gitignored
  working material for exactly one job: raw notes to pull the 3--4 strongest
  moments from into `PROCESS.md`. After any substantial change --- a design
  decision, a bug and its real fix, a piece of feedback acted on, a check that
  went red then green --- append an entry before moving on: what happened,
  what was decided instead of the obvious thing, how it was checked, and the
  commit hash once it lands. Quote the actual prompt where one drove the
  decision. Do this without being asked each session; writing it from memory
  afterward loses exactly the detail that makes a `PROCESS.md` moment worth
  citing.

## Tracking work with TODO.md

`TODO.md` at the repo root is the running task list --- feature requests,
bugs, follow-ups, whatever's pending. A `.claude/hooks/` SessionStart hook
(machine-local, since `.claude/` is gitignored in this repo) reads it at the
start of every session and injects it into context, so a new session picks up
where the last one left off without being told. Convention:

- `[ ]` --- not started
- `[~]` --- in progress (mark this the moment you start working on an item)
- `[x]` --- done

Update the file directly as work happens, not in a batch at the end: flip an
item to `[~]` when you pick it up, `[x]` the moment its check goes green. If
the user adds a new ask mid-session, add it as a new `[ ]` line rather than
letting it live only in chat history.

## Course design: SLOP4632, Deprecation Notice

The course's one idea: every lecture is a formal, software-style deprecation
notice for a real industry AI is pitched to replace, always in four parts
(sunset rationale, migration path, breaking changes, rollback plan), reused
for a different industry each week. These rules protect that idea from
drifting into either "generic automation-ethics survey" or "AI slop with a
theme."

- **Voice boundary, and it is not optional.** The sunset rationale, pitch and
  migration path are written in the confident, jargon-fluent register of the
  automation pitches this course is about — "unlocks," "removes friction,"
  downsides folded into a subordinate clause. `breakingChanges` (both the
  economic and functional halves), the policies page, and every assessment
  brief's marking criteria are always plain: no jargon, no hedging, a real
  named cost or a real named capability. This contrast is the entire
  pedagogy — a student learns to call bullshit by writing both halves in the
  same document. Never let plain analysis creep into the pitch (it kills the
  joke) and never let the satirical register creep into breaking changes,
  policy, or marking (it stops being gradeable). If a page's job is to be
  trusted at face value — policies, marking criteria, the spec on an
  assessment brief — it does not get the bit.
- **The frame must exist somewhere straight.** A marker reads a handful of
  non-adjacent pages in about ten minutes; without a plainly-written surface
  saying "the notices are written in the voice they critique, and breaking
  changes is where the satire stops," deliberate register is indistinguishable
  from an unsupervised agent's slop. That statement lives on the policies page
  and in a short "how to read this course" section on the home page. Don't
  remove or bury either without replacing the frame somewhere else a
  skimming reader will land.
- **The form must visibly strain as the arc progresses.** Twelve weeks in an
  identical four-heading shape reads as repetition even with different
  industries in each. Early weeks (clerical, mechanical work) get clean
  notices with real rollback plans. By the care-work and creative-labour
  weeks, `breakingChanges` should start to dwarf the pitch that precedes it,
  and the rollback plan should get visibly harder to write, or concede it
  isn't realistic. Week 12 turns the format on the course's own method. When
  writing a week, check it against its neighbours in the arc, not just
  against the schema.
- **No fabricated human photography.** `people` entries are text-only bios;
  don't generate or source headshots for invented staff. Deleting a
  placeholder photo (rather than replacing it with another placeholder) is
  the correct move here, not a shortcut.
- **A course promise becomes a `spec/` check the moment it's decided, not
  after the content is written** — same discipline as the process-log rule
  above, applied to course design rather than narrative. Prefer enforcing a
  promise in the content schema (build-time, can't ship broken) over a
  spec/ test (checked before shipping) whenever the promise is about a
  single document's shape; reach for `spec/` only for promises that span
  documents. Leave a promise uncoded, and say so in `PROCESS.md`, when only a
  human can judge it — a length or keyword check standing in for judgement is
  worse than no check.

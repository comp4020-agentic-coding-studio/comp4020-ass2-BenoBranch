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

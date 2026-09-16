# TODO

Course: SLOP4632 "Deprecation Notice" — see the approved plan for the full
design rationale (four-part notice form, voice-boundary rule, 12-week arc,
assessment split, the "frame" decision).

- [x] course-config.ts + site-config.ts: identity, SLOP4632, dates, tags,
      sessionLabels -> Audits
- [x] content.config.ts: extend lectures schema with industry/pitch/
      breakingChanges/rollbackPlan; spec/course-coherence.test.ts (weights
      sum to 100, weeks 1-12 present once, industry unique, >=1 deck)
- [x] CLAUDE.md: voice-boundary rule, structural-escalation rule,
      no-fabricated-photography rule, spec-as-decided rule
- [x] Vertical slice: Week 1 (lecture+audit+real deck) and Week 9
      (lecture+audit) fully built and pnpm check green
- [x] Remaining weeks 2-8, 10-12 (lecture+audit each) -- written alongside the
      vertical slice rather than after it: the lectures schema validates the
      whole collection at once, so a build can't go green with only 2 of 12
      weeks filled in. See .process-log.md.
- [x] Assessments: weekly-audit-log (20), file-your-own-notice (35),
      sunset-review-board (45) -- also forced earlier than planned, since the
      course-graph integration hard-fails the build on a dangling `related`
      reference (sessions already pointed at these slugs)
- [x] People: text-only bios, remove placeholder photos
- [x] Policies page + home page "How to read this course" frame section
- [ ] Voice pass: lectures/sessions/assessments/people index pages, 404,
      site-config alt text, index.astro heroImageAlt
- [ ] Artwork: generate hero-home.avif (2560x1086) + card.png (1200x630)
      via SVG->sharp script
- [ ] Final pnpm check + pnpm check:evidence pass

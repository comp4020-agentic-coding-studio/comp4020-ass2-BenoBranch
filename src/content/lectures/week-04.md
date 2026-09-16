---
title: "Notice 04: Diagnostic Radiology"
description: The first expert/diagnostic notice — where the pitch is true and the audit still matters
week: 4
date: 2027-03-15
teachers:
  - idris-fenn
related:
  - sessions/04-diagnostic-radiology
industry: Diagnostic radiology
pitch: >-
  A radiologist's read is pattern-matching against a reference set of prior
  scans with known outcomes. A model trained on millions of labelled scans
  across every modality now matches or exceeds specialist-level sensitivity
  on the findings it was trained to detect, returns a read in seconds instead
  of a worklist queue, and never has an off day at 2am on call.
migrationPath: >-
  Scans route through the model first; findings above a confidence threshold
  generate a structured report directly into the record, and only borderline
  or flagged studies are queued for a radiologist's read.
breakingChanges:
  economic: >-
    Radiology built a specific, well-compensated career path for one of
    medicine's few remote-friendly specialties, with training pipelines sized
    to that demand. Collapsing routine-read volume doesn't just cut cost per
    scan, it removes the case-volume junior radiologists need to train on,
    narrowing who can enter the specialty at all rather than just how many
    are employed once trained.
  functional: >-
    A model detects what it was trained to detect, at the prevalence and
    image quality of its training data; it degrades quietly on rare
    presentations, unusual patient anatomy, and equipment it wasn't
    calibrated against, without the confidence score reliably tracking that
    degradation. A radiologist under the same conditions doesn't stop
    reasoning about the specific patient in front of them just because the
    case is unusual.
rollbackPlan: >-
  Read volume can be handed back to radiologists directly, and the profession
  itself doesn't disappear. But a training pipeline narrowed for a decade
  produces fewer radiologists able to absorb that volume back, and rebuilding
  that pipeline is a decade-scale project, not a policy reversal.
---

The pitch this week is, again, mostly true --- sensitivity and specificity
numbers on the published benchmarks really are strong. That's exactly why
the breaking-changes section has to do real work rather than just
contradicting the pitch: the case against this migration isn't "it doesn't
work," it's "what a training-pipeline argument costs a profession over a
decade that a single-scan accuracy number can't see."

## Outline

- why "the pitch is true" and "the migration is fine" are different claims,
  and where this notice keeps them separate
- the specific mechanism (training-pipeline narrowing) linking this week's
  economic and functional breaking changes together
- what a decade-scale rollback plan implies about how early a profession
  needs to notice this kind of migration to keep its options open
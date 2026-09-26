# FitLog

Next.js (App Router) + TypeScript + Tailwind implementation of the FitLog Figma file.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's implemented

- `/` — Home page: hero + 12-card workout library grid
- `/workouts/[slug]` — Exercise details page (dynamic route, one page per workout)
- `/plan` — My Plan page: Today's Plan / Saved tabs, duration sort, mark-as-done,
  remove, and an empty state — all backed by local React state (no backend yet)

## Assumptions made (no answers were given for Phase 2 questions, so these were
chosen to keep things moving — flag anything you want changed)

1. **Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS, npm.
2. **The "twelve lifts" mismatch**: the Figma grid only defined 10 unique
   exercises (the rest were duplicate "Dumbbell Bicep Curl" cards). I kept
   the 10 real ones and added two more (`Lat Pulldown`, `Seated Cable Row`)
   to match the "Twelve lifts covering every major muscle group" copy —
   see the comment at the top of `lib/workouts.ts`. Swap these for real
   content or drop back to 10 cards, whichever you'd rather.
3. **Images**: your uploaded `banner.png` is used in the hero. Your uploaded
   `logo.png` was **not** used — Figma's own header/footer mark is a
   "crossed dumbbells" icon, which I rebuilt as an inline SVG
   (`components/icons.tsx`) to match the design. The 12 workout-card
   thumbnails and the details-page hero image are placeholder gradient
   blocks with the exercise name — I don't have network access in this
   environment to pull the actual stock photos out of Figma, so these
   need real photos dropped in (`components/WorkoutCard.tsx` and
   `app/workouts/[slug]/page.tsx`).
4. **Details page content**: the spec table (Difficulty/Sets/Reps) and the
   instructions list weren't fully populated for every exercise in the
   Figma file — I only had full detail for "Barbell Bench Press". I wrote
   plausible values for the other 11 in `lib/workouts.ts`; treat those as
   drafts to review, not final copy.
5. **"Mark as Done"** toggles a visual done state (dims the row) rather
   than removing the item — seemed closer to intent than deleting it.
   **"Sort By: Duration"** toggles ascending/descending on click.
6. **Responsive**: Figma only had desktop (1280px) frames, so the grid
   breakpoints (3 → 2 → 1 columns) and header, while functional down to
   mobile widths, are my own judgment call, not something from the file.
7. **Routing**: "View Details" navigates to `/workouts/[slug]`; this
   wasn't an explicit interaction in Figma, just the most natural reading
   of the two-frame relationship.

## Not implemented

- No backend/persistence — plan state resets on refresh
- No auth
- No search/filter by muscle group despite the tagline
- Hover/focus states beyond basic Tailwind defaults (none were specified
  in Figma)

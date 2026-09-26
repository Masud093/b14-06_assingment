# FitLog

Next.js (App Router) + TypeScript + Tailwind implementation of the FitLog Figma file.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's implemented

- `/` — Home page: hero + workout library with text search and muscle-group filter
- `/workouts/[slug]` — Exercise details page (dynamic route, one page per workout)
- `/plan` — My Plan page: Today's Plan / Saved tabs, duration sort, mark-as-done,
  remove, and an empty state
- Workout detail actions add exercises to today's plan or the Saved list
- Plan selections and completion state persist in browser local storage
- Local workout artwork is used on cards, detail pages, and the plan list

## Assumptions made (no answers were given for Phase 2 questions, so these were
chosen to keep things moving — flag anything you want changed)

1. **Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS, npm.
2. **The "twelve lifts" mismatch**: the Figma grid only defined 10 unique
   exercises (the rest were duplicate "Dumbbell Bicep Curl" cards). I kept
   the 10 real ones and added two more (`Lat Pulldown`, `Seated Cable Row`)
   to match the "Twelve lifts covering every major muscle group" copy —
   see the comment at the top of `lib/workouts.ts`. Swap these for real
   content or drop back to 10 cards, whichever you'd rather.
3. **Images**: `banner.png` is used in the home-page hero and `v4_11.png` is
   reused as local artwork for workout cards, detail pages, and plan thumbnails.
   `logo.png` is not used; the header/footer mark is an inline SVG in
   `components/icons.tsx`.
4. **Details page content**: the spec table (Difficulty/Sets/Reps) and the
   instructions list weren't fully populated for every exercise in the
   Figma file — I only had full detail for "Barbell Bench Press". I wrote
   plausible values for the other 11 in `lib/workouts.ts`; treat those as
   drafts to review, not final copy.
5. **"Mark as Done"** toggles a visual done state (dims the row) rather
   than removing the item. Plan contents and completion state persist in this
   browser's local storage, but are not synced across devices. **"Sort By:
   Duration"** toggles ascending/descending on click.
6. **Responsive**: Figma only had desktop (1280px) frames, so the grid
   breakpoints (3 → 2 → 1 columns) and header, while functional down to
   mobile widths, are my own judgment call, not something from the file.
7. **Routing**: "View Details" navigates to `/workouts/[slug]`; this
   wasn't an explicit interaction in Figma, just the most natural reading
   of the two-frame relationship.

## Not implemented

- No backend or account-based sync
- No authentication
- Workout images are shared across exercises rather than exercise-specific
- Hover/focus states beyond basic Tailwind defaults (none were specified
  in Figma)

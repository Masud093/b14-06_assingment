export const DEFAULT_TODAY_SLUGS = ["russian-twist", "pull-up"];
export const PLAN_UPDATED_EVENT = "fitlog-plan-updated";

export interface StoredWorkoutPlan {
  today: string[];
  saved: string[];
  done: string[];
}

const STORAGE_KEY = "fitlog-workout-plan";

export function readWorkoutPlan(): StoredWorkoutPlan {
  const fallback = {
    today: DEFAULT_TODAY_SLUGS,
    saved: [],
    done: [],
  };

  if (typeof window === "undefined") return fallback;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return fallback;

    const parsed: unknown = JSON.parse(stored);
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "today" in parsed &&
      "saved" in parsed &&
      "done" in parsed &&
      Array.isArray(parsed.today) &&
      Array.isArray(parsed.saved) &&
      Array.isArray(parsed.done) &&
      [...parsed.today, ...parsed.saved, ...parsed.done].every(
        (slug) => typeof slug === "string"
      )
    ) {
      return {
        today: parsed.today,
        saved: parsed.saved,
        done: parsed.done,
      };
    }
  } catch {
    return fallback;
  }

  return fallback;
}

export function writeWorkoutPlan(plan: StoredWorkoutPlan) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
  } catch {
    // Keep the current session usable when browser storage is unavailable.
  }
}
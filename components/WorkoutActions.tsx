"use client";

import { useEffect, useState } from "react";
import { PLAN_UPDATED_EVENT, readWorkoutPlan, writeWorkoutPlan } from "@/lib/planStorage";
import { BookmarkIcon, CheckIcon } from "./icons";

export function WorkoutActions({ workoutSlug }: { workoutSlug: string }) {
  const [added, setAdded] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const syncState = () => {
      const plan = readWorkoutPlan();
      setAdded(plan.today.includes(workoutSlug));
      setSaved(plan.saved.includes(workoutSlug));
    };
    syncState();
    window.addEventListener(PLAN_UPDATED_EVENT, syncState);
    window.addEventListener("storage", syncState);
    return () => {
      window.removeEventListener(PLAN_UPDATED_EVENT, syncState);
      window.removeEventListener("storage", syncState);
    };
  }, [workoutSlug]);

  function addToPlan() {
    const plan = readWorkoutPlan();
    if (!plan.today.includes(workoutSlug)) {
      writeWorkoutPlan({ ...plan, today: [...plan.today, workoutSlug] });
      window.dispatchEvent(new Event(PLAN_UPDATED_EVENT));
    }
    setAdded(true);
  }

  function saveForLater() {
    const plan = readWorkoutPlan();
    if (!plan.saved.includes(workoutSlug)) {
      writeWorkoutPlan({ ...plan, saved: [...plan.saved, workoutSlug] });
      window.dispatchEvent(new Event(PLAN_UPDATED_EVENT));
    }
    setSaved(true);
  }

  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <button
        onClick={addToPlan}
        disabled={added}
        className="flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-body text-sm font-bold text-black disabled:cursor-default disabled:opacity-70"
      >
        <CheckIcon className="size-4" />
        {added ? "Added to Plan" : "Add to Plan"}
      </button>
      <button
        onClick={saveForLater}
        disabled={saved}
        className="flex items-center gap-2 rounded-md border border-border px-6 py-3 font-body text-sm font-semibold text-white disabled:cursor-default disabled:opacity-70"
      >
        <BookmarkIcon className="size-4" />
        {saved ? "Saved for Later" : "Save for Later"}
      </button>
    </div>
  );
}
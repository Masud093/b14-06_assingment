"use client";

import { useEffect, useState } from "react";
import { PLAN_UPDATED_EVENT, readWorkoutPlan, writeWorkoutPlan } from "@/lib/planStorage";
import { CheckIcon } from "./icons";

export function WorkoutActions({ workoutSlug }: { workoutSlug: string }) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const syncAddedState = () => setAdded(readWorkoutPlan().today.includes(workoutSlug));
    syncAddedState();
    window.addEventListener(PLAN_UPDATED_EVENT, syncAddedState);
    window.addEventListener("storage", syncAddedState);
    return () => {
      window.removeEventListener(PLAN_UPDATED_EVENT, syncAddedState);
      window.removeEventListener("storage", syncAddedState);
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
    </div>
  );
}
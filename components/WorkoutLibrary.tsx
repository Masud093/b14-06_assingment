"use client";

import { useState } from "react";
import { Workout } from "@/lib/types";
import { WorkoutCard } from "./WorkoutCard";

export function WorkoutLibrary({ workouts }: { workouts: Workout[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredWorkouts = workouts.filter((workout) =>
    [workout.name, workout.equipment, ...workout.tags]
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery)
  );

  return (
    <section id="library" className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-[-0.75px] text-white">
          The Library
        </h2>
        <p className="font-body text-sm text-muted">
          {filteredWorkouts.length} of {workouts.length} workouts
        </p>
      </div>

      <label className="flex max-w-md flex-col gap-2 font-body text-xs font-bold uppercase text-muted">
        Search workouts
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Name, equipment, or muscle group"
          className="h-11 rounded-md border border-border bg-surface px-4 text-sm font-normal normal-case text-white outline-none placeholder:text-subtle focus:border-accent"
        />
      </label>

      {filteredWorkouts.length === 0 ? (
        <p className="border-t border-border py-8 font-body text-sm text-muted">
          No workouts match “{query}”.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWorkouts.map((workout) => (
            <WorkoutCard key={workout.slug} workout={workout} />
          ))}
        </div>
      )}
    </section>
  );
}
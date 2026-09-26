"use client";

import { useState } from "react";
import { MuscleGroup, Workout } from "@/lib/types";
import { WorkoutCard } from "./WorkoutCard";

const muscleGroups: Array<"All" | MuscleGroup> = [
  "All",
  "Chest",
  "Back",
  "Legs",
  "Shoulders",
  "Arms",
  "Core",
];

export function WorkoutLibrary({ workouts }: { workouts: Workout[] }) {
  const [query, setQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<(typeof muscleGroups)[number]>("All");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredWorkouts = workouts.filter((workout) => {
    const matchesQuery = [workout.name, workout.equipment, ...workout.tags]
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery);
    const matchesGroup = selectedGroup === "All" || workout.tags.includes(selectedGroup);
    return matchesQuery && matchesGroup;
  });

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

      <div className="flex flex-wrap items-end gap-4">
        <label className="flex min-w-60 max-w-md flex-1 flex-col gap-2 font-body text-xs font-bold uppercase text-muted">
          Search workouts
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Name, equipment, or muscle group"
            className="h-11 rounded-md border border-border bg-surface px-4 text-sm font-normal normal-case text-white outline-none placeholder:text-subtle focus:border-accent"
          />
        </label>
        <label className="flex min-w-44 flex-col gap-2 font-body text-xs font-bold uppercase text-muted">
          Muscle group
          <select
            value={selectedGroup}
            onChange={(event) => setSelectedGroup(event.target.value as (typeof muscleGroups)[number])}
            className="h-11 rounded-md border border-border bg-surface px-4 text-sm font-normal normal-case text-white outline-none focus:border-accent"
          >
            {muscleGroups.map((group) => (
              <option key={group} value={group}>
                {group === "All" ? "All muscle groups" : group}
              </option>
            ))}
          </select>
        </label>
      </div>

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
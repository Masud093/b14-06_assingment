"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Workout } from "@/lib/types";
import { ChevronDownIcon, ClockIcon, FlameIcon, StarIcon, CheckIcon, XIcon } from "./icons";

type Tab = "today" | "saved";

interface PlanItem {
  workout: Workout;
  done: boolean;
}

export function PlanBoard({ initial }: { initial: Workout[] }) {
  const [tab, setTab] = useState<Tab>("today");
  const [todayItems, setTodayItems] = useState<PlanItem[]>(
    initial.map((w) => ({ workout: w, done: false }))
  );
  const [savedItems, setSavedItems] = useState<PlanItem[]>(
    initial.map((w) => ({ workout: w, done: false }))
  );
  const [sortAsc, setSortAsc] = useState(true);

  const activeItems = tab === "today" ? todayItems : savedItems;
  const setActiveItems = tab === "today" ? setTodayItems : setSavedItems;

  const sortedItems = useMemo(() => {
    return [...activeItems].sort((a, b) =>
      sortAsc
        ? a.workout.durationMin - b.workout.durationMin
        : b.workout.durationMin - a.workout.durationMin
    );
  }, [activeItems, sortAsc]);

  const totals = useMemo(() => {
    return todayItems.reduce(
      (acc, item) => ({
        exercises: acc.exercises + 1,
        minutes: acc.minutes + item.workout.durationMin,
        calories: acc.calories + item.workout.calories,
      }),
      { exercises: 0, minutes: 0, calories: 0 }
    );
  }, [todayItems]);

  function remove(slug: string) {
    setActiveItems((items) => items.filter((i) => i.workout.slug !== slug));
  }

  function toggleDone(slug: string) {
    setActiveItems((items) =>
      items.map((i) => (i.workout.slug === slug ? { ...i, done: !i.done } : i))
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="font-heading text-4xl font-bold uppercase tracking-[-0.75px] text-white">
          My Plan
        </h1>
        <p className="font-body text-sm text-muted">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 rounded-2xl border border-border bg-surface p-8 sm:grid-cols-3">
        <Metric label="Exercises" value={totals.exercises} />
        <Metric label="Minutes" value={totals.minutes} />
        <Metric label="Calories" value={totals.calories} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-1 rounded-full border border-border p-1">
          <TabButton active={tab === "today"} onClick={() => setTab("today")}>
            Today&apos;s Plan
          </TabButton>
          <TabButton active={tab === "saved"} onClick={() => setTab("saved")}>
            Saved
          </TabButton>
        </div>

        <button
          onClick={() => setSortAsc((v) => !v)}
          className="flex items-center gap-3 font-body text-sm text-muted"
        >
          Sort By
          <span className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-white">
            Duration
            <ChevronDownIcon
              className={`size-3.5 transition-transform ${sortAsc ? "" : "rotate-180"}`}
            />
          </span>
        </button>
      </div>

      {sortedItems.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className="flex flex-col gap-4">
          {sortedItems.map(({ workout, done }) => (
            <li
              key={workout.slug}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-4"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-36 shrink-0 overflow-hidden rounded-lg bg-surface-alt">
                  <Image
                    src="/v4_11.png"
                    alt={workout.name}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
                <div className={`flex flex-col gap-1 ${done ? "opacity-50" : ""}`}>
                  <h2 className="font-heading text-lg font-bold uppercase tracking-[0.3px] text-white">
                    {workout.name}
                  </h2>
                  <p className="font-body text-xs text-muted">{workout.equipment}</p>
                  <div className="flex items-center gap-4 pt-1">
                    <span className="flex items-center gap-1.5 font-body text-xs text-muted">
                      <ClockIcon className="size-3.5" />
                      {workout.durationMin} min
                    </span>
                    <span className="flex items-center gap-1.5 font-body text-xs text-muted">
                      <FlameIcon className="size-3.5" />
                      {workout.calories} kcal
                    </span>
                    <span className="flex items-center gap-1.5 font-body text-xs text-muted">
                      <StarIcon className="size-3.5" />
                      {workout.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={`/workouts/${workout.slug}`}
                  className="rounded-md border border-border px-4 py-2 font-body text-sm font-medium text-white"
                >
                  View Details
                </Link>
                {tab === "today" && (
                  <button
                    onClick={() => toggleDone(workout.slug)}
                    className={`flex items-center gap-2 rounded-md px-4 py-2 font-body text-sm font-medium ${
                      done ? "bg-surface-alt text-muted" : "bg-accent text-black"
                    }`}
                  >
                    <CheckIcon className="size-3.5" />
                    {done ? "Done" : "Mark as Done"}
                  </button>
                )}
                <button
                  onClick={() => remove(workout.slug)}
                  aria-label={`Remove ${workout.name}`}
                  className="flex size-7 items-center justify-center rounded-full border border-border text-muted"
                >
                  <XIcon className="size-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-body text-sm text-muted">{label}</span>
      <span className="font-heading text-4xl font-bold text-white">{value}</span>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 font-body text-sm font-medium transition-colors ${
        active ? "bg-accent text-black" : "text-muted hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface py-24 text-center">
      <h2 className="font-heading text-lg font-bold uppercase tracking-[1px] text-white">
        Nothing Here Yet
      </h2>
      <p className="max-w-[300px] font-body text-sm text-muted">
        You haven&apos;t added any lifts to this list. Browse the library to get started.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-md bg-accent px-6 py-2.5 font-body text-sm font-bold text-black"
      >
        Browse Workouts
      </Link>
    </div>
  );
}

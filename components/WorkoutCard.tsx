import Link from "next/link";
import Image from "next/image";
import { Workout } from "@/lib/types";
import { Tag } from "./Tag";
import { ClockIcon, FlameIcon, StarIcon } from "./icons";

export function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workouts/${workout.slug}`}
      className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/40">
      <div className="relative h-48 w-full bg-surface-alt">
        <Image
          src="/v4_11.png"
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap gap-2">
            {workout.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <h3 className="pt-2 font-heading text-lg font-bold uppercase tracking-[0.45px] text-white">
            {workout.name}
          </h3>
          <p className="font-body text-xs text-muted">{workout.equipment}</p>
        </div>

        <div className="mt-4 flex items-center gap-4 border-t border-border-soft pt-3.5">
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
    </Link>
  );
}

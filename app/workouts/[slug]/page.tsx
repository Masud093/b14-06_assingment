import { notFound } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Tag } from "@/components/Tag";
import { WorkoutActions } from "@/components/WorkoutActions";
import { getWorkoutBySlug, workouts } from "@/lib/workouts";

// Prebuild one detail route for each workout in the local library.
export function generateStaticParams() {
  return workouts.map((w) => ({ slug: w.slug }));
}

const specRows = (workout: NonNullable<ReturnType<typeof getWorkoutBySlug>>) => [
  { label: "Equipment", value: workout.equipment },
  { label: "Difficulty", value: workout.difficulty },
  { label: "Sets", value: String(workout.sets) },
  { label: "Reps", value: workout.reps },
  { label: "Duration", value: `${workout.durationMin} min` },
  { label: "Calories", value: `${workout.calories} kcal` },
  { label: "Rating", value: String(workout.rating) },
];

export default function WorkoutDetailsPage({ params }: { params: { slug: string } }) {
  const workout = getWorkoutBySlug(params.slug);
  if (!workout) return notFound();

  return (
    <>
      <Header />

      <main className="mx-auto max-w-content px-6 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative aspect-[588/773] w-full overflow-hidden rounded-2xl border border-border bg-surface-alt">
            <Image
              src="/v4_11.png"
              alt={workout.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="font-heading text-4xl font-bold uppercase tracking-[-0.5px] text-white">
                {workout.name}
              </h1>
              <p className="max-w-[576px] font-body text-base leading-6 text-muted">
                {workout.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {workout.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <dl className="overflow-hidden rounded-2xl border border-border">
              {specRows(workout).map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between px-6 py-4 ${
                    i > 0 ? "border-t border-border-soft" : ""
                  }`}
                >
                  <dt className="font-body text-xs font-bold uppercase tracking-[1.3px] text-muted">
                    {row.label}
                  </dt>
                  <dd className="font-body text-sm font-medium text-white">{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-lg font-bold uppercase tracking-[1px] text-white">
                Instructions
              </h2>
              <ol className="flex flex-col gap-3">
                {workout.instructions.map((step, i) => (
                  <li key={i} className="flex gap-3 font-body text-sm leading-6 text-muted">
                    <span className="font-heading text-sm text-accent">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <WorkoutActions workoutSlug={workout.slug} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

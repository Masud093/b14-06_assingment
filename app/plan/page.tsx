import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PlanBoard } from "@/components/PlanBoard";
import { getWorkoutBySlug } from "@/lib/workouts";
import { DEFAULT_TODAY_SLUGS } from "@/lib/planStorage";

// Seed data matching the two items shown in the Figma "My Plan" mock.
export default function PlanPage() {
  // Resolve the seeded slugs into workout records for the interactive board.
  const initial = DEFAULT_TODAY_SLUGS.map(getWorkoutBySlug).filter(Boolean) as NonNullable<
    ReturnType<typeof getWorkoutBySlug>
  >[];

  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-6 py-12">
        <PlanBoard initial={initial} />
      </main>
      <Footer />
    </>
  );
}

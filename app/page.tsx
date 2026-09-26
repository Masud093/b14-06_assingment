import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WorkoutLibrary } from "@/components/WorkoutLibrary";
import { workouts } from "@/lib/workouts";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="mx-auto flex max-w-content flex-col gap-16 px-6 py-12">
        <section className="flex items-center justify-between gap-12 rounded-2xl border border-border bg-surface p-14">
          <div className="flex max-w-[576px] flex-col items-start gap-5">
            <span className="font-body text-[11px] font-bold uppercase tracking-[1.1px] text-accent">
              Workout Library
            </span>
            <h1 className="font-heading text-6xl font-extrabold uppercase leading-[1] tracking-[-1.5px] text-white">
              Train with intent.
              <br />
              Log every set.
            </h1>
            <p className="max-w-[512px] font-body text-base leading-6 text-muted">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
              today&apos;s plan, and watch the week&apos;s work add up.
            </p>
            <a
              href="#library"
              className="mt-2 rounded-md bg-accent px-6 py-3 font-body text-xs font-bold uppercase tracking-[0.3px] text-black"
            >
              Browse Workouts
            </a>
          </div>

          <div className="relative hidden size-[334px] shrink-0 overflow-hidden rounded-2xl md:block">
            <Image src="/banner.png" alt="FitLog" fill className="object-cover" priority />
          </div>
        </section>

        <WorkoutLibrary workouts={workouts} />
      </main>

      <Footer />
    </>
  );
}

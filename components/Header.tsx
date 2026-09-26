import Link from "next/link";
import { DumbbellIcon } from "./icons";

export function Header({ planCount = 0, savedCount = 0 }: { planCount?: number; savedCount?: number }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border-header bg-bg/95 backdrop-blur-[2px]">
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <DumbbellIcon className="size-7 text-white" />
          <span className="font-heading text-lg font-black uppercase tracking-[0.9px] text-white">
            FitLog
          </span>
        </Link>

        <nav className="flex items-center">
          <Link
            href="/"
            className="rounded-full bg-accent-soft px-4 py-1.5 font-body text-xs font-semibold text-accent"
          >
            Workouts
          </Link>
          <Link
            href="/plan"
            className="px-4 py-1.5 font-body text-xs font-medium text-muted hover:text-white"
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-body text-xs font-medium text-gray-300">Plan</span>
            <span className="flex size-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-black">
              {planCount}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-body text-xs font-medium text-muted">Saved</span>
            <span className="flex size-5 items-center justify-center rounded-full border border-[#2d313b] text-[11px] font-medium text-gray-300">
              {savedCount}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

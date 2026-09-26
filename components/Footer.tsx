import { DumbbellIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-border-footer bg-[#090a0d] py-10">
      <div className="mx-auto flex max-w-content items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <DumbbellIcon className="size-5 text-white" />
          <span className="font-heading text-sm font-bold uppercase tracking-[0.7px] text-white">
            FitLog
          </span>
        </div>
        <p className="font-body text-xs text-subtle">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}

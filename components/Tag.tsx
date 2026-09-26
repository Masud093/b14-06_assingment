export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.55px] text-black">
      {children}
    </span>
  );
}

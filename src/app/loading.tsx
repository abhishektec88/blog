export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-white/70 dark:bg-black/50 backdrop-blur-sm">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-sky-500 border-t-transparent" aria-label="Loading" />
    </div>
  );
}



"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// Circular full-screen overlay spinner centered during route changes
export default function RouteLoader() {
  const pathname = usePathname();
  const previousPathRef = useRef<string | null>(null);
  const [visible, setVisible] = useState(false);
  const hideTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (previousPathRef.current === null) {
      previousPathRef.current = pathname || "/";
      return;
    }

    if (previousPathRef.current !== pathname) {
      setVisible(true);
      if (hideTimeoutRef.current) window.clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = window.setTimeout(() => {
        setVisible(false);
        previousPathRef.current = pathname || "/";
      }, 1000);
    }
  }, [pathname]);

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-50 grid place-items-center"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        backgroundColor: visible ? "rgba(255,255,255,0.7)" : "transparent",
        backdropFilter: visible ? "blur(2px)" : "none",
        transition: "opacity 150ms ease, background-color 150ms ease",
      }}
    >
      <div className="relative h-16 w-16">
        {/* Gradient ring spinner */}
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent animate-spin"
          style={{
            borderTopColor: "#0ea5e9", // sky-500
            borderRightColor: "#a21caf", // fuchsia-700
            borderBottomColor: "#f59e0b", // amber-500
            borderLeftColor: "#22d3ee", // cyan-400
            animationDuration: "1.1s",
            boxShadow: "0 0 20px rgba(14,165,233,0.25)",
          }}
        />
        {/* Inner soft core */}
        <div className="absolute inset-2 rounded-full bg-white/90 dark:bg-black/60 shadow-inner" />
        {/* Pulsing center dot */}
        <div className="absolute inset-0 grid place-items-center">
          <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-sky-500">
            <span className="absolute inset-0 rounded-full bg-sky-500/50 animate-ping" />
          </span>
        </div>
      </div>
    </div>
  );
}



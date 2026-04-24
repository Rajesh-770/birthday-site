import { useEffect, useState } from "react";

interface Props {
  targetDate: Date;
  onComplete: () => void;
}

export const Countdown = ({ targetDate, onComplete }: Props) => {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) {
        setTime({ d: 0, h: 0, m: 0, s: 0 });
        onComplete();
        return;
      }
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate, onComplete]);

  const units = [
    { label: "DAYS", value: time.d },
    { label: "HRS", value: time.h },
    { label: "MIN", value: time.m },
    { label: "SEC", value: time.s },
  ];

  return (
    <div className="grid grid-cols-4 gap-px bg-border/40 border border-border/40">
      {units.map((u) => (
        <div
          key={u.label}
          className="glass-dark px-3 py-5 sm:px-6 sm:py-7 text-center"
        >
          <div className="font-display text-4xl sm:text-6xl text-paper tabular-nums leading-none text-glow-red">
            {String(u.value).padStart(2, "0")}
          </div>
          <div className="mt-2 text-[10px] tracking-[0.4em] text-muted-foreground font-mono">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
};

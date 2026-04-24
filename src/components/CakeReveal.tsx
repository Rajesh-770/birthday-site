import { useState } from "react";
import confetti from "canvas-confetti";
import cake from "@/assets/anime-cake.jpg";

interface Props {
  onBlow: () => void;
  recipient: string;
}

export const CakeReveal = ({ onBlow, recipient }: Props) => {
  const [blown, setBlown] = useState(false);

  const handleBlow = () => {
    if (blown) return;
    setBlown(true);
    const colors = ["#ef2b56", "#ff5577", "#a855f7", "#22d3ee", "#fbbf24"];
    const burst = (origin: { x: number; y: number }) =>
      confetti({
        particleCount: 90,
        spread: 100,
        startVelocity: 50,
        origin,
        colors,
        scalar: 1.1,
        gravity: 0.8,
      });
    burst({ x: 0.3, y: 0.65 });
    burst({ x: 0.7, y: 0.65 });
    setTimeout(() => burst({ x: 0.5, y: 0.4 }), 300);
    setTimeout(onBlow, 1400);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="font-jp text-base sm:text-lg text-neon-cyan mb-3 tracking-[0.4em]">
        願いを込めて
      </p>
      <p className="font-display text-2xl sm:text-3xl text-paper mb-1">
        MAKE A WISH, {recipient.toUpperCase()}
      </p>
      <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-8">
        tap the cake · 蝋燭を吹き消す
      </p>

      <button
        onClick={handleBlow}
        aria-label="Blow out the candles"
        className="group relative outline-none"
      >
        <div className="absolute -inset-6 -z-10 bg-primary/20 blur-3xl animate-pulse" />

        <div className="relative overflow-hidden border border-border/50 shadow-cinema scanlines">
          <img
            src={cake}
            alt="Birthday cake"
            width={1024}
            height={1024}
            className="w-72 sm:w-96 transition-transform duration-700 group-hover:scale-105"
          />
          {blown && (
            <div className="absolute inset-0 bg-ink/60 flex items-center justify-center">
              <p className="font-display text-3xl text-paper text-glow-red animate-reveal-up">
                WISH GRANTED
              </p>
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-[10px] tracking-[0.4em] text-muted-foreground font-mono">
          <span className="h-px w-8 bg-primary/60" />
          EP. 01 · BIRTHDAY
          <span className="h-px w-8 bg-primary/60" />
        </div>
      </button>
    </div>
  );
};

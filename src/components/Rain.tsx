export const Rain = ({ count = 80 }: { count?: number }) => (
  <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
    {Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100;
      const dur = 0.6 + Math.random() * 0.9;
      const delay = Math.random() * 4;
      const h = 30 + Math.random() * 50;
      return (
        <span
          key={i}
          className="absolute top-0 w-px animate-rain-fall"
          style={{
            left: `${left}%`,
            height: `${h}px`,
            background: "linear-gradient(180deg, transparent, hsl(var(--paper) / 0.35))",
            animationDuration: `${dur}s`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    })}
  </div>
);

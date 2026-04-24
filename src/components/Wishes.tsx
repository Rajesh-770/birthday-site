import { useEffect, useState } from "react";

const quotes = [
  { jp: "君と出会えて良かった", en: "Meeting you was the best plot twist of my life." },
  { jp: "雨の音、君の声", en: "The sound of rain, the sound of you — both make the world quieter." },
  { jp: "もう一度、君と", en: "If I had to live this story again, I'd run to the same scene with you." },
  { jp: "永遠の一コマ", en: "Some people are a chapter. You're the whole damn anime." },
  { jp: "誕生日おめでとう", en: "Happy birthday — to the person every soundtrack reminds me of." },
];

export const Wishes = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % quotes.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-28 sm:py-36 px-4 bg-noir grain overflow-hidden">
      {/* Marquee */}
      <div className="absolute top-8 inset-x-0 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap text-[8rem] sm:text-[12rem] font-display text-paper/[0.04] leading-none">
          {Array.from({ length: 4 }).map((_, k) => (
            <span key={k} className="px-8">HAPPY BIRTHDAY · 誕生日 · </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-jp text-sm text-neon-cyan tracking-[0.5em] mb-3">名言 · WORDS</p>
        <p className="font-display text-3xl sm:text-4xl text-paper/40 mb-12">A LETTER, IN FRAMES</p>

        <div className="relative min-h-[220px] flex items-center justify-center">
          {quotes.map((q, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${
                idx === i ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-y-6"
              }`}
            >
              <p className="font-jp text-2xl sm:text-3xl text-neon-pink mb-6 tracking-wider">「{q.jp}」</p>
              <p className="font-display italic text-2xl sm:text-4xl text-paper leading-snug max-w-3xl">
                "{q.en}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-px transition-all duration-500 ${
                idx === i ? "w-12 bg-primary" : "w-4 bg-border"
              }`}
              aria-label={`Quote ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

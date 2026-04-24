import reze from "@/assets/anime-reze.jpg";
import denji from "@/assets/anime-denji.jpg";
import cafe from "@/assets/anime-cafe.jpg";
import run from "@/assets/anime-run.jpg";
import umbrella from "@/assets/anime-umbrella.jpg";
import hero from "@/assets/anime-hero.jpg";

const scenes = [
  { src: reze, ep: "EP.01", jp: "出会い", title: "First Light", caption: "the moment everything tilted" },
  { src: cafe, ep: "EP.02", jp: "喫茶店", title: "Late Coffee", caption: "two cups · one rainy night" },
  { src: denji, ep: "EP.03", jp: "雨の中", title: "Quiet Storm", caption: "the look that said too much" },
  { src: run, ep: "EP.04", jp: "逃避行", title: "Run With Me", caption: "neon streets, no destination" },
  { src: umbrella, ep: "EP.05", jp: "相合傘", title: "Under One Sky", caption: "rain falls · we don't" },
  { src: hero, ep: "EP.06", jp: "永遠", title: "Stay", caption: "for one more frame" },
];

export const MemoryGallery = () => {
  return (
    <section id="memories" className="relative py-24 sm:py-32 px-4 bg-noir grain">
      <div className="mx-auto max-w-7xl relative">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="font-jp text-sm text-neon-cyan tracking-[0.5em] mb-2">記憶 · MEMORIES</p>
            <h2 className="font-display text-5xl sm:text-7xl text-paper">
              SCENES <span className="text-neon">FROM US</span>
            </h2>
          </div>
          <p className="text-xs tracking-[0.3em] text-muted-foreground font-mono max-w-xs">
            // a six-episode arc · directed by fate
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {scenes.map((s, i) => (
            <figure
              key={i}
              className="group relative aspect-[4/5] overflow-hidden border border-border/40 bg-card"
            >
              <img
                src={s.src}
                alt={s.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] group-hover:scale-110 group-hover:saturate-150"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-0 scanlines opacity-30" />

              {/* Episode badge */}
              <div className="absolute top-3 left-3 flex items-center gap-2 px-2 py-1 bg-ink/80 border border-primary/60">
                <span className="h-1.5 w-1.5 bg-primary animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-paper">{s.ep}</span>
              </div>

              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-jp text-xs text-neon-cyan tracking-[0.4em] mb-1">{s.jp}</p>
                <h3 className="font-display text-3xl text-paper mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground tracking-wide">{s.caption}</p>
              </figcaption>

              <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

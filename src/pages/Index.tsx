import { useMemo, useRef, useState } from "react";
import heroBg from "@/assets/anime-hero.jpg";
import umbrella from "@/assets/anime-umbrella.jpg";
import { Countdown } from "@/components/Countdown";
import { CakeReveal } from "@/components/CakeReveal";
import { MemoryGallery } from "@/components/MemoryGallery";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Wishes } from "@/components/Wishes";
import { Rain } from "@/components/Rain";

const RECIPIENT = "D";

const Index = () => {
  // Tiny demo countdown so the cake unlocks ~5s after load.
  const targetDate = useMemo(() => {
    const t = new Date();
    t.setSeconds(t.getSeconds() + 5);
    return t;
  }, []);

  const [arrived, setArrived] = useState(false);
  const [wishMade, setWishMade] = useState(false);
  const messageRef = useRef<HTMLDivElement>(null);

  const handleWish = () => {
    setWishMade(true);
    setTimeout(() => messageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 600);
  };

  return (
    <main className="min-h-screen bg-background text-paper overflow-x-hidden">
      <Rain />

      {/* Top status bar — cinema HUD */}
      <header className="fixed top-0 inset-x-0 z-30 glass-dark border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between text-[10px] sm:text-xs tracking-[0.3em] font-mono text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 bg-primary animate-pulse" />
            <span className="text-paper">REC</span>
            <span className="hidden sm:inline">· DENJI × REZE</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <a href="#cake" className="hover:text-primary transition-colors">01 WISH</a>
            <a href="#message" className="hover:text-primary transition-colors">02 LETTER</a>
            <a href="#memories" className="hover:text-primary transition-colors">03 SCENES</a>
            <a href="#ost" className="hover:text-primary transition-colors">04 OST</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-jp text-paper">誕生日</span>
            <span>EP. 01</span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-4 pt-20">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={heroBg}
            alt=""
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          <div className="absolute inset-0 scanlines opacity-40" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 animate-reveal-up" style={{ opacity: 0, animationDelay: "0.1s", animationFillMode: "both" }}>
              <span className="h-px w-12 bg-primary" />
              <p className="font-mono text-xs tracking-[0.4em] text-primary">A BIRTHDAY · ANIME EDIT</p>
            </div>

            <h1
              className="font-display text-7xl sm:text-8xl md:text-9xl leading-[0.85] text-paper animate-reveal-up"
              style={{ opacity: 0, animationDelay: "0.2s", animationFillMode: "both" }}
            >
              HAPPY
              <br />
              <span className="text-neon">BIRTHDAY</span>
              <br />
              <span className="font-jp text-5xl sm:text-6xl md:text-7xl text-paper/80">{RECIPIENT} <span className="text-primary">へ</span></span>
            </h1>

            <p
              className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-reveal-up"
              style={{ opacity: 0, animationDelay: "0.4s", animationFillMode: "both" }}
            >
              A six-episode arc, one rainy night, a soundtrack on loop —
              this one's for you. Press play, blow the candles, and let the credits roll.
            </p>

            <div
              className="pt-4 animate-reveal-up"
              style={{ opacity: 0, animationDelay: "0.6s", animationFillMode: "both" }}
              id="cake"
            >
              {!arrived ? (
                <div className="space-y-4 max-w-lg">
                  <p className="text-[10px] tracking-[0.4em] text-muted-foreground font-mono">
                    /// EPISODE STARTS IN
                  </p>
                  <Countdown targetDate={targetDate} onComplete={() => setArrived(true)} />
                </div>
              ) : (
                <CakeReveal recipient={RECIPIENT} onBlow={handleWish} />
              )}
            </div>
          </div>

          {/* Right column — character poster (hidden on small screens to keep hero clean) */}
          <div className="hidden lg:block lg:col-span-5 animate-reveal-up" style={{ opacity: 0, animationDelay: "0.5s", animationFillMode: "both" }}>
            <div className="relative">
              <div className="absolute -inset-4 border border-primary/40" />
              <div className="absolute -bottom-4 -right-4 h-32 w-32 border border-neon-cyan/60" />
              <div className="relative overflow-hidden border border-border/50 shadow-cinema scanlines">
                <img
                  src={umbrella}
                  alt="Anime characters under umbrella"
                  width={1024}
                  height={1024}
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-jp text-xs text-neon-cyan tracking-[0.4em] mb-1">相合傘 · 共に</p>
                  <p className="font-display text-2xl text-paper">UNDER ONE SKY</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {arrived && (
          <a
            href="#message"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-muted-foreground hover:text-primary transition-colors font-mono animate-pulse"
          >
            SCROLL ↓ NEXT SCENE
          </a>
        )}
      </section>

      {/* MARQUEE divider */}
      <div className="relative border-y border-border/40 bg-noir overflow-hidden py-4">
        <div className="flex animate-marquee whitespace-nowrap font-display text-2xl sm:text-3xl text-paper/60">
          {Array.from({ length: 6 }).map((_, k) => (
            <span key={k} className="px-8 flex items-center gap-8">
              HAPPY BIRTHDAY <span className="text-primary">●</span>
              <span className="font-jp text-neon-cyan">誕生日おめでとう</span>
              <span className="text-primary">●</span>
              FOR {RECIPIENT.toUpperCase()} <span className="text-primary">●</span>
            </span>
          ))}
        </div>
      </div>

      {/* PERSONAL LETTER */}
      <section id="message" ref={messageRef} className="relative py-28 sm:py-36 px-4 bg-noir grain">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="font-jp text-sm text-neon-cyan tracking-[0.5em] mb-2">手紙 · LETTER</p>
              <h2 className="font-display text-5xl sm:text-7xl text-paper">
                A NOTE <span className="text-neon">FOR YOU</span>
              </h2>
            </div>
            <p className="text-xs tracking-[0.3em] text-muted-foreground font-mono">// transcript · 02</p>
          </div>

          <div
            className={`relative glass-dark border border-border/50 p-8 sm:p-14 shadow-cinema transition-all duration-1000 ${
              wishMade ? "opacity-100 translate-y-0 blur-0" : "opacity-70 translate-y-2 blur-[1px]"
            }`}
          >
            <span className="absolute -top-3 left-8 px-3 py-1 bg-primary text-primary-foreground text-[10px] tracking-[0.4em] font-mono">
              ★ TO: {RECIPIENT}
            </span>

            <p className="font-jp text-lg text-neon-cyan mb-6 tracking-wider">親愛なる {RECIPIENT} へ —</p>

            <p className="font-display text-2xl sm:text-3xl text-paper leading-relaxed mb-6">
              Some people walk into your life like a side character.
              You walked in like the title drop.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Every loud day got quieter when you showed up. Every rainy scene felt
              like a montage. You're the kind of person Kenshi Yonezu writes songs about —
              the kind of energy a closing credits track tries to bottle.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
              So this year — go run through the neon streets. Order the second coffee.
              Stay up too late watching one more episode. The world is your opening sequence,
              and I'm just glad I'm in it with you.
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-border/50">
              <span className="font-display text-3xl text-neon">HAPPY BIRTHDAY.</span>
              <span className="font-jp text-xl text-primary text-glow-red">誕生日おめでとう。</span>
            </div>
          </div>
        </div>
      </section>

      <Wishes />
      <MemoryGallery />
      <MusicPlayer />

      {/* CREDITS / FOOTER */}
      <footer className="relative py-16 px-4 bg-ink border-t border-border/50">
        <div className="mx-auto max-w-7xl text-center space-y-4">
          <p className="font-jp text-sm text-neon-cyan tracking-[0.5em]">エンディング</p>
          <p className="font-display text-5xl sm:text-6xl text-paper">END · CREDITS</p>
          <div className="h-px w-24 bg-primary mx-auto" />
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
            DIRECTED & WRITTEN WITH LOVE · FOR {RECIPIENT.toUpperCase()} · {new Date().getFullYear()}
          </p>
          <p className="font-jp text-base text-paper/60">またね · See you next episode</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;

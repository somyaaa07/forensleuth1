"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1600&q=80",
    tag: "Crime Scene Analysis",
    title: "Uncovering Truth Through Science",
    subtitle:
      "Advanced forensic techniques that reveal what the naked eye cannot see.",
    cta: "Explore Services",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1600&q=80",
    tag: "Digital Forensics",
    title: "Evidence Speaks When Others Cannot",
    subtitle:
      "Cutting-edge digital investigation to recover, preserve and analyse critical evidence.",
    cta: "Learn More",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=80",
    tag: "Laboratory Analysis",
    title: "Precision at the Molecular Level",
    subtitle:
      "State-of-the-art laboratory infrastructure delivering accurate and court-admissible results.",
    cta: "Our Labs",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const DURATION = 5000;

  const goTo = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    clearInterval(intervalRef.current);
    clearInterval(progressRef.current);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
      startAutoScroll();
    }, 600);
  };

  const startAutoScroll = () => {
    clearInterval(intervalRef.current);
    clearInterval(progressRef.current);
    setProgress(0);

    let start = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / DURATION) * 100, 100));
    }, 30);

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        return next;
      });
      setProgress(0);
      start = Date.now();
    }, DURATION);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      clearInterval(intervalRef.current);
      clearInterval(progressRef.current);
    };
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[90vh] min-h-[560px] overflow-hidden bg-black font-sans">

      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay with forensic blue tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        </div>
      ))}

      {/* Scanline texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(32,126,255,0.018) 2px, rgba(32,126,255,0.018) 4px)",
        }}
      />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-10 py-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ border: "1px solid rgba(32,126,255,0.6)" }}>
            <div className="w-3 h-3 rounded-full" style={{ background: "#207eff" }} />
          </div>
          <span
            className="text-white tracking-[0.25em] text-sm font-light uppercase"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            ForensIQ
          </span>
        </div>
        <div
          className="hidden md:flex items-center gap-8 text-white/60 text-sm tracking-widest uppercase"
          style={{ fontFamily: "'Courier New', monospace", fontSize: "11px" }}
        >
          {["Services", "Labs", "Case Studies", "Contact"].map((n) => (
            <a
              key={n}
              href="#"
              className="hover:text-[#207eff] transition-colors duration-200"
            >
              {n}
            </a>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-10 md:px-20 max-w-4xl">
        {/* Tag */}
        <div
          key={`tag-${current}`}
          className="inline-flex items-center gap-2 mb-6 animate-fadeSlideUp"
        >
          <span className="w-5 h-px" style={{ background: "#207eff" }} />
          <span
            className="uppercase tracking-[0.3em] text-xs"
            style={{ fontFamily: "'Courier New', monospace", color: "#207eff" }}
          >
            {slide.tag}
          </span>
        </div>

        {/* Title */}
        <h1
          key={`title-${current}`}
          className="text-white mb-5 leading-tight animate-fadeSlideUp"
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            animationDelay: "80ms",
          }}
        >
          {slide.title}
        </h1>

        {/* Subtitle */}
        <p
          key={`sub-${current}`}
          className="text-white/60 mb-10 max-w-lg leading-relaxed animate-fadeSlideUp"
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "1.05rem",
            animationDelay: "160ms",
          }}
        >
          {slide.subtitle}
        </p>

        {/* CTA */}
        <div
          key={`cta-${current}`}
          className="flex items-center gap-5 animate-fadeSlideUp"
          style={{ animationDelay: "240ms" }}
        >
          <button className="relative px-7 py-3 uppercase tracking-widest text-xs hover:bg-[#207eff]/10 transition-all duration-300 group overflow-hidden"
            style={{ fontFamily: "'Courier New', monospace", border: "1px solid rgba(32,126,255,0.7)", color: "#207eff" }}
          >
            <span className="relative z-10">{slide.cta}</span>
            <span className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-500" style={{ background: "#207eff" }} />
          </button>
          <button
            className="text-white/40 text-xs tracking-widest uppercase hover:text-white/70 transition-colors"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            View All →
          </button>
        </div>
      </div>

      {/* Slide counter + dots */}
      <div className="absolute bottom-10 left-10 md:left-20 z-20 flex items-center gap-6">
        {/* Slide number */}
        <span
          className="text-white/30 text-xs tabular-nums"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>

        {/* Progress dots */}
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative h-px overflow-hidden transition-all duration-300"
              style={{ width: i === current ? "40px" : "20px", background: "rgba(255,255,255,0.2)" }}
              aria-label={`Go to slide ${i + 1}`}
            >
              {i === current && (
                <span
                  className="absolute top-0 left-0 h-full transition-none"
                  style={{ width: `${progress}%`, background: "#207eff" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Right side slide thumbnails */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={`relative w-16 h-10 overflow-hidden transition-all duration-300 ${
              i === current
                ? "opacity-100"
                : "opacity-40 hover:opacity-70"
            }`}
            style={i === current ? { outline: "1px solid rgba(32,126,255,0.6)" } : {}}
          >
            <img src={s.image} alt={s.tag} className="w-full h-full object-cover" />
            {i === current && (
              <div className="absolute inset-0" style={{ border: "1px solid rgba(32,126,255,0.4)" }} />
            )}
          </button>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlideUp {
          animation: fadeSlideUp 0.55s ease both;
        }
      `}</style>
    </section>
  );
}
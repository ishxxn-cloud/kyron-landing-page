import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function scrollElementToViewportCenter(el: HTMLElement, durationMs = 1200) {
  if (typeof window === "undefined") return;
  const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  if (prefersReduced) {
    el.scrollIntoView({ behavior: "auto", block: "center" });
    return;
  }

  const startY = window.scrollY;
  const rect = el.getBoundingClientRect();
  const targetY = startY + rect.top - (window.innerHeight - rect.height) / 2;
  const delta = targetY - startY;

  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / durationMs);
    window.scrollTo(0, startY + delta * easeInOutCubic(t));
    if (t < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) scrollElementToViewportCenter(el, 1400);
      }, 100);
      // Clear the query param so it doesn't re-trigger
      window.history.replaceState({}, "", "/");
    }
  }, [location.search]);

  return (
    <main className="bg-black">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
};

export default Index;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        el?.scrollIntoView({ behavior: "smooth" });
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

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <main className="bg-black min-h-screen">
      <Navbar showHomeLogo />
      <section className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[0.9]" style={{ color: "#E1E0CC" }}>
            Projects
          </h1>
          <p className="mt-6 text-sm md:text-base max-w-xl" style={{ color: "rgba(225, 224, 204, 0.6)" }}>
            A curated selection of work across branding, web design, and digital experiences.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Projects;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Subscription = () => (
  <main className="bg-black min-h-screen">
    <Navbar showHomeLogo />
    <section className="pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[0.9]" style={{ color: "#E1E0CC" }}>
          Subscription
        </h1>
        <p className="mt-6 text-sm md:text-base max-w-xl" style={{ color: "rgba(225, 224, 204, 0.6)" }}>
          Flexible design plans tailored to your needs. Get consistent, high-quality design on demand.
        </p>
      </div>
    </section>
    <Footer />
  </main>
);

export default Subscription;

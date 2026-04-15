import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  showHomeLogo?: boolean;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function scrollElementToViewportCenter(el: HTMLElement, durationMs = 1100) {
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

const navItems = [
  { label: "About Me", path: "/#about" },
  { label: "Projects", path: "/projects" },
  { label: "Subsciption", path: "/subscription" },
  { label: "Hire Me", path: "/hire-me" },
];

const Navbar = ({ showHomeLogo = false }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const linkClassName = "text-[11px] sm:text-sm md:text-base whitespace-nowrap transition-colors";

  const handleNavClick = (e: React.MouseEvent, item: { label: string; path: string }) => {
    e.preventDefault();
    if (item.path === "/#about") {
      if (location.pathname === "/") {
        const el = document.getElementById("about");
        if (el) scrollElementToViewportCenter(el, 1200);
      } else {
        navigate("/?scrollTo=about");
      }
    } else {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50">
      <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
        <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
          {showHomeLogo && (
            <li>
              <a
                href="/"
                onClick={handleLogoClick}
                className={`${linkClassName} font-medium tracking-tight transition-opacity hover:opacity-80`}
                style={{ color: "#E1E0CC" }}
              >
                Kyron
              </a>
            </li>
          )}
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.path}
                onClick={(e) => handleNavClick(e, item)}
                className={linkClassName}
                style={{ color: "rgba(225, 224, 204, 0.8)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)")}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

import { ArrowRight } from "lucide-react";

const footerLinks = [
  { heading: "Navigate", items: ["Our story", "Projects", "Subscription", "Hire Me"] },
  { heading: "Social", items: ["Instagram", "Dribbble", "Behance", "LinkedIn"] },
  { heading: "Contact", items: ["hello@kyron.studio", "General inquiries"] },
];

const Footer = () => (
  <footer className="bg-black px-4 md:px-8 pt-20 md:pt-32 pb-8">
    <div className="max-w-7xl mx-auto">
      {/* Top CTA */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16 md:mb-24">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.9] tracking-tight"
          style={{ color: "#E1E0CC" }}
        >
          Let's create<br />something together.
        </h2>
        <a
          href="#"
          className="group inline-flex items-center gap-1 hover:gap-3 bg-primary rounded-full pl-5 pr-2 py-1 transition-all w-fit shrink-0"
        >
          <span className="text-primary-foreground font-medium text-sm sm:text-base pr-1">Get in touch</span>
          <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
            <ArrowRight className="w-4 h-4" style={{ color: "#E1E0CC" }} />
          </span>
        </a>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-border mb-12" />

      {/* Links grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
        {footerLinks.map((group) => (
          <div key={group.heading}>
            <h3 className="text-muted-foreground text-xs uppercase tracking-widest mb-4">{group.heading}</h3>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm transition-colors"
                    style={{ color: "rgba(225, 224, 204, 0.7)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225, 224, 204, 0.7)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-xs">
        <span>© {new Date().getFullYear()} Kyron. All rights reserved.</span>
        <span style={{ color: "#E1E0CC" }} className="text-lg font-medium tracking-tight">Kyron</span>
      </div>
    </div>
  </footer>
);

export default Footer;

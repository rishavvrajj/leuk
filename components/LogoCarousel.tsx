import StackIcon from "tech-stack-icons";

const LOGOS = [
  "react",
  "typescript",
  "nextjs",
  "tailwindcss",
  "nodejs",
  "postgresql",
  "graphql",
  "docker",
  "kubernetes",
  "rust",
  "go",
  "python",
] as const;

function LogoItem({ name }: { name: (typeof LOGOS)[number] }) {
  return (
    <span className="group/logo flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 hover:scale-105">
      <StackIcon
        name={name}
        className="h-4 w-4 transition-transform duration-200 group-hover/logo:scale-110"
      />
      {name}
    </span>
  );
}

export default function LogoCarousel() {
  return (
    <section className="w-full py-2 bg-zinc-300">
      <div className="relative overflow-hidden">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 md:w-28 bg-gradient-to-r from-zinc-300 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 md:w-28 bg-gradient-to-l from-zinc-300 to-transparent" />

        <div className="marquee-track flex w-max items-center gap-8 py-2 hover:cursor-pointer">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <LogoItem key={`${logo}-${i}`} name={logo} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes logo-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: logo-marquee 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
import HeroSection from "@/components/HeroSection";
import SearchBox from "@/components/SearchBox";
import UserCard from "@/components/UserCard";

const BELIEFS = [
  {
    title: "Craft deserves a stage.",
    body: "The internet should reward the thing made well, not just the thing made loudest.",
  },
  {
    title: "A portfolio should breathe.",
    body: "Your work changes daily. A PDF written once can't keep up.",
  },
  {
    title: "Your work belongs to you.",
    body: "No setup marathons. No maintenance tax. No gatekeepers.",
  },
  {
    title: "Simplicity is respect.",
    body: "The work is complex enough. The frame around it shouldn't be.",
  },
  {
    title: "First impressions should be earned by the work —",
    body: "not by the wording.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-black4">

      {/* Hero */}
      <HeroSection />

      {/* UserCard */}
      <UserCard />

      {/* ─── Manifesto ─── */}
      <section
        id="manifesto"
        className="mx-auto w-full max-w-3xl px-6 py-24 sm:py-32"
      >
        <div className="space-y-24">
          {/* Block 1 */}
          <div>
            <h2 className="text-sm font-medium tracking-[0.2em] text-emerald-500 uppercase">
              Work is the only honest witness
            </h2>
            <p className="mt-6 text-3xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-4xl">
              A resume tells people who you{" "}
              <span className="italic text-zinc-500">want to be.</span>
              <br />
              Your work tells them who you{" "}
              <span className="italic text-emerald-400">already are.</span>
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              You can&apos;t fake a commit history. It records your curiosity,
              your discipline, your taste — what you chose to build when nobody
              was asking. That record deserves more than a bullet point.
            </p>
          </div>

          <hr className="border-zinc-800/60" />

          {/* Block 2 */}
          <div>
            <h2 className="text-sm font-medium tracking-[0.2em] text-emerald-500 uppercase">
              Attention fades. Evidence stays.
            </h2>
            <p className="mt-6 text-3xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-4xl">
              The internet rewards the loud for a day
              <br />
              — and forgets them by{" "}
              <span className="italic text-zinc-500">morning.</span>
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              But a body of work compounds. Every quiet thing you ship becomes
              part of a larger argument:{" "}
              <em className="text-zinc-200">I am serious about this.</em> Leuk
              exists so that argument can finally be read.
            </p>
          </div>

          <hr className="border-zinc-800/60" />

          {/* Block 3 */}
          <div>
            <h2 className="text-sm font-medium tracking-[0.2em] text-emerald-500 uppercase">
              You are not finished.
            </h2>
            <p className="mt-6 text-3xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-4xl">
              Your profile shouldn&apos;t{" "}
              <span className="italic text-zinc-500">pretend otherwise.</span>
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Job titles freeze people into nouns. But developers are verbs —
              learning, rebuilding, pivoting, becoming. Your presence should move
              the way you do. Alive. Unfinished. Honest.
            </p>
          </div>
        </div>
      </section>

      {/* ─── What We Believe ─── */}
      <section id="beliefs" className="border-y border-zinc-800/60">
        <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
          <h2 className="text-center text-sm font-medium tracking-[0.2em] text-zinc-500 uppercase">
            What we believe
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-800/60 sm:grid-cols-2 lg:grid-cols-3">
            {BELIEFS.map((b) => (
              <div
                key={b.title}
                className="flex flex-col gap-2 bg-zinc-900 p-8"
              >
                <h3 className="text-lg font-semibold text-zinc-100">
                  {b.title}{" "}
                  <span className="font-normal text-zinc-500">{b.body}</span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quietly Powerful ─── */}
      <section id="" className="mx-auto w-full max-w-3xl px-6 py-24 sm:py-32">
        <h2 className="text-sm font-medium tracking-[0.2em] text-emerald-500 uppercase">
          Quietly powerful
        </h2>
        <p className="mt-6 text-3xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-4xl">
          Leuk reads the public work you&apos;ve already made and arranges it
          into a living profile.
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          No database. No dashboards to feed. No profile to babysit.
        </p>
        <p className="mt-4 max-w-2xl text-lg font-medium text-zinc-200">
          You made the work. That was the hard part.
        </p>

        <div className="mt-12 w-full max-w-xl">
          <SearchBox />
        </div>

        <p className="mt-3 text-sm text-zinc-600">
          Find your GitHub story.
        </p>
      </section>

      {/* ─── Closing ─── */}
      <section className="relative overflow-hidden border-t border-zinc-800/60">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/[0.03] blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
          <p className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
            Make things.
            <br />
            Leave traces.
            <br />
            Let them{" "}
            <span className="italic text-emerald-400">travel.</span>
          </p>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            Consistency, shared openly, compounds into reputation. Leuk is just
            the door you leave open — so the world can watch it happen.
          </p>

          <div className="mt-12">
            <a
              href="/create"
              className="inline-block rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 active:scale-[0.98]"
            >
              Create your presence
            </a>
          </div>

          <p className="mt-6 text-sm italic text-zinc-600">
            &ldquo;Your commits are already written. This takes 10
            seconds.&rdquo;
          </p>
        </div>
      </section>

      {/* ─── Community Prompt ─── */}
      <section className="border-t border-zinc-800/60">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-xl font-medium text-zinc-300 italic">
            &ldquo;What did you build this week that nobody clapped
            for?&rdquo;
          </p>
          <p className="mt-4 text-base text-zinc-500">
            Post your repo. We&apos;ll read it. That&apos;s the whole point.
          </p>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-zinc-800/60 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Leuk
          </p>
          <div className="flex gap-6 text-sm text-zinc-600">
            <a href="#manifesto" className="transition hover:text-zinc-300">
              Manifesto
            </a>
            <a href="#beliefs" className="transition hover:text-zinc-300">
              Beliefs
            </a>
            <a href="/create" className="transition hover:text-zinc-300">
              Get started
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

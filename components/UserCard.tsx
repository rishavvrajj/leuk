import React from "react";

const users = [
  {
    name: "Aarav Kumar",
    role: "Frontend Developer",
    initials: "AK",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Bhumika Singh",
    role: "Product Designer",
    initials: "BS",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Chirag Verma",
    role: "Backend Developer",
    initials: "CV",
    color: "from-amber-400 to-orange-500",
  },
];

export default function UserCard() {
  return (
    <section id="UserCard" className="min-h-full w-full">
      <div className="mx-4 grid grid-cols-1 justify-between gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <article
            key={user.name}
            className="bg-zinc-100 p-6 transition hover:-translate-y-1 hover:cursor-pointer"
          >
            <div
              className={`mb-5 flex size-14 items-center justify-center rounded-full bg-gradient-to-br ${user.color} text-lg font-bold text-white`}
            >
              {user.initials}
            </div>

            <h2 className="text-xl font-semibold text-black">{user.name}</h2>
            <p className="mt-1 text-sm text-black">{user.role}</p>

            <button className="mt-6 w-full rounded-lg bg-amber-400 px-4 py-2.5 font-medium text-slate-950 transition hover:bg-amber-300">
              View profile
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
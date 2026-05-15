import { BriefcaseBusiness, Building2, CalendarDays } from "lucide-react";

import { organizationExperience } from "@/data";
import { cn } from "@/lib/utils";

const accentStyles: Record<
  string,
  {
    dot: string;
    glow: string;
    card: string;
  }
> = {
  blue: {
    dot: "border-[#6f7cff] bg-[#10144b]",
    glow: "shadow-[#6f7cff]/40",
    card: "from-[#14182f] to-[#101326]",
  },
  purple: {
    dot: "border-fuchsia-400 bg-[#2b073f]",
    glow: "shadow-fuchsia-400/40",
    card: "from-[#14182f] to-[#241034]",
  },
  cyan: {
    dot: "border-cyan-400 bg-[#052c3c]",
    glow: "shadow-cyan-400/40",
    card: "from-[#14182f] to-[#241034]",
  },
};

const OrganizationExperience = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#0b0935_0%,#020411_42%,#160021_100%)]" />
      <div className="absolute inset-0 -z-10 bg-grid-small-white/[0.02]" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="flex flex-col justify-between gap-12">
          <div>
            <h2 className="max-w-sm text-4xl font-bold leading-tight text-white md:text-5xl">
              Organization Experience
            </h2>
            <p className="mt-10 max-w-xl text-lg leading-8 text-white-200">
              Experienced in campus organization through a Public Relations role in Software Engineering Technology and contributed collaborative leadership between divisions.
            </p>
          </div>

          {/* <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-purple/20 text-purple">
                <Building2 className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Open for Collaboration
                </h3>
                <p className="mt-1 text-base text-white-200">
                  Available for organization projects, campus systems, and
                  community tech initiatives.
                </p>
              </div>
            </div>
          </div> */}
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-purple/50 via-white/20 to-cyan-400/50 md:block" />

          <div className="space-y-10">
            {organizationExperience.map((item) => {
              const accent = accentStyles[item.accent] ?? accentStyles.blue;

              return (
                <article
                  key={item.id}
                  className="relative grid gap-6 md:grid-cols-[2.75rem_1fr]"
                >
                  <div className="hidden md:flex md:justify-center">
                    <span
                      className={cn(
                        "mt-14 h-5 w-5 rounded-full border-2 shadow-[0_0_24px]",
                        accent.dot,
                        accent.glow
                      )}
                    />
                  </div>

                  <div
                    className={cn(
                      "rounded-[1.75rem] border border-white/10 bg-gradient-to-br p-6 shadow-2xl shadow-black/20 md:p-8",
                      accent.card
                    )}
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {item.organization}
                        </h3>
                        <p className="mt-1 text-base font-medium text-[#8792ff]">
                          {item.role}
                        </p>
                      </div>

                      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white-200">
                        <CalendarDays className="h-4 w-4" />
                        {item.period}
                      </div>
                    </div>

                    <p className="mt-7 text-base leading-7 text-white-200">
                      {item.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-2 rounded-md bg-white/[0.06] px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white-200"
                        >
                          <BriefcaseBusiness className="h-3.5 w-3.5" />
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationExperience;

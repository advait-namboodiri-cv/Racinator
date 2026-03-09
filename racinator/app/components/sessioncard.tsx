import Link from "next/link";
import { Session } from "../types/session";

type SessionCardProps = {
  session: Session;
};

function formatDate(dateString: string) {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default function SessionCard({ session }: SessionCardProps) {
    return (
      <Link
        href={`/sessions/${session.session_key}`}
        className="group block rounded-2xl border border-neutral-800 bg-neutral-900/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-neutral-900 hover:shadow-[0_0_30px_rgba(239,68,68,0.12)]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              {session.country_name}
            </p>
  
            <h3 className="mt-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-red-400">
              {session.session_name}
            </h3>
            <p className="mt-2 text-sm text-neutral-400">{session.location}</p>
        </div>

        <div className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">
          #{session.session_key}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-neutral-500">{formatDate(session.date_start)}</p>

        <span className="text-sm font-medium text-red-400 transition-transform duration-300 group-hover:translate-x-1">
          View session →
        </span>
          </div>
      </Link>
    );
  }

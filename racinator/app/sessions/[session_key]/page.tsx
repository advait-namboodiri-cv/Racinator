import { getSessionByKey } from "../../lib/openf1";
type SessionDetailsPageProps = {
    params: Promise<{
      session_key: string;
    }>;
  };
  
  function formatDate(dateString: string) {
    const date = new Date(dateString);
  
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  }

  export default async function SessionDetailsPage({ params }: SessionDetailsPageProps) {
    const { session_key } = await params;
    const session = await getSessionByKey(session_key);
    if(!session){
    return (
      <main className="min-h-screen bg-neutral-950 px-6 py-10 text-white">
        <section className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Session Details
          </p>  
          <h1 className="mt-3 text-4xl font-bold text-red-500">
              Session not found
          </h1>
          <h1 className="mt-3 text-4xl font-bold text-red-500">
          We could not find data for session key {session_key}.
          </h1>
        </section>
    </main>
  );
}

return (
  <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white">
    <section className="mx-auto max-w-5xl">
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-8 shadow-[0_0_40px_rgba(239,68,68,0.08)]">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          Session Details
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-red-500">
          {session.country_name} — {session.session_name}
        </h1>

        <p className="mt-4 max-w-2xl text-neutral-300">
          Real session data pulled from OpenF1 for your selected Formula 1 session
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5">
            <p className="text-sm text-neutral-500">Session Type</p>
            <p className="mt-2 text-lg font-semibold text-white">
              {session.session_type ?? "Unknown"}
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5">
            <p className="text-sm text-neutral-500">Location</p>
            <p className="mt-2 text-lg font-semibold text-white">
              {session.location}
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5">
            <p className="text-sm text-neutral-500">Date</p>
            <p className="mt-2 text-lg font-semibold text-white">
              {formatDate(session.date_start)}
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5">
            <p className="text-sm text-neutral-500">Session Key</p>
            <p className="mt-2 text-lg font-semibold text-white">
              {session.session_key}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
);
}
import { getSessions } from "./lib/openf1";
export default async function HomePage() 
{
  const sessions = await getSessions();
  const previewSessions = sessions.slice(0, 5);
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-6 py-10">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold tracking-tight text-red-500">
          F1 Telemetry Dashboard
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-300 text-lg">
          An interactive Formula 1 analytics platform for exploring tracks,
          and race strategy.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
         <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <h2 className="text-xl font-semibold">Tracks</h2>
          <p className="mt-2 text-sm text-neutral-400">
            Explore circuit maps, and GPS traces.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <h2 className="text-xl font-semibold">Sessions</h2>
          <p className="mt-2 text-sm text-neutral-400">
            Analyze lap sectors, and stint performance.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <h2 className="text-xl font-semibold">Drivers</h2>
          <p className="mt-2 text-sm text-neutral-400">
            Compare pace, telemetry, and race trends.
          </p>
         </div> 
         <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <h2 className="text-xl font-semibold">Simulator</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Test strategy ideas using weather, and pit-stop assumptions.
            </p>
          </div>
        </div>   
        <section className="mt-12">
          <h2 className="text-2xl">2025 Session Preview</h2>

          <div className="mt-5 space-y-4">
            {previewSessions.map((session: any) => (
              <div
                key={session.session_key}
                className="rounded-xl border border-neutral-800 bg-neutral-900 p-4"
              >
                <p className="font-medium text-white">
                  {session.country_name} — {session.session_name}
                </p>
                <p className="mt-1 text-sm text-neutral-400">
                  {session.location}, {session.date_start}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
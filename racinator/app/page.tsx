import { getSessions } from "./lib/openf1";
import SessionCard from "./components/sessioncard";
import { Session } from "./types/session";
export default async function HomePage() 
{
  const sessions : Session[] = await getSessions("2025");
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
          View circuit maps and lap traces!
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <h2 className="text-xl font-semibold">Sessions</h2>
          <p className="mt-2 text-sm text-neutral-400">
          See lap times, sectors, weather, and tire data.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <h2 className="text-xl font-semibold">Drivers</h2>
          <p className="mt-2 text-sm text-neutral-400">
          Compare pace, driving style, and race performance.
          </p>
         </div> 
         <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <h2 className="text-xl font-semibold">Simulator</h2>
            <p className="mt-2 text-sm text-neutral-400">
            Test strategy ideas with pit and weather changes.
            </p>
          </div>
        </div>   
        <section className="mt-14">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-white">2025 Session Preview</h2>
            <p className="text-sm text-neutral-500">Click a session to explore details</p>
          </div>

          <div className="mt-6 grid gap-5">
            {previewSessions.map((session) => (
              <SessionCard key={session.session_key} session={session} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
type SessionDetailsPageProps = {
    params: Promise<{
      session_key: string;
    }>;
  };
  
  export default async function SessionDetailsPage({ params }: SessionDetailsPageProps) {
    const { session_key } = await params;
    return (
      <main className="min-h-screen bg-neutral-950 px-6 py-10 text-white">
        <section className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Session Details
          </p>  
  
          <h1 className="mt-3 text-4xl font-bold text-red-500">
            Session {session_key}
          </h1>
  
          <p className="mt-4 max-w-2xl text-lg text-neutral-300">
            This page will show telemetry, weather, drivers, and lap analysis for the selected
            session.
          </p>
  
          <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="text-xl font-semibold text-white">Selected Session Key</h2>
            <p className="mt-3 text-neutral-400">{session_key}</p>
          </div>
        </section>
    </main>
  );
}
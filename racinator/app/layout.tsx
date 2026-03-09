import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "F1 Telemetry Dashboard",
  description: "Interactive Formula 1 analytics dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white">
        <header className="border-b border-neutral-800">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold text-red-500">
              F1 Dashboard
            </Link>

            <div className="flex gap-5 text-sm text-neutral-300">
              <Link href="/tracks">Tracks</Link>
              <Link href="/sessions">Sessions</Link>
              <Link href="/drivers">Drivers</Link>
              <Link href="/simulator">Simulator</Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
import { Session } from "../types/session";
export async function getSessions(year: string): Promise<Session[]> {
    const res = await fetch(`https://api.openf1.org/v1/sessions?year=${year}`, {
      cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch sessions");
    }
    return res.json();
}  

export async function getSessionByKey(sessionKey: string): Promise<Session | null> {
    const res = await fetch(
      `https://api.openf1.org/v1/sessions?session_key=${sessionKey}`,
      { cache: "no-store" }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch session details");
    }
  
    const data: Session[] = await res.json();
    return data[0] ?? null;
  }
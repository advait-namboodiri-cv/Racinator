export async function getSessions(year: string) {
    const res = await fetch(`https://api.openf1.org/v1/sessions?year=${year}`, {
      cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch sessions");
    }
    return res.json();
}  
export async function getSessions() {
    const res = await fetch("https://api.openf1.org/v1/sessions?year=2025", {
      cache: "no-store",
    });
    return res.json();
}  
const API_BASE = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;

export async function getLookups() {
  if (!API_BASE || !API_KEY) throw new Error('API_BASE_URL or API_KEY is missing');

  const res = await fetch(`${API_BASE}/api/RegProjects/ReqLists`, {
    next: { revalidate: 60 * 60 },
    headers: { Accept: 'application/json', 'X-API-KEY': API_KEY }
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

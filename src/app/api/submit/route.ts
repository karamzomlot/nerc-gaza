import { NextResponse } from 'next/server';

const API_BASE = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;

export async function POST(req: Request) {
  if (!API_BASE || !API_KEY) {
    return new NextResponse('API_BASE_URL or API_KEY is missing', { status: 500 });
  }

  const payload = await req.json();

  const res = await fetch(`${API_BASE}/api/RegProjects`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-API-KEY': API_KEY
    },
    body: JSON.stringify(payload)
  });

  const text = await res.text();
  if (!res.ok) return new NextResponse(text, { status: res.status });

  // لو رجع JSON
  try {
    return NextResponse.json(JSON.parse(text));
  } catch {
    // لو رجع نص
    return new NextResponse(text, { status: 200 });
  }
}

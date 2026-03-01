/**
 * In-memory store for portfolio stats (views, love count).
 * Counts persist until the server restarts. For production persistence across
 * deploys/cold starts, use Vercel KV (set KV_REST_API_URL and KV_REST_API_TOKEN).
 */

const VIEWS_KEY = "portfolio_views";
const LOVE_KEY = "portfolio_love";

// In-memory fallback when KV is not configured (starting values for display)
const memory: Record<string, number> = {
  [VIEWS_KEY]: 12473,
  [LOVE_KEY]: 1476,
};

async function getFromKv(key: string): Promise<number | null> {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  try {
    const res = await fetch(`${url}/get/${key}`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 0 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { result?: string };
    const val = data.result;
    return val === null || val === undefined ? 0 : parseInt(String(val), 10) || 0;
  } catch {
    return null;
  }
}

async function incrInKv(key: string): Promise<number | null> {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  try {
    const res = await fetch(`${url}/incr/${key}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 0 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { result?: number };
    return typeof data.result === "number" ? data.result : null;
  } catch {
    return null;
  }
}

export async function getViews(): Promise<number> {
  const fromKv = await getFromKv(VIEWS_KEY);
  if (fromKv !== null) return fromKv;
  return memory[VIEWS_KEY] ?? 0;
}

export async function getLoveCount(): Promise<number> {
  const fromKv = await getFromKv(LOVE_KEY);
  if (fromKv !== null) return fromKv;
  return memory[LOVE_KEY] ?? 0;
}

export async function incrementViews(): Promise<number> {
  const fromKv = await incrInKv(VIEWS_KEY);
  if (fromKv !== null) return fromKv;
  memory[VIEWS_KEY] = (memory[VIEWS_KEY] ?? 0) + 1;
  return memory[VIEWS_KEY];
}

export async function incrementLove(): Promise<number> {
  const fromKv = await incrInKv(LOVE_KEY);
  if (fromKv !== null) return fromKv;
  memory[LOVE_KEY] = (memory[LOVE_KEY] ?? 0) + 1;
  return memory[LOVE_KEY];
}

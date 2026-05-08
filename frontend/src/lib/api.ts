export const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function fetchJson<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const res = await fetch(input, init);
  const text = await res.text();
  try {
    const data = text ? JSON.parse(text) : null;
    if (!res.ok) throw new Error(data?.message || res.statusText || 'Request failed');
    return data as T;
  } catch (err) {
    if (res.ok) return (null as unknown) as T;
    throw err;
  }
}

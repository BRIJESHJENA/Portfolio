import type { PortfolioBundle } from "./types";

const CACHE_KEY = "portfolio-bundle-v1";
const CACHE_TTL_MS = 10 * 60 * 1000;

type CacheEntry = {
  savedAt: number;
  data: PortfolioBundle;
};

let memoryCache: PortfolioBundle | null = null;
let inflight: Promise<PortfolioBundle> | null = null;

export function readPortfolioCache(): PortfolioBundle | null {
  if (memoryCache) return memoryCache;

  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;

    const entry = JSON.parse(raw) as CacheEntry;
    if (Date.now() - entry.savedAt > CACHE_TTL_MS) {
      sessionStorage.removeItem(CACHE_KEY);
      return null;
    }

    memoryCache = entry.data;
    return entry.data;
  } catch {
    return null;
  }
}

export function writePortfolioCache(data: PortfolioBundle): void {
  memoryCache = data;
  try {
    const entry: CacheEntry = { savedAt: Date.now(), data };
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    // Private mode / quota — memory cache still helps this session.
  }
}

export function loadPortfolioDeduped(
  fetcher: () => Promise<PortfolioBundle>
): Promise<PortfolioBundle> {
  if (inflight) return inflight;

  inflight = fetcher()
    .then((data) => {
      writePortfolioCache(data);
      return data;
    })
    .finally(() => {
      inflight = null;
    });

  return inflight;
}

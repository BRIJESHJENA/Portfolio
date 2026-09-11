import { useEffect, useState } from "react";

export type AsyncStatus = "idle" | "loading" | "success" | "error";

export interface AsyncResource<T> {
  data: T;
  status: AsyncStatus;
  error: string | null;
  /** True only before any data (including cache/fallback) is shown. */
  isLoading: boolean;
  /** True while a background refresh is in flight after initial render. */
  isRefreshing: boolean;
  isError: boolean;
  reload: () => void;
}

/**
 * Loads a resource once on mount (or when `enabled` flips on).
 * Keeps `fallback` visible until the first successful fetch.
 */
export function useAsyncResource<T>(
  loader: () => Promise<T>,
  fallback: T,
  enabled = true,
  initialData?: T | null
): AsyncResource<T> {
  const [data, setData] = useState<T>(initialData ?? fallback);
  const [status, setStatus] = useState<AsyncStatus>(!enabled ? "idle" : "loading");
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let cancelled = false;
    setStatus("loading");
    setError(null);

    loader()
      .then((result) => {
        if (cancelled) return;
        setData(result);
        setStatus("success");
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Failed to load");
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reload via tick; loader/fallback are stable API fns
  }, [enabled, tick]);

  return {
    data,
    status,
    error,
    // Fallback/cache data is shown immediately — never block the UI on fetch.
    isLoading: false,
    isRefreshing: status === "loading",
    isError: status === "error",
    reload: () => setTick((n) => n + 1),
  };
}

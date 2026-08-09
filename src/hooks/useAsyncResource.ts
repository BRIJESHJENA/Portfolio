import { useEffect, useState } from "react";

export type AsyncStatus = "idle" | "loading" | "success" | "error";

export interface AsyncResource<T> {
  data: T;
  status: AsyncStatus;
  error: string | null;
  isLoading: boolean;
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
  enabled = true
): AsyncResource<T> {
  const [data, setData] = useState<T>(fallback);
  const [status, setStatus] = useState<AsyncStatus>(enabled ? "loading" : "idle");
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
    isLoading: status === "loading",
    isError: status === "error",
    reload: () => setTick((n) => n + 1),
  };
}

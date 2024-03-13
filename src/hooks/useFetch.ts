import { useCallback, useEffect, useMemo, useState } from "react";

interface FetchResult {
  url: string;
  options?: RequestInit;
}

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
};

export function useFetch<T>({ url, options }: FetchResult) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(() => true);
  const [error, setError] = useState<unknown>();

  const memoizedOptions = useMemo(() => {
    return { ...DEFAULT_OPTIONS, ...options };
  }, [options]);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setData(undefined);

    fetch(url, { ...DEFAULT_OPTIONS, ...options })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data from ${url}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, memoizedOptions]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
}

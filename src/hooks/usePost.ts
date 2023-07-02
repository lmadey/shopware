import { useCallback, useReducer, useRef } from "react";

interface State<T> {
  data?: T;
  error?: Error;
}

type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

export const usePost = <T>(): [
  State<T>,
  (url: string, body?: object) => void
] => {
  const apiKey = import.meta.env.VITE_ACCESS_KEY;

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState };
      case "fetched":
        return { ...initialState, data: action.payload };
      case "error":
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const cancelRequest = useRef<boolean>(false);

  const fetchData = useCallback(async (url: string, body?: object) => {
    dispatch({ type: "loading" });

    cancelRequest.current = false;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "sw-access-key": apiKey,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = (await response.json()) as T;
      if (cancelRequest.current) return;

      dispatch({ type: "fetched", payload: data });
    } catch (error) {
      if (cancelRequest.current) return;

      dispatch({ type: "error", payload: error as Error });
    }
  }, []);

  return [state, fetchData];
};

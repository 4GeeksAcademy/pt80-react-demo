import { useSyncExternalStore, useRef } from "react";

const useBrowserStorage = (key, initialValue = null) => {
  const cache = useRef(initialValue);

  const subscribe = (listener = () => null) => {
    const handleStorageChange = (ev) => {
      if (ev.key === key) {
        listener();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  };

  const getSnapshot = () => {
    const item = JSON.parse(localStorage.getItem(key));
    const value = item ? item : initialValue;

    if (item !== cache.current) {
      cache.current = value;
    }

    return initialValue;
  };

  const setValue = (value) => {
    cache.current = value;

    localStorage.setItem(key, JSON.stringify(cache.current));
    window.dispatchEvent(
      new StorageEvent("storage", {
        key,
        newValue: JSON.stringify(cache.current),
      })
    );
  };

  const value = useSyncExternalStore(subscribe, getSnapshot);

  const browserStorage = [value, setValue];

  return browserStorage;
};

export default useBrowserStorage;

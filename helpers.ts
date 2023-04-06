export const setLocalStorage = (key: string, value: [] | undefined) => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    localStorage.setItem(key, JSON.stringify(value));
  }
};

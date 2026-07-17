const STORAGE_KEY = "bundle-builder";

export const saveState = (state) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const loadState = () => {
  const storedState = localStorage.getItem(STORAGE_KEY);

  try {
    return storedState ? JSON.parse(storedState) : null;
  } catch (error) {
    console.error("Failed to load state:", error);
    return null;
  }
};

export const clearState = () => {
  localStorage.removeItem(STORAGE_KEY);
};

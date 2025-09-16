// Helper functions to manage sidebar state in localStorage

const SIDEBAR_STORAGE_KEY = "pure-ui-sidebar-expanded-sections";

export const getSavedExpandedState = (): Record<string, boolean> => {
  if (typeof window === "undefined") return {};

  try {
    const saved = localStorage.getItem(SIDEBAR_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
};

export const saveExpandedState = (sectionId: string, isExpanded: boolean) => {
  if (typeof window === "undefined") return;

  try {
    const current = getSavedExpandedState();
    const updated = { ...current, [sectionId]: isExpanded };
    localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // Ignore localStorage errors
  }
};

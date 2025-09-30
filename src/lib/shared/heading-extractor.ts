import { Effect } from "effect";

type HeadingLevel = 2 | 3;

export interface Heading {
  level: HeadingLevel;
  text: string;
  id: string | null;
  slug: string;
}

export class HeadingExtractionError extends Error {
  readonly _tag = "HeadingExtractionError" as const;
  constructor(message: string, public readonly cause?: unknown) {
    super(message);
  }
}

/**
 * Configuration options for active heading detection
 */
export interface ActiveHeadingOptions {
  /** Offset from top of viewport to consider a heading active (default: 100px) */
  topOffset: number;
  /** Throttle delay for scroll events (default: 16ms for 60fps) */
  throttleMs: number;
  /** Additional margin for intersection observer (default: "-20% 0px -70% 0px") */
  rootMargin: string;
}

/**
 * Creates a hybrid active heading tracker that combines intersection observer
 * with scroll position for accurate ToC highlighting.
 *
 * Logic:
 * 1. Uses intersection observer to detect when headings enter/leave viewport
 * 2. On scroll, finds the topmost heading that's above current scroll position
 * 3. This ensures the "active" heading represents what the user is currently reading
 */
export const createActiveHeadingTracker = (
  headings: Heading[],
  onActiveChange: (activeId: string | null) => void,
  options: Partial<ActiveHeadingOptions> = {}
): Effect.Effect<() => void, HeadingExtractionError> =>
  Effect.try({
    try: () => {
      const config: ActiveHeadingOptions = {
        topOffset: 100,
        throttleMs: 16,
        rootMargin: "-20% 0px -70% 0px",
        ...options,
      };

      // Get all heading elements with their positions
      const headingData = headings
        .map((heading) => {
          const element = document.getElementById(heading.id || heading.slug);
          if (!element) return null;

          return {
            id: heading.id || heading.slug,
            element,
            heading,
          };
        })
        .filter((item): item is NonNullable<typeof item> => item !== null)
        .sort((a, b) => {
          // Sort by document order (top to bottom)
          const position = a.element.compareDocumentPosition(b.element);
          return position & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        });

      if (headingData.length === 0) {
        throw new Error("No heading elements found in DOM");
      }

      let currentActiveId: string | null = null;
      let throttleTimer: NodeJS.Timeout | null = null;
      const visibleHeadings = new Set<string>();

      /**
       * Determines the active heading based on scroll position
       * The active heading is the last heading that's above the current scroll position
       * Special handling for the last heading when near bottom of page
       */
      const updateActiveHeading = () => {
        const scrollTop = window.scrollY + config.topOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Check if we're near the bottom of the page (within 100px)
        const isNearBottom =
          windowHeight + window.scrollY >= documentHeight - 100;

        let newActiveId: string | null = null;

        // Find the last heading that's above the scroll position
        for (const { id, element } of headingData) {
          const headingTop = element.offsetTop;

          if (headingTop <= scrollTop) {
            newActiveId = id;
          } else {
            // Since headings are sorted by document order, we can break here
            break;
          }
        }

        // Special case: if we're near bottom and no heading was selected,
        // or if we're near bottom, activate the last visible heading
        if (isNearBottom && visibleHeadings.size > 0) {
          // Find the last heading in document order that's visible
          for (let i = headingData.length - 1; i >= 0; i--) {
            const { id } = headingData[i];
            if (visibleHeadings.has(id)) {
              newActiveId = id;
              break;
            }
          }
        }

        // If still no heading is selected, use the first visible heading
        if (!newActiveId && visibleHeadings.size > 0) {
          // Find the first heading in document order that's visible
          for (const { id } of headingData) {
            if (visibleHeadings.has(id)) {
              newActiveId = id;
              break;
            }
          }
        }

        if (newActiveId !== currentActiveId) {
          currentActiveId = newActiveId;
          onActiveChange(newActiveId);
        }
      };

      /**
       * Throttled version of updateActiveHeading for scroll events
       */
      const throttledUpdate = () => {
        if (throttleTimer) return;

        throttleTimer = setTimeout(() => {
          updateActiveHeading();
          throttleTimer = null;
        }, config.throttleMs);
      };

      /**
       * Intersection observer to track which headings are in viewport
       * This helps with edge cases and performance
       */
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const headingId = (entry.target as HTMLElement).id;

            if (entry.isIntersecting) {
              visibleHeadings.add(headingId);
            } else {
              visibleHeadings.delete(headingId);
            }
          });

          // Update active heading when visibility changes
          updateActiveHeading();
        },
        {
          rootMargin: config.rootMargin,
          threshold: 0,
        }
      );

      // Start observing all headings
      headingData.forEach(({ element }) => observer.observe(element));

      // Add scroll listener
      window.addEventListener("scroll", throttledUpdate, { passive: true });

      // Initial update
      setTimeout(updateActiveHeading, 0);

      // Return cleanup function
      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", throttledUpdate);
        if (throttleTimer) {
          clearTimeout(throttleTimer);
        }
      };
    },
    catch: (cause) =>
      new HeadingExtractionError(
        "Failed to create active heading tracker",
        cause
      ),
  });

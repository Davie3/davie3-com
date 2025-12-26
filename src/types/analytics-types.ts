/**
 * Analytics-related type definitions
 */

/**
 * Ad blocker detection result
 */
export type AdBlockDetectionResult = {
  readonly detected: boolean;
  readonly timestamp: number;
};

/**
 * Analytics provider props (for future extensibility)
 */
export type AnalyticsProviderProps = {
  readonly children?: never;
};

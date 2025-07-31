/**
 * Main type exports for the application.
 * Re-exports all types from other type definition files.
 */

// API Types
export type { GitHubRepo, ApiResponse, ApiError } from '@/types/api';

// Component Types
export type {
  ComponentProps,
  PageProps,
  LayoutProps,
  ComponentWithChildren,
  ComponentReturn,
} from '@/types/components';

// Configuration Types
export type { GitHubConfig, AnimationConfig } from '@/types/config';

// Form Types
export type {
  ContactFormValues,
  FormStatus,
  FormFieldError,
} from '@/types/forms';

// Personal Types
export type { Experience, PersonalInfo, Skill } from '@/types/personal';

// Social Types
export type { SocialLinkData, SocialIconName } from '@/types/social';

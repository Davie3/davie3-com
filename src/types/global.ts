/**
 * Main type exports for the application.
 * Re-exports all types from other type definition files.
 */

// API Types
export type { GitHubRepo, ApiResponse, ApiError } from '@/types/api-types';

// Component Types
export type {
  ComponentProps,
  PageProps,
  LayoutProps,
  ComponentWithChildren,
  ComponentReturn,
} from '@/types/component-types';

// Configuration Types
export type { GitHubConfig, AnimationConfig } from '@/types/config-types';

// Form Types
export type {
  ContactFormValues,
  FormStatus,
  FormFieldError,
} from '@/types/form-types';

// Personal Types
export type { Experience, PersonalInfo, Skill } from '@/types/personal-types';

// Social Types
export type { SocialLinkData, SocialIconName } from '@/types/social-types';

/**
 * Main type exports for the application.
 * Re-exports all types from other type definition files.
 */

export type {
  ContactFormValues,
  FormStatus,
  FormFieldError,
} from '@/types/forms';
export type { GitHubRepo, ApiResponse, ApiError } from '@/types/api';
export type { Experience, PersonalInfo, Skill } from '@/types/personal';
export type {
  ComponentProps,
  PageProps,
  LayoutProps,
  ComponentWithChildren,
  ComponentReturn,
} from '@/types/components';

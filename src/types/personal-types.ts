/**
 * Personal information and experience type definitions.
 */
export interface Experience {
  readonly role: string;
  readonly company: string;
  readonly period: string;
  readonly description: string;
}

export interface Education {
  readonly degree: string;
  readonly institution: string;
  readonly period: string;
  readonly emoji: string;
}

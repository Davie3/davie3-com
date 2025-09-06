/**
 * Personal information and experience type definitions.
 */
export type Experience = {
  readonly role: string;
  readonly company: string;
  readonly period: string;
  readonly description: string;
};

export type PersonalInfo = {
  readonly fullName: string;
  readonly title: string;
  readonly description: string;
  readonly twitterHandle: string;
};

export type Skill = string;

export type Education = {
  readonly degree: string;
  readonly institution: string;
  readonly period: string;
  readonly emoji: string;
};

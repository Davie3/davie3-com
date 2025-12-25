export const EXTERNAL_API = {
  GITHUB: {
    USER_REPOS_ENDPOINT:
      'https://api.github.com/search/repositories?q=user:davie3+fork:false',
  },
} as const;

export const CLOUDFLARE_API = {
  TURNSTILE_VERIFY_ENDPOINT:
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
} as const;

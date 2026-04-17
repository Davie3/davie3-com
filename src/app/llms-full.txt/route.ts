import { ABOUT_CONTENT, EDUCATION, EXPERIENCES, SKILLS } from '@/constants/pages/about-page';
import { CONTACT_CONTENT } from '@/constants/pages/contact-page';
import { PORTFOLIO_CONTENT } from '@/constants/pages/portfolio-page';
import { PAGE_DESCRIPTIONS, PERSONAL_INFO, PROFESSIONAL_TITLES } from '@/constants/shared';
import { EXTERNAL_URLS, INTERNAL_ROUTES } from '@/constants/urls';

export const dynamic = 'force-static';
export const revalidate = 3600;

function buildLlmsFullText(): string {
  const baseUrl = EXTERNAL_URLS.MAIN;

  const experienceBlocks = EXPERIENCES.map(
    (exp) => `**${exp.role} — ${exp.company} (${exp.period})**\n${exp.description}`,
  ).join('\n\n');

  const educationBlocks = EDUCATION.map(
    (edu) => `- ${edu.degree} — ${edu.institution} (${edu.period})`,
  ).join('\n');

  const skillsList = SKILLS.map((skill) => `- ${skill}`).join('\n');

  return `# ${PERSONAL_INFO.FULL_NAME} — ${PERSONAL_INFO.NICKNAME}

> Personal site of ${PERSONAL_INFO.FULL_NAME} (${PERSONAL_INFO.NICKNAME}), a ${PROFESSIONAL_TITLES.CURRENT} at Twitch building cloud-native systems with TypeScript, Node.js, and AWS. This site covers background, skills, open-source projects, and contact information.

## Home

URL: ${baseUrl}${INTERNAL_ROUTES.HOME}

${PERSONAL_INFO.FULL_NAME} — ${PROFESSIONAL_TITLES.CURRENT}.

${PAGE_DESCRIPTIONS.HOME_DESCRIPTION}

## About

URL: ${baseUrl}${INTERNAL_ROUTES.ABOUT}

${ABOUT_CONTENT.HERO_SUBTITLE}.

${PAGE_DESCRIPTIONS.ABOUT_PAGE_INTRO}

### Career journey

${ABOUT_CONTENT.CAREER_JOURNEY}

### Skills

${ABOUT_CONTENT.SKILLS_SUBTITLE}:

${skillsList}

### Experience

${experienceBlocks}

### Education

${educationBlocks}

## Portfolio

URL: ${baseUrl}${INTERNAL_ROUTES.PORTFOLIO}

${PORTFOLIO_CONTENT.HERO_SUBTITLE}.

${PORTFOLIO_CONTENT.PAGE_INTRO}

Projects are fetched live from the GitHub API. For the authoritative list, see: ${EXTERNAL_URLS.GITHUB_PROFILE}

## Contact

URL: ${baseUrl}${INTERNAL_ROUTES.CONTACT}

${CONTACT_CONTENT.HERO_SUBTITLE}.

${CONTACT_CONTENT.PAGE_INTRO}
`;
}

export function GET(): Response {
  return new Response(buildLlmsFullText(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

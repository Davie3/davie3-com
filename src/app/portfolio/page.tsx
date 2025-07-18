import type { JSX } from 'react';

/**
 * Renders the portfolio page.
 *
 * @returns The rendered portfolio page.
 */
export default function PortfolioPage(): JSX.Element {
  return (
    <main className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold">My Work</h1>
      <p className="mt-4 text-lg text-muted-foreground">Coming soon...</p>
    </main>
  );
}

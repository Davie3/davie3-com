'use client';

import type { ErrorInfo } from 'react';
import React from 'react';
import Link from 'next/link';
import type {
  ErrorBoundaryState,
  ErrorBoundaryProps,
} from '@/types/component-types';
import { ERROR_MESSAGES } from '@/constants/ui-components';

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      // You can integrate with services like Sentry here
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  reset = (): void => {
    this.setState({ hasError: false, error: undefined });
  };

  render(): React.ReactNode {
    if (this.state.hasError && this.state.error) {
      const Fallback = this.props.fallback;
      if (Fallback) {
        return <Fallback error={this.state.error} reset={this.reset} />;
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="glass rounded-2xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚠️</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-light mb-2">
              {ERROR_MESSAGES.DEFAULT_TITLE}
            </h1>
            <p className="text-slate-muted mb-6">
              {ERROR_MESSAGES.DEFAULT_DESCRIPTION}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={this.reset}
                className="px-6 py-3 bg-gradient-to-r from-blue-accent to-purple-accent rounded-xl font-semibold text-navy transition-all duration-300 hover:scale-105"
              >
                {ERROR_MESSAGES.BUTTON_REFRESH}
              </button>
              <Link
                href="/"
                className="px-4 py-2 text-slate-light hover:text-blue-accent transition-colors"
              >
                {ERROR_MESSAGES.BUTTON_HOME}
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

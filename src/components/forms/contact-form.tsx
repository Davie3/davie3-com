'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import type { JSX } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Turnstile } from '@/components/ui/turnstile-widget';
import { FORM_MESSAGES } from '@/constants/ui-components';
import { CONTACT_FORM_SCHEMA } from '@/types/form-types';
import type { ContactFormValues } from '@/types/form-types';
import { INTERNAL_ROUTES } from '../../constants/urls';

/**
 * Client-side contact form component with validation and submission handling.
 *
 * @returns The rendered contact form.
 */
export default function ContactForm(): JSX.Element {
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [token, setToken] = useState<string>('');
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(CONTACT_FORM_SCHEMA),
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (!token) {
      setCaptchaError('Please complete the CAPTCHA verification.');
      return;
    }
    setIsSubmitting(true);
    setFormStatus(null);
    setCaptchaError(null);

    try {
      const response = await fetch(INTERNAL_ROUTES.API_CONTACT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, token }),
      });

      if (!response.ok) {
        throw new Error(FORM_MESSAGES.ERROR);
      }

      setFormStatus(FORM_MESSAGES.SUCCESS);
      reset();
      setToken('');
      setCaptchaError(null);
    } catch {
      setFormStatus(FORM_MESSAGES.ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formStatus === FORM_MESSAGES.SUCCESS) {
    return (
      <div className="bg-navy-accent/60 border-2 border-electric-cyan/30 p-8 md:p-12">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-electric-cyan/10 border-2 border-electric-cyan flex items-center justify-center mx-auto">
            <svg
              className="w-10 h-10 text-electric-cyan"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-3xl font-display text-cream">
            Message Sent Successfully!
          </h3>
          <p className="text-silver text-lg">
            Thank you for reaching out. I&apos;ll get back to you as soon as
            possible.
          </p>
          <button
            onClick={() => {
              setFormStatus(null);
              reset();
              setToken('');
              setCaptchaError(null);
            }}
            className="px-6 py-3 bg-electric-cyan text-navy font-semibold hover:bg-safety-orange transition-all duration-300"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-navy-accent/40 border-2 border-electric-cyan/20 p-8 md:p-12">
      <form
        onSubmit={(e) => {
          void handleSubmit(onSubmit)(e);
        }}
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="form-input"
            placeholder="Your full name"
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="form-input"
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="confirmEmail" className="form-label">
            Confirm Email
          </label>
          <input
            id="confirmEmail"
            type="email"
            {...register('confirmEmail')}
            className="form-input"
            placeholder="Confirm your email address"
          />
          {errors.confirmEmail && (
            <p className="form-error">{errors.confirmEmail.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            {...register('subject')}
            className="form-input"
            placeholder="What's this about?"
          />
          {errors.subject && (
            <p className="form-error">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            className="form-input resize-none"
            placeholder="Tell me about your project or inquiry..."
          />
          {errors.message && (
            <p className="form-error">{errors.message.message}</p>
          )}
        </div>

        <div className="flex justify-center">
          <Turnstile
            onSuccess={(token) => {
              setToken(token);
              setCaptchaError(null);
            }}
          />
        </div>
        {captchaError && (
          <div className="p-4 bg-safety-orange/10 border-2 border-safety-orange/50">
            <p className="text-center text-safety-orange text-sm font-semibold">
              {captchaError}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-electric-cyan text-navy font-bold text-lg hover:bg-safety-orange transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 border-2 border-electric-cyan hover:border-safety-orange hover:scale-[1.02] active:scale-95"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {formStatus === FORM_MESSAGES.ERROR && (
          <div className="p-4 bg-safety-orange/10 border-2 border-safety-orange/50">
            <p className="text-center text-safety-orange font-semibold">
              Something went wrong. Please try again later.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

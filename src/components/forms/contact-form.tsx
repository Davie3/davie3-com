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
      <div className="bg-navy-accent/60 backdrop-blur-xl border border-slate-dark/20 rounded-3xl p-8 md:p-12">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-8 h-8 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-light">
            Message Sent Successfully!
          </h3>
          <p className="text-slate-dark text-lg">
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
            className="px-6 py-3 bg-blue-accent/20 hover:bg-blue-accent/30 rounded-xl text-blue-accent border border-blue-accent/30 hover:border-blue-accent/50 transition-all duration-200"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-navy-accent/60 backdrop-blur-xl border border-slate-dark/20 rounded-3xl p-8 md:p-12">
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
          <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
            <p className="text-center text-red-400 text-sm font-medium">
              {captchaError}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 rounded-xl font-bold text-white shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-lg border-2 border-emerald-400/50 hover:border-emerald-300/60 relative overflow-hidden"
        >
          <span className="relative z-10">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200" />
        </button>

        {formStatus === FORM_MESSAGES.ERROR && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
            <p className="text-center text-red-400 font-medium">
              Something went wrong. Please try again later.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

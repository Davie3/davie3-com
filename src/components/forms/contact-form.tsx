'use client';

import type { JSX } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

import { CONTACT_FORM_SCHEMA, FORM_MESSAGES } from '@/constants/form-schemas';
import { INTERNAL_ROUTES } from '@/constants/urls';
import type { ContactFormValues } from '@/types/form-types';
import { Turnstile } from '@/components/ui/turnstile-widget';

/**
 * Client-side contact form component with validation and submission handling.
 *
 * @returns The rendered contact form.
 */
export default function ContactForm(): JSX.Element {
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [token, setToken] = useState<string>('');

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
      setFormStatus('Please complete the CAPTCHA.');
      return;
    }
    setIsSubmitting(true);
    setFormStatus(null);

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
    } catch {
      setFormStatus(FORM_MESSAGES.ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-navy-accent/60 backdrop-blur-xl border border-slate-dark/20 rounded-3xl p-8 md:p-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-light mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="w-full px-4 py-3 bg-navy-accent/50 border border-slate-dark/30 rounded-xl text-slate-light placeholder-slate-dark focus:border-blue-accent focus:ring-2 focus:ring-blue-accent/20 focus:outline-none transition-colors duration-200"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-light mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full px-4 py-3 bg-navy-accent/50 border border-slate-dark/30 rounded-xl text-slate-light placeholder-slate-dark focus:border-blue-accent focus:ring-2 focus:ring-blue-accent/20 focus:outline-none transition-colors duration-200"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-light mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            className="w-full px-4 py-3 bg-navy-accent/50 border border-slate-dark/30 rounded-xl text-slate-light placeholder-slate-dark focus:border-blue-accent focus:ring-2 focus:ring-blue-accent/20 focus:outline-none transition-colors duration-200 resize-none"
            placeholder="Tell me about your project or inquiry..."
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <Turnstile onSuccess={setToken} />
        </div>

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

        {formStatus === FORM_MESSAGES.SUCCESS && (
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
            <p className="text-center text-green-400 font-medium">
              Message sent successfully! Thank you for reaching out.
            </p>
          </div>
        )}
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

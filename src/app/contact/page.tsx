'use client';

import type { JSX } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

import { CONTACT_FORM_SCHEMA, FORM_MESSAGES } from '@/constants/forms';
import { INTERNAL_ROUTES } from '@/constants/urls';
import type { ContactFormValues } from '@/types/forms';

/**
 * Renders the contact page with a functional contact form.
 *
 * @returns The rendered contact page.
 */
export default function ContactPage(): JSX.Element {
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(CONTACT_FORM_SCHEMA),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const response = await fetch(INTERNAL_ROUTES.API_CONTACT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
    <main className="container mx-auto max-w-2xl px-4 py-24">
      <section id="contact">
        <h1 className="text-4xl font-bold text-primary">Contact Me</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a question or want to work together? Fill out the form below, and
          I&apos;ll get back to you as soon as possible.
        </p>
      </section>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-800 p-2 text-foreground shadow-sm focus:border-primary focus:ring-primary"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-800 p-2 text-foreground shadow-sm focus:border-primary focus:ring-primary"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            className="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-800 p-2 text-foreground shadow-sm focus:border-primary focus:ring-primary"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {formStatus === FORM_MESSAGES.SUCCESS && (
          <p className="text-center text-green-500">
            Message sent successfully! Thank you for reaching out.
          </p>
        )}
        {formStatus === FORM_MESSAGES.ERROR && (
          <p className="text-center text-red-500">
            Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </main>
  );
}

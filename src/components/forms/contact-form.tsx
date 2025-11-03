'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import type { JSX } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(CONTACT_FORM_SCHEMA),
    defaultValues: {
      name: '',
      email: '',
      confirmEmail: '',
      subject: '',
      message: '',
    },
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
      form.reset();
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
      <div className="glass rounded-3xl p-8 md:p-12">
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
          <h3 className="text-2xl font-bold text-foreground">
            Message Sent Successfully!
          </h3>
          <p className="text-muted-foreground text-lg">
            Thank you for reaching out. I&apos;ll get back to you as soon as
            possible.
          </p>
          <Button
            onClick={() => {
              setFormStatus(null);
              form.reset();
              setToken('');
              setCaptchaError(null);
            }}
            variant="outline"
            className="px-6 py-3"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-3xl p-8 md:p-12">
      <Form {...form}>
        <form
          onSubmit={(e) => {
            void form.handleSubmit(onSubmit)(e);
          }}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Confirm your email address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="What's this about?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me about your project or inquiry..."
                    className="resize-none"
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center">
            <Turnstile
              onSuccess={(token) => {
                setToken(token);
                setCaptchaError(null);
              }}
            />
          </div>
          {captchaError && (
            <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-xl">
              <p className="text-center text-destructive text-sm font-medium">
                {captchaError}
              </p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            size="lg"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>

          {formStatus === FORM_MESSAGES.ERROR && (
            <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-xl">
              <p className="text-center text-destructive font-medium">
                Something went wrong. Please try again later.
              </p>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}

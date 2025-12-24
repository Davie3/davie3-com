'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { User, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { JSX } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Turnstile } from '@/components/ui/turnstile-widget';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { FormField } from '@/components/ui/form-field';

import { CONTACT_FORM } from '@/constants/shared';
import { FORM_MESSAGES } from '@/constants/ui-components';
import { CONTACT_FORM_SCHEMA } from '@/types/form-types';
import type { ContactFormValues } from '@/types/form-types';
import { INTERNAL_ROUTES } from '@/constants/urls';

// Framer Motion variants
const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

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
    watch,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(CONTACT_FORM_SCHEMA),
  });

  const messageValue = watch('message', '');

  const onSubmit = async (data: ContactFormValues) => {
    if (!token) {
      setCaptchaError(CONTACT_FORM.CAPTCHA_ERROR);
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

  const resetForm = () => {
    setFormStatus(null);
    reset();
    setToken('');
    setCaptchaError(null);
  };

  // Success state
  if (formStatus === FORM_MESSAGES.SUCCESS) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', duration: 0.6, bounce: 0.3 }}
      >
        <Card variant="elevated" className="max-w-3xl mx-auto">
          <CardContent className="py-12 text-center space-y-6">
            <div className="w-20 h-20 bg-electric-cyan/10 border-2 border-electric-cyan flex items-center justify-center mx-auto rounded-lg">
              <CheckCircle2 className="w-10 h-10 text-electric-cyan" />
            </div>
            <Alert variant="success" className="border-0 bg-transparent">
              <AlertTitle className="text-3xl font-display text-cream mb-3">
                {CONTACT_FORM.SUCCESS_HEADING}
              </AlertTitle>
              <AlertDescription className="text-lg text-silver">
                {CONTACT_FORM.SUCCESS_MESSAGE}
              </AlertDescription>
            </Alert>
            <Button onClick={resetForm} variant="outline" size="lg">
              {CONTACT_FORM.SUCCESS_BUTTON}
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  // Form state
  return (
    <Card variant="glass" className="max-w-3xl mx-auto">
      <CardContent>
        <motion.form
          onSubmit={(e) => {
            void handleSubmit(onSubmit)(e);
          }}
          className="space-y-6"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fieldVariants}>
            <FormField
              label={CONTACT_FORM.LABEL_NAME}
              name="name"
              error={errors.name?.message}
              required
            >
              <Input
                id="name"
                type="text"
                {...register('name')}
                variant={errors.name ? 'error' : 'default'}
                placeholder={CONTACT_FORM.PLACEHOLDER_NAME}
                icon={<User className="w-5 h-5" />}
                iconPosition="left"
              />
            </FormField>
          </motion.div>

          <motion.div variants={fieldVariants}>
            <FormField
              label={CONTACT_FORM.LABEL_EMAIL}
              name="email"
              error={errors.email?.message}
              required
            >
              <Input
                id="email"
                type="email"
                {...register('email')}
                variant={errors.email ? 'error' : 'default'}
                placeholder={CONTACT_FORM.PLACEHOLDER_EMAIL}
                icon={<Mail className="w-5 h-5" />}
                iconPosition="left"
              />
            </FormField>
          </motion.div>

          <motion.div variants={fieldVariants}>
            <FormField
              label={CONTACT_FORM.LABEL_CONFIRM_EMAIL}
              name="confirmEmail"
              error={errors.confirmEmail?.message}
              required
            >
              <Input
                id="confirmEmail"
                type="email"
                {...register('confirmEmail')}
                variant={errors.confirmEmail ? 'error' : 'default'}
                placeholder={CONTACT_FORM.PLACEHOLDER_CONFIRM_EMAIL}
                icon={<Mail className="w-5 h-5" />}
                iconPosition="left"
              />
            </FormField>
          </motion.div>

          <motion.div variants={fieldVariants}>
            <FormField
              label={CONTACT_FORM.LABEL_SUBJECT}
              name="subject"
              error={errors.subject?.message}
              required
            >
              <Input
                id="subject"
                type="text"
                {...register('subject')}
                variant={errors.subject ? 'error' : 'default'}
                placeholder={CONTACT_FORM.PLACEHOLDER_SUBJECT}
                icon={<MessageSquare className="w-5 h-5" />}
                iconPosition="left"
              />
            </FormField>
          </motion.div>

          <motion.div variants={fieldVariants}>
            <FormField
              label={CONTACT_FORM.LABEL_MESSAGE}
              name="message"
              error={errors.message?.message}
              required
            >
              <Textarea
                id="message"
                {...register('message')}
                variant={errors.message ? 'error' : 'default'}
                placeholder={CONTACT_FORM.PLACEHOLDER_MESSAGE}
                rows={6}
                maxLength={2000}
                showCharCount
                value={messageValue}
              />
            </FormField>
          </motion.div>

          <motion.div
            variants={fieldVariants}
            className="flex justify-center pt-2"
          >
            <Turnstile
              onSuccess={(newToken) => {
                setToken(newToken);
                setCaptchaError(null);
              }}
            />
          </motion.div>

          {captchaError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Alert
                variant="error"
                dismissible
                onDismiss={() => setCaptchaError(null)}
              >
                {captchaError}
              </Alert>
            </motion.div>
          )}

          <motion.div variants={fieldVariants}>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? FORM_MESSAGES.SUBMITTING : FORM_MESSAGES.SUBMIT}
            </Button>
          </motion.div>

          {formStatus === FORM_MESSAGES.ERROR && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Alert variant="error">{CONTACT_FORM.ERROR_MESSAGE}</Alert>
            </motion.div>
          )}
        </motion.form>
      </CardContent>
    </Card>
  );
}

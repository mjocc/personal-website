import Animate from '@components/utilities/Animate';
import FormField, {
  HoneypotField,
  SubmitErrorMessage,
  SubmitSuccessMessage,
} from '@components/utilities/FormField';
import Button from '@components/utilities/StandardButton';
import { Form, Formik } from 'formik';
import { FC, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const validationSchema = z.object({
  name: z
    .string()
    .max(50, { message: 'Must be 50 characters or less' })
    .optional(),
  email: z.string().email({ message: 'Invalid email address' }),
  subject: z
    .string()
    .max(50, { message: 'Must be 50 characters or less' })
    .optional(),
  message: z.string().max(1000, { message: 'Must be 1000 characters or less' }),
  'phone-number': z.string().optional(), // netlify honeypot field
});

export type ContactFormValues = z.infer<typeof validationSchema>;

interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => Promise<boolean> | boolean;
  className?: string;
}

const ContactForm: FC<ContactFormProps> = ({ onSubmit, className = '' }) => {
  const [submitted, setSubmitted] = useState<'success' | 'error' | null>(null);

  const formValidationSchema = toFormikValidationSchema(validationSchema);

  const initialValues: ContactFormValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
    'phone-number': '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formValidationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        let submitSuccessful = await onSubmit(values);
        setSubmitting(false);
        if (submitSuccessful) {
          setSubmitted('success');
          resetForm();
        } else {
          setSubmitted('error');
        }
      }}
    >
      {({ isSubmitting }) => (
        <Animate type="fadeInRight">
          <Form
            id="contact-form"
            name="contact"
            className={`flex flex-col ${className}`}
            data-netlify={true}
            netlify-honeypot="phone-number"
          >
            <div className="flex">
              <FormField
                label="Name"
                name="name"
                type="text"
                containerClassName="mr-2"
              />
              <FormField label="Email" name="email" type="email" />
            </div>
            <FormField label="Subject" name="subject" type="text" />
            <FormField
              label="Message"
              name="message"
              as="textarea"
              fieldClassName="h-28"
            />

            <HoneypotField />

            <Button
              color="blue"
              className="mb-2"
              type="submit"
              submitting={isSubmitting}
            >
              Send message
            </Button>

            <SubmitSuccessMessage show={submitted === 'success'} />
            <SubmitErrorMessage show={submitted === 'error'} />
          </Form>
        </Animate>
      )}
    </Formik>
  );
};

export default ContactForm;

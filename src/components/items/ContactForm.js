import Button from '@components/utilities/StandardButton';
import Tippy from '@tippyjs/react';
import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import * as Yup from 'yup';

const FormField = ({ label, name, className = '', ...otherProps }) => {
  const { errors, touched } = useFormikContext();
  const [error, setError] = useState(null);
  const getErrors = useCallback(
    () => touched[name] === true && errors[name] !== undefined,
    [name, errors, touched]
  );
  useEffect(() => {
    setError(getErrors());
  }, [setError, getErrors]);
  return (
    <div className={`mb-2 ${className}`}>
      <Tippy
        content={
          <ErrorMessage name={name} className="text-red-700" component="span" />
        }
        disabled={!error}
        visible={error}
        arrow={false}
        placement="bottom-end"
      >
        <div>
          <Field
            className={`block w-full rounded bg-zinc-700 text-zinc-400 shadow-sm focus:ring focus:ring-opacity-50
          ${
            error
              ? 'border-[1.5px] border-red-900 focus:border-red-800 focus:ring-red-700'
              : 'border-zinc-900 focus:border-zinc-800 focus:ring-zinc-700'
          }`}
            id={`${name}-form-field`}
            name={name}
            placeholder={label}
            aria-label={label}
            {...otherProps}
          />
        </div>
      </Tippy>
    </div>
  );
};

const HoneypotField = () => (
  <div className="hidden">
    <FormField label="Phone number" name="phone-number" type="text" />
  </div>
);

const StatusMessage = ({ className = '', children, show }) =>
  show && (
    <div className={`mt-2 rounded-md border p-3 ${className}`}>{children}</div>
  );

const SubmitSuccessMessage = ({ show }) => (
  <StatusMessage
    show={show}
    className="border-green-900 bg-green-200 text-green-700"
  >
    Form submitted successfully.
  </StatusMessage>
);

const SubmitErrorMessage = ({ show }) => (
  <StatusMessage show={show} className="border-red-900 bg-red-200 text-red-700">
    Something went wrong. Please try again.
  </StatusMessage>
);

export default function ContactForm({ onSubmit, className = '' }) {
  const [submitted, setSubmitted] = useState(null);
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: '',
        'phone-number': '', // Netlify honeypot field
      }}
      validationSchema={Yup.object({
        name: Yup.string().max(50, 'Must be 50 characters or less'),
        email: Yup.string().email('Invalid email address').required('Required'),
        subject: Yup.string().max(50, 'Must be 50 characters or less'),
        message: Yup.string()
          .max(1000, 'Must be 1000 characters or less')
          .required('Required'),
      })}
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
        <Form
          id="contact-form"
          name="contact"
          className={`flex flex-col ${className}`}
          data-netlify={true}
          netlify-honeypot="phone-number"
        >
          <div className="flex">
            <FormField label="Name" name="name" type="text" className="mr-2" />
            <FormField label="Email" name="email" type="email" />
          </div>
          <FormField label="Subject" name="subject" type="text" />
          <FormField label="Message" name="message" as="textarea" />

          <HoneypotField />

          <Button type="submit" disabled={isSubmitting}>
            Send message
          </Button>

          <SubmitSuccessMessage show={submitted === 'success'} />
          <SubmitErrorMessage show={submitted === 'error'} />
        </Form>
      )}
    </Formik>
  );
}

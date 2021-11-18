import { useState } from 'react';
import * as Yup from 'yup';

import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import Button from '@components/StandardButton';

const FormField = (props) => {
  const { label, name, className, ...otherProps } = props;
  const { errors, touched } = useFormikContext();
  const showError = () => touched[name] === true && errors[name] !== undefined;
  return (
    <div className={`mb-2 ${className}`}>
      <label className="text-white" htmlFor={`${name}-form-field`}>
        {label}
      </label>
      <Field
        className={`mt-1 block w-full rounded shadow-sm focus:ring focus:ring-opacity-50
          ${
            showError()
              ? 'border-[1.5px] border-red-600 focus:border-red-600 focus:ring-red-600'
              : 'focus:border-gray-300 border-gray-300 focus:ring-gray-200'
          }`}
        id={`${name}-form-field`}
        name={name}
        {...otherProps}
      />
      <ErrorMessage
        name={name}
        className="float-right -mb-6 text-red-600"
        component="span"
      />
    </div>
  );
};

const HoneypotField = () => (
  <div className="hidden">
    <FormField label="Phone number" name="phone-number" type="text" />
  </div>
);

const SubmitSuccessMessage = ({ show }) => (
  <div
    className={
      show
        ? 'text-green-700 bg-green-200 rounded-md p-3 mt-4 border border-green-900'
        : 'hidden'
    }
  >
    Form submitted successfully.
  </div>
);

const SubmitErrorMessage = ({ show }) => (
  <div
    className={
      show
        ? 'text-red-700 bg-red-200 rounded-md p-3 mt-4 border border-red-900'
        : 'hidden'
    }
  >
    Something went wrong. Please try again.
  </div>
);

export default function ContactForm({ onSubmit }) {
  const [submitted, setSubmitted] = useState(null);
  return (
    <div>
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
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
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
            className="flex flex-col"
            data-netlify={true}
            netlify-honeypot="phone-number"
          >
            <div className="flex">
              <FormField
                label="Name"
                name="name"
                type="text"
                className="mr-1"
              />
              <FormField label="Email" name="email" type="email" />
            </div>
            <FormField label="Subject" name="subject" type="text" />
            <FormField label="Message" name="message" as="textarea" />

            <HoneypotField />

            <Button className="mt-5" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <SubmitSuccessMessage show={submitted === 'success'} />
      <SubmitErrorMessage show={submitted === 'error'} />
    </div>
  );
}

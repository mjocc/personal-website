import { ContactFormValues } from '@components/items/ContactForm';
import exclamationCircle from '@images/exclamation-circle.svg';
import Tippy from '@tippyjs/react';
import { ErrorMessage, Field, FieldAttributes, useFormikContext } from 'formik';
import Image from 'next/image';
import { FC, useCallback } from 'react';
import 'tippy.js/dist/tippy.css';

interface FormField extends FieldAttributes<any> {
  label: string;
  name: keyof ContactFormValues;
  containerClassName?: string;
  fieldClassName?: string;
}

const FormField: FC<FormField> = ({
  label,
  name,
  containerClassName = '',
  fieldClassName = '',
  ...fieldProps
}) => {
  const { errors, touched } = useFormikContext<ContactFormValues>();
  const getErrors = useCallback(
    () => touched[name] === true && errors[name] !== undefined,
    [name, errors, touched]
  );
  const showError = getErrors();
  return (
    <Tippy
      content={
        <ErrorMessage name={name} className="text-red-700" component="span" />
      }
      disabled={!showError}
      visible={true}
      placement="right"
    >
      <div className={`mb-2 ${containerClassName}`}>
        <div className="relative">
          <Field
            className={`block w-full rounded bg-zinc-700 text-zinc-400 shadow-sm focus:ring focus:ring-opacity-50
              ${fieldClassName}
              ${
                showError
                  ? 'border-[1.5px] border-red-900 focus:border-red-800 focus:ring-red-700'
                  : 'border-zinc-900 focus:border-zinc-800 focus:ring-zinc-700'
              }`}
            id={`${name}-form-field`}
            name={name}
            placeholder={label}
            aria-label={label}
            {...fieldProps}
          />
          {showError && (
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <Image src={exclamationCircle} alt="form field error" />
            </span>
          )}
        </div>
      </div>
    </Tippy>
  );
};

export default FormField;

export const HoneypotField: FC = () => (
  <div className="hidden">
    <FormField label="Phone number" name="phone-number" type="text" />
  </div>
);

interface StatusMessageProps {
  show: boolean;
  className?: string;
}

export const StatusMessage: FC<StatusMessageProps> = ({
  className = '',
  children,
  show,
}) =>
  show ? (
    <div className={`mt-2 rounded-md border p-3 ${className}`}>{children}</div>
  ) : null;

interface SubmitMessageProps {
  show: boolean;
}

interface SubmitSuccessMessageProps extends SubmitMessageProps {}

export const SubmitSuccessMessage: FC<SubmitSuccessMessageProps> = ({
  show,
}) => (
  <StatusMessage
    show={show}
    className="border-green-900 bg-green-200 text-green-700"
  >
    Form submitted successfully.
  </StatusMessage>
);

interface SubmitErrorMessageProps extends SubmitMessageProps {}

export const SubmitErrorMessage: FC<SubmitErrorMessageProps> = ({ show }) => (
  <StatusMessage show={show} className="border-red-900 bg-red-200 text-red-700">
    Something went wrong. Please try again.
  </StatusMessage>
);

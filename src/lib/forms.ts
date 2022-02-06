import { ContactFormValues } from '@components/items/ContactForm';

const getSubmitForm =
  <FormValues extends { [key: string]: string }>(formName: string) =>
  async (values: FormValues) => {
    let success = false;
    await fetch('/form-submit.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ 'form-name': formName, ...values }),
    })
      .then((res) => {
        if (res.status === 200) {
          success = true;
        } else {
          success = false;
        }
      })
      .catch(() => {
        success = false;
      });
    return success;
  };

export const submitContactForm = getSubmitForm<ContactFormValues>('contact');

import { ContactFormValues } from '@components/items/ContactForm';

const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export const submitContactForm = async (values: ContactFormValues) => {
  let success = false;
  await fetch('/form-submit.html', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    // body: encode({ 'form-name': 'contact', ...values }),
    body: new URLSearchParams({ 'form-name': 'contact', ...values }),
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

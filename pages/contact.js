import Head from 'next/head';
import MainContent from '@components/MainContent';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import ContactForm from '@components/ContactForm';

import utils from '@styles/Utilities.module.scss';

const getFormData = (object) =>
  Object.keys(object).reduce((formData, key) => {
    formData.append(key, object[key]);
    return formData;
  }, new FormData());

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Contact me | mjocc</title>
      </Head>

      <Navbar />

      <MainContent>
        <div
          className={`${utils.flexCenter} ${utils.heightVisibleScreen} w-screen`}
        >
          {/* <ContactForm
            onSubmit={async (values) => {
              const success = false;
              await fetch('/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(getFormData(values)).toString(),
              })
                .then(() => {
                  success = true;
                })
                .catch(() => {
                  success = false;
                });
              return success;
            }}
          /> */}
          <form data-netlify={true} name="contact-form" method="post">
            <input type="text" name="name" />
            <input type="text" name="email" />
            <input type="text" name="subject" />
            <input type="text" name="message" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </MainContent>

      <Footer />
    </>
  );
}

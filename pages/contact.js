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
          <form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" name="name" />
            </div>
            <div className="form-group">
              <label className="required" htmlFor="contact-email">
                Email
              </label>
              <input id="contact-email" type="email" name="email" required />
            </div>
            <div className="form-group">
              <label className="required" htmlFor="contact-message">
                Message
              </label>
              <textarea id="contact-message" name="message" required></textarea>
            </div>
            <input type="submit" />
          </form>
        </div>
      </MainContent>

      <Footer />
    </>
  );
}

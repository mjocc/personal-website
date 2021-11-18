import Head from 'next/head';
import MainContent from '@components/MainContent';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import ContactForm from '@components/ContactForm';

import utils from '@styles/Utilities.module.scss';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

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
          <ContactForm
            onSubmit={async (values) => {
              const success = false;
              console.log(encode({ 'form-name': 'contact', ...values }));
              await fetch('/form-submit.html', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: encode({ 'form-name': 'contact', ...values }),
              })
                .then(() => {
                  success = true;
                })
                .catch(() => {
                  success = false;
                });
              return success;
            }}
          />
        </div>
      </MainContent>

      <Footer />
    </>
  );
}

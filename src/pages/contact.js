import Head from 'next/head';
import MainContent from '@components/MainContent';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import SocialMediaIcons from '@components/SocialMediaIcons';
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
        <title>Contact Me | mjocc</title>
      </Head>

      <Navbar />

      <MainContent>
        <div
          className={`${utils.flexCenter} ${utils.heightVisibleScreen} w-screen`}
        >
          <SocialMediaIcons height="350px" column={true} />
          <ContactForm
            className="ml-52"
            onSubmit={async (values) => {
              const success = false;
              await fetch('/form-submit.html', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: encode({ 'form-name': 'contact', ...values }),
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
            }}
          />
        </div>
      </MainContent>

      <Footer />
    </>
  );
}

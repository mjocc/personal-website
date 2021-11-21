import Head from 'next/head';
import Layout from '@components/Layout';
import ContactForm from '@components/ContactForm';
import SocialMediaIcons from '@components/SocialMediaIcons';

import utils from '@styles/Utilities.module.scss';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact Me | mjocc</title>
      </Head>

      <div
        className={`${utils.flexCenter} ${utils.heightVisibleScreen} w-screen`}
      >
        <div className="flex-col pb-10">
          <h1 class="text-center text-white font-heading text-8xl font-bold mb-14">
            Contact Me
          </h1>
          <div class="flex flex-row items-center justify-center">
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
        </div>
      </div>
    </Layout>
  );
}

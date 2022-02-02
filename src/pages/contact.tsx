import ContactForm from '@components/items/ContactForm';
import SocialMediaIcons from '@components/items/SocialMediaIcons';
import Layout from '@components/structure/Layout';
import Animate from '@components/utilities/Animate';
import { NextPage } from 'next';
import Head from 'next/head';
import { FC } from 'react';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Me | mjocc</title>
      </Head>

      <div className="utils__flex-center utils__visible-screen-height w-screen">
        <div className="flex-col pb-10">
          <Animate type="fadeInDown">
            <h1 className="mb-14 text-center font-heading text-8xl font-bold text-white">
              Contact Me
            </h1>
          </Animate>
          <div className="flex flex-row items-center justify-center">
            <Animate type="fadeInLeft">
              <SocialMediaIcons height="350px" column />
            </Animate>
            <ContactForm
              className="ml-52"
              onSubmit={async (values) => {
                let success = false;
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
};

export default ContactPage;

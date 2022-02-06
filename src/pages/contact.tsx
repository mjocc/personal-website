import ContactForm from '@components/items/ContactForm';
import SocialMediaIcons from '@components/items/SocialMediaIcons';
import Layout from '@components/structure/Layout';
import Animate from '@components/utilities/Animate';
import { submitContactForm } from '@lib/forms';
import { NextPage } from 'next';
import Head from 'next/head';

const ContactPage: NextPage = () => (
  <Layout>
    <Head>
      <title>Contact Me | mjocc</title>
    </Head>

    <div className="utils__flex-center utils__visible-screen-height w-screen">
      <div className="flex-col pb-10">
        <Animate type="fadeInDown">
          <h1 className="font-heading mb-14 text-center text-8xl font-bold text-white">
            Contact Me
          </h1>
        </Animate>
        <div className="flex flex-row items-center justify-center">
          <Animate type="fadeInLeft">
            <SocialMediaIcons height="350px" column />
          </Animate>
          <ContactForm className="ml-52" onSubmit={submitContactForm} />
        </div>
      </div>
    </div>
  </Layout>
);

export default ContactPage;

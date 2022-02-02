import ContactForm from '@components/items/ContactForm';
import SocialMediaIcons from '@components/items/SocialMediaIcons';
import Layout from '@components/structure/Layout';
import Head from 'next/head';

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

      <div className="w-screen utils__flex-center utils__visible-screen-height">
        <div className="flex-col pb-10">
          <h1 className="font-bold text-center text-white mb-14 font-heading text-8xl animate__animated animate__fadeInDown">
            Contact Me
          </h1>
          <div className="flex flex-row items-center justify-center">
            <SocialMediaIcons className="animate__animated animate__fadeInLeft" height="350px" column />
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
}

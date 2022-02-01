import SocialMediaIcons from '@components/items/SocialMediaIcons';
import Layout from '@components/structure/Layout';
import HeaderText from '@components/utilities/HeaderText';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import Particles from 'react-tsparticles';

/*
  TODO:
  - https://particles.js.org/samples/presets/links
  - https://particles.js.org/samples/presets/index.html
  - https://github.com/matteobruni/tsparticles
  - https://github.com/matteobruni/tsparticles/tree/main/components/react
  - https://www.npmjs.com/package/react-tsparticles

*/

export default function Home() {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }, []);
  return (
    <>
      <Layout>
        <Head>
          <title>Home | mjocc</title>
        </Head>
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="beforeInteractive"
        />

        <div className="utils__flex-center sm:h-screen sm:w-screen">
          <div className="fade flex flex-col text-white">
            <HeaderText className="pb-4 text-9xl text-emerald-500">
              mjocc
            </HeaderText>
            <HeaderText className="text-zinc-100">web developer</HeaderText>
            <HeaderText className="text-zinc-300">& student</HeaderText>

            <SocialMediaIcons className="mt-7 pl-2" width="350px" />
          </div>
        </div>
      </Layout>

      <Particles id="animated-background" />

      <style jsx>{`
        .animated-background {
          position: absolute;
          display: block;
          top: 0;
          left: 0;
          z-index: 0;
        }
      `}</style>
    </>
  );
}

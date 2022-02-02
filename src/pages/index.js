import SocialMediaIcons from '@components/items/SocialMediaIcons';
import Layout from '@components/structure/Layout';
import HeaderText from '@components/utilities/HeaderText';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';

/*
  TODO:
    - add nav to home screen
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
      <Layout hideNavbar>
        <Head>
          <title>mjocc | web developer & student</title>
        </Head>
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="beforeInteractive"
        />

        <div className="utils__flex-center sm:h-screen sm:w-screen">
          <div className="flex flex-col text-white fade">
            <div className="animate__animated animate__fadeInDown">
              <HeaderText className="pb-4 text-9xl text-emerald-500">
                mjocc
              </HeaderText>
              <HeaderText className="text-zinc-100">web developer</HeaderText>
              <HeaderText className="text-zinc-300">& student</HeaderText>
            </div>

            <SocialMediaIcons className="pl-2 mt-7" width="350px" noShadow />
          </div>
        </div>
      </Layout>

      <Particles
        id="animated-background"
        className="fixed -z-10"
        init={(main) => loadLinksPreset(main)}
        options={{ preset: 'links' }}
      />

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

import SocialMediaIcons from '@components/items/SocialMediaIcons';
import Layout from '@components/structure/Layout';
import HeaderText from '@components/utilities/HeaderText';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';
import Animate from '@components/utilities/Animate';

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
          <div className="flex flex-col text-white">
            <Animate type="fadeIn">
              <HeaderText className="pb-2 text-9xl text-emerald-500">
                mjocc
              </HeaderText>
              <HeaderText className="text-zinc-100">web developer</HeaderText>
              <HeaderText className="text-zinc-300 text-7xl">& student</HeaderText>

              <SocialMediaIcons className="mt-7 pl-2" width="350px" noShadow />
            </Animate>
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

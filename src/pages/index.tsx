import SocialMediaIcons from '@components/items/SocialMediaIcons';
import Layout from '@components/structure/Layout';
import Animate from '@components/utilities/Animate';
import HeaderText from '@components/utilities/HeaderText';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';
import netlifyIdentity from 'netlify-identity-widget';

const HomePage: NextPage = () => {
  useEffect(() => {
    netlifyIdentity.init();
    netlifyIdentity.on('init', (user) => {
      if (!user) {
        netlifyIdentity.on('login', () => {
          document.location.href = '/admin/';
        });
      }
    });
  }, []);
  return (
    <>
      <Layout noNavbarShadow>
        <Head>
          <title>Web developer & student | mjocc</title>
        </Head>

        <div className="utils__flex-center sm:h-screen sm:w-screen">
          <div className="flex flex-col text-white">
            <Animate type="fadeIn">
              <HeaderText
                className="pb-2 text-9xl text-emerald-500"
                text="mjocc"
              />
              <HeaderText className="text-zinc-100" text="web developer" />
              <HeaderText className="text-7xl text-zinc-300" text="& student" />

              <SocialMediaIcons className="pl-2 mt-7" width="350px" noShadow />
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
};

export default HomePage;

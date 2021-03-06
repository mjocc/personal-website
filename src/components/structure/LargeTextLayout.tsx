import Layout from '@components/structure/Layout';
import Animate from '@components/utilities/Animate';
import Particles from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';
import { FC } from 'react';

interface LargeTextLayoutProps {
  noLayout?: boolean;
}

const LargeTextLayout: FC<LargeTextLayoutProps> = ({ children, noLayout }) => {
  const content = (
    <div className="utils__flex-center h-screen w-screen">
      <div className="flex flex-col text-white">
        <Animate type="fadeIn">{children}</Animate>
      </div>
    </div>
  );

  const layout = noLayout ? content : <Layout noNavbarShadow>{content}</Layout>;

  return (
    <>
      {layout}

      <Particles
        id="animated-background"
        className="fixed -z-10"
        init={async (main) => loadLinksPreset(main)}
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

export default LargeTextLayout;

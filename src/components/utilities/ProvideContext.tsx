import { getSiteConfig, SiteConfigContext } from '@lib/config';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { FC } from 'react';

export const getStaticProps: GetStaticProps = () => {
  const siteConfig = getSiteConfig();
  console.log(siteConfig)
  return {
    props: { siteConfig },
  };
};

interface ProvideContextProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}
// TODO: fix this and start using config throughout site
const ProvideContext: FC<ProvideContextProps> = ({ siteConfig, children }) => (
  <SiteConfigContext.Provider value={siteConfig}>
    {children}
  </SiteConfigContext.Provider>
);

export default ProvideContext;

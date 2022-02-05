import Footer from '@components/items/Footer';
import Navbar from '@components/items/Navbar';
import SkipToContent from '@components/utilities/SkipToContent';
import { FC } from 'react';

const MainContent: FC = ({ children }) => {
  return (
    <div id="main" className="relative utils__visible-screen-height">
      {children}
    </div>
  );
};

interface LayoutProps {
  hideNavbar?: boolean;
  noNavbarShadow?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, hideNavbar, noNavbarShadow }) => {
  return (
    <>
      <SkipToContent />

      {!hideNavbar && <Navbar noShadow={noNavbarShadow} />}

      <MainContent>{children}</MainContent>

      <Footer />
    </>
  );
};

export default Layout;

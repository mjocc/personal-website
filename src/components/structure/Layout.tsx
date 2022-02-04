import Footer from '@components/items/Footer';
import Navbar from '@components/items/Navbar';
import { FC } from 'react';

const MainContent: FC = ({ children }) => {
  return (
    <div className="utils__visible-screen-height relative">{children}</div>
  );
};

interface LayoutProps {
  hideNavbar?: boolean;
  noNavbarShadow?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, hideNavbar, noNavbarShadow }) => {
  return (
    <>
      {!hideNavbar && <Navbar noShadow={noNavbarShadow} />}

      <MainContent>{children}</MainContent>

      <Footer />
    </>
  );
};

export default Layout;

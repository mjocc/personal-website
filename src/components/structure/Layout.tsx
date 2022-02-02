import Footer from '@components/items/Footer';
import Navbar from '@components/items/Navbar';
import MainContent from '@components/structure/MainContent';
import { FC } from 'react';

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
}

export default Layout;
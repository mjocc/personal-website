import Footer from '@components/items/Footer';
import Navbar from '@components/items/Navbar';
import MainContent from '@components/structure/MainContent';

export default function Layout({ children, hideNavbar, noNavbarShadow }) {
  return (
    <>
      {!hideNavbar && <Navbar noShadow={noNavbarShadow} />}

      <MainContent>{children}</MainContent>

      <Footer />
    </>
  );
}

import Footer from '@components/items/Footer';
import Navbar from '@components/items/Navbar';
import MainContent from '@components/structure/MainContent';

export default function Layout({ children, hideNavbar }) {
  return (
    <>
      {!hideNavbar && <Navbar />}

      <MainContent>{children}</MainContent>

      <Footer />
    </>
  );
}

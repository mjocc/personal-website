import Navbar from '@components/items/Navbar';
import Footer from '@components/items/Footer';
import MainContent from '@components/structure/MainContent';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <MainContent>{children}</MainContent>

      <Footer />
    </>
  );
}

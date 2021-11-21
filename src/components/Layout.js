import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import MainContent from '@components/MainContent';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <MainContent>{children}</MainContent>

      <Footer />
    </>
  );
}

import HeaderTwo from '@app/[locale]/header/headerTwo';
import GalleryPage from './GalleryPage';
import ScrollToTopButton from '../scroll-to-top/scrollToTop';
import Footer from '../footer/footer';
const GalleryScreen = () => {
  return (
    <div>
      <HeaderTwo />
      <GalleryPage />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default GalleryScreen;

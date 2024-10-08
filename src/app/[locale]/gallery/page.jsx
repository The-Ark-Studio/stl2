import HeaderTwo from '@app/[locale]/header/headerTwo';
import GalleryPage from './GalleryPage';
import ScrollToTopButton from '../scroll-to-top/scrollToTop';
const GalleryScreen = () => {
  return (
    <div>
      <HeaderTwo />
      <GalleryPage />
      <ScrollToTopButton />
    </div>
  );
};

export default GalleryScreen;

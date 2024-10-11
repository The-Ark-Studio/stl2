import SEO from '@/components/seo';
import Footer from '../footer/footer';
import ScrollToTopButton from '../scroll-to-top/scrollToTop';
import ContactScreen from './partials/ContactScreen';
import HeaderTwo from '@app/[locale]/header/headerTwo';

const Contact = () => {
  return (
    <>
      <SEO pageTitle="Contact Us" />
      <HeaderTwo />
      <ContactScreen />
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Contact;

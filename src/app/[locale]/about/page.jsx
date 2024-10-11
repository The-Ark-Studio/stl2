'use client';

import HeaderTwo from '@app/[locale]/header/headerTwo';
import AboutScreen from '@app/[locale]/about/partials/AboutScreen';
import ScrollToTopButton from '../scroll-to-top/scrollToTop';
import Footer from '../footer/footer';
import SEO from '@/components/seo';

const About = () => {
  return (
    <>
      <SEO pageTitle="STL | About Us" />
      <HeaderTwo />
      <AboutScreen />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default About;

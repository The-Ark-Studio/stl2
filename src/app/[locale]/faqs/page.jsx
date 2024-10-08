import React from 'react';
import HeaderTwo from '@app/[locale]/header/headerTwo';
import FaqsScreen from './partials/FaqsScreen';
import ScrollToTopButton from '../scroll-to-top/scrollToTop';

const Faqs = () => {
  return (
    <div>
      <HeaderTwo />
      <FaqsScreen />
      <ScrollToTopButton />
    </div>
  );
};

export default Faqs;

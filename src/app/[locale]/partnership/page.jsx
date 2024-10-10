import React from 'react';
import HeaderTwo from '@app/[locale]/header/headerTwo';
import PartnershipScreen from './partials/PartnershipScreen';
import ScrollToTopButton from '../scroll-to-top/scrollToTop';

const Partnerships = () => {
  return (
    <div>
      <HeaderTwo />
      <PartnershipScreen />
      <ScrollToTopButton />
    </div>
  );
};

export default Partnerships;

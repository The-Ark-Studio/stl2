'use client';
import HeaderTwo from '@app/[locale]/header/headerTwo';
import ServicesDetails from '@app/[locale]/service/service-details';
import React from 'react';
// import Footer from '../footer/footer';
// import BreadCrumb from '../breadcrumb/breadcrumb';
// import ServicesDetails from './service-details';
// import HeaderOne from '../header/HeaderOne';
import ScrollToTopButton from '../scroll-to-top/scrollToTop';
import Footer from '../footer/footer';
import SEO from '@components/seo';

const Servicedetails = () => {
  return (
    <>
      {/* <SEO pageTitle="Services Details" />
      <HeaderOne />
      <BreadCrumb
        title="Services Details"
        innerTitle="Services Details"
        bgImage="/img/banner/page-banner-1.jpg"
      /> */}
      <SEO pageTitle="Services Details" />
      <HeaderTwo />
      <ServicesDetails />
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Servicedetails;

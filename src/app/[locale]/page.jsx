import Feature from "./feature/feature";
import Footer from "./footer/footer";
import ScrollToTopButton from "./scroll-to-top/scrollToTop";
import CounterServices from "./counter-services/counter-services";
import SEO from "@components/seo";

import HeaderTwo from './header/headerTwo';
import Banner from './home-two/banner';
import TravelBookingServices from './travel-booking-services/travel-booking-services';
import PlacesNearBy from './places-nearby/places-nearby';

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>STL</title>
        <meta name="description" content="SaiGon Travel Lounge" />
        <meta httpEquiv="Permissions-Policy" content="picture-in-picture 'self'" />
      </Head> */}
      <SEO pageTitle="STL | SaiGon Travel Lounge" />
      <HeaderTwo />
      <Banner />
      <CounterServices />
      <Feature />
      <TravelBookingServices />
      <PlacesNearBy />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

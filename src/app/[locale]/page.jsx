import Blog from "./blog/blog";
// import Deluxe from "./deluxe/deluxe";
import Feature from "./feature/feature";
import Footer from "./footer/footer";
import ScrollToTopButton from "./scroll-to-top/scrollToTop";
import CounterServices from "./counter-services/counter-services";
import Testimonial from "./testimonial/testimonial";
// import Videoarea from "./videoarea/videoarea";
import SEO from "@/components/seo";
// import Home2 from "./home-two/page";

import HeaderTwo from './header/headerTwo';
import Banner from './home-two/banner';
import TravelBookingServices from './travel-booking-services/travel-booking-services';
import PlacesNearBy from './places-nearby/places-nearby';
// import Head from "next/head";
// import Accommodations from "./accommodations/accommodations";

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>STL</title>
        <meta name="description" content="SaiGon Travel Lounge" />
        <meta httpEquiv="Permissions-Policy" content="picture-in-picture 'self'" />
      </Head> */}
      <SEO pageTitle="Home Default" />
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

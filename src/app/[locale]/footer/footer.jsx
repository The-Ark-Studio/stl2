"use client"; // Chỉ thị rằng component này chạy trên client
// Import necessary components and icons
// import footerOne from "@components/data/footerOne";
import Image from "next/image";
import Link from "next/link";
import Social from "../socials/page";
import { useTranslations } from "next-intl";
import KakaoTalkIcon from '@pub/img/icon/kakaotalk.svg';
import EmailSupport from '@pub/img/icon/emailSupport.svg';
import PhoneRing from '@pub/img/icon/phoneRing.svg';
import Location from '@pub/img/icon/location.svg';
import CheckMap from '@pub/img/icon/checkMap.svg';
import EmailTravelBooking from '@pub/img/icon/emailTravelBooking.svg';

// const {
//   logo,
//   title_1,
//   description,
//   title_2,
//   widgetMenus,
//   title_3,
//   title_4,
//   office_des,
//   officeInfos,
// } = footerOne;

const pageslink = [
  "Room Cleaning",
  "Car Parking",
  "Swimming pool",
  "Fitness Gym",
];

// Define the Footer component
export default function Footer() {
  const t = useTranslations('footer')

  return (
    <div className="footer__area">
      <div className="container">
        <div className="row flex justify-between">
          <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 lg-mb-30">
            <div className="footer__area-widget">
              {/* Contact information */}
              <h5>{t('contact.title')}</h5>
              <div className="footer__area-widget-contact">
                <div className="footer__area-widget-contact-item" key={1}>
                  <div className="footer__area-widget-contact-item-icon">
                    <Image src={EmailSupport.src} alt="Description" width={50} height={50} />
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <span>
                      <p>{t('contact.email')}</p>
                    </span>
                  </div>
                </div>
                <div className="footer__area-widget-contact-item" key={2}>
                  <div className="footer__area-widget-contact-item-icon">
                    <Image src={PhoneRing.src} alt="Description" width={50} height={50} />
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <span>
                      <p>{t('contact.phone')}</p>
                    </span>
                  </div>
                </div>
                <div className="footer__area-widget-contact-item" key={3}>
                  <div className="footer__area-widget-contact-item-icon">
                    <Image src={Location.src} alt="Description" width={50} height={50} />
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <span>
                      <p>{t('contact.address')}</p>
                    </span>
                  </div>
                </div>
                <div className="footer__area-widget-contact-item" key={3} style={{ marginTop: "-20px" }}>
                  <div className="footer__area-widget-contact-item-icon">
                    <Image src={CheckMap.src} alt="Description" width={50} height={50} />
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <span>
                      <Link href={t('contact.check_map.link')}>{t('contact.check_map.title')}</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-5 col-sm-4 sm-mb-30">
            <div className="footer__area-widget">
              {/* Page links */}
              <h5>{t('travel_booking.title')}</h5>
              <div className="footer__area-widget-contact">
                <div className="footer__area-widget-contact-item" key={4}>
                  <div className="footer__area-widget-contact-item-icon">
                    <Image src={EmailTravelBooking.src} alt="Description" width={50} height={50} />
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <span>
                      <p>{t('travel_booking.email')}</p>
                    </span>
                  </div>
                </div>
                <div className="footer__area-widget-contact-item" key={4}>
                  <div className="footer__area-widget-contact-item-icon">
                    <Image src={PhoneRing.src} alt="Description" width={50} height={50} />
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <span>
                      <p>{t('travel_booking.phone')}</p>
                    </span>
                  </div>
                </div>
                <div className="footer__area-widget-contact-item" key={4}>
                  <div className="footer__area-widget-contact-item-icon">
                    <Image src={KakaoTalkIcon.src} alt="Description" width={50} height={50} />
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <span>
                      <p>{t('travel_booking.kakao')}</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 sm-mb-30">
            <div className="footer__area-widget">
              <h5>{t('stay_in_touch.title')}</h5>
              <div className="footer__area-widget-about">
                <div className="footer__area-widget-about-logo">
                  {/* Company logo */}
                  <Link href="/">
                    <Image
                      layout="responsive"
                      src="/logo-1.png"
                      alt=""
                      width={200}
                      height={50}
                    />
                  </Link>
                </div>
                {/* Company description */}
                <div className="footer__area-widget-about-social">
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-7 md-mb-10">
              <div className="copyright__area-left md-t-center">
                <p>© 2024 Develop by<a href="https://www.theark.studio/"> The Ark Studio</a> Manage by<Link href="https://stl.sg/"> STL Company</Link></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import BannerImage from "../../../../public/img/home/_ONY0001.jpg";
import { useTranslations, useLocale } from "next-intl";
import 'react-modal-video/css/modal-video.css';


const Banner = () => {
  const t = useTranslations('homePage.firstBlock')
  const locale = useLocale();
  const bookingURL = `https://booking.stl.sg/${locale}/`;
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    // Mở video khi component lần đầu được tải
    setOpen(true);

    // Tắt video sau 3 giây
    const timer = setTimeout(() => {
      setOpen(false);
    }, 5000);

    // Dọn dẹp timer khi component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className="banner__three"
      style={{ backgroundImage: `url('/img/bg/banner-bg.jpg')` }}
    >
      <div className="container custom__container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7 order-last order-lg-first">
            <div className="banner__three-title">
              <h2>
                {t('header')}
                {/* <span> Get 20% Off !</span> */}
              </h2>
              <span className="subtitle__one">{t('description')}</span>

              <Link className="theme-btn" href={bookingURL} target="_blank" rel="noopener noreferrer">
                {t('bookNowButton')}<i className="fal fa-long-arrow-right"></i>
              </Link>
              <div className="banner__three-title-video">
                <div className="video__play">
                  <React.Fragment>
                    <ModalVideo
                      channel="youtube"
                      isOpen={isOpen}
                      videoId="r5dZ26FgrD0"//"agethgLsIts" // Chỉ lấy video ID mà không thêm tham số autoplay
                      onClose={() => setOpen(false)}
                      autoplay={true} // Thêm thuộc tính autoplay
                      mute
                    />
                    <span onClick={() => setOpen(true)}>
                      <i className="fas fa-play"></i>
                    </span>
                  </React.Fragment>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 lg-mb-60">
            <div className="banner__three-right">
              <img className="img__50" src={BannerImage.src} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

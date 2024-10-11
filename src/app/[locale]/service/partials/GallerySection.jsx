'use client';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './gallerySectionStyle.css';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

const GallerySection = ({ title, description, imageUrls, isImageLeft }) => {
  const t = useTranslations('servicePage');

  const router = useRouter();
  const locale = useLocale();

  // Hàm điều hướng tới trang Gallery với tab mới
  const navigateToGallery = () => {
    router.push(`/${locale}/gallery`); // Điều hướng tới trang Gallery với tab 'newTab'
  };

  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 998px)');
    const handleMediaQueryChange = (e) => {
      setIsTabletOrMobile(e.matches);
    };

    // Initial check
    setIsTabletOrMobile(mediaQuery.matches);

    // Add listener
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  console.log(isTabletOrMobile)

  return (
    <>
      {isTabletOrMobile ? (
        <div className={`section`}>
          <div className="section-image">
            <Carousel interval={2000}>
              {imageUrls?.length &&
                imageUrls.map((url, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={url}
                      alt={`${title} ${index}`}
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
          </div>
          <div className="section-content">
            <h2 className="service-title">{title}</h2>
            <p className="service-description">{description}</p>
            <button onClick={navigateToGallery}>{t('secondBlock.showPicture')}</button>
          </div>
          {/* {!isImageLeft && (
            <div className="section-image">
              <Carousel>
                {imageUrls.map((url, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={url}
                      alt={`${title} ${index}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          )} */}
        </div>
      ) : (<div className={`section ${isImageLeft ? 'left' : 'right'}`}>
        {isImageLeft && (
          <div className="section-image">
            <Carousel interval={2000}>
              {imageUrls?.length &&
                imageUrls.map((url, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={url}
                      alt={`${title} ${index}`}
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
          </div>
        )}
        <div className="section-content">
          <h2 className="service-title">{title}</h2>
          <p className="service-description">{description}</p>
          <button onClick={navigateToGallery}>{t('secondBlock.showPicture')}</button>
        </div>
        {!isImageLeft && (
          <div className="section-image">
            <Carousel>
              {imageUrls.map((url, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={url}
                    alt={`${title} ${index}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        )}
      </div>
      )

      }
    </>
    // <div className={`section ${isImageLeft ? 'left' : 'right'}`}>
    //   {isImageLeft && (
    //     <div className="section-image">
    //       <Carousel interval={2000}>
    //         {imageUrls?.length &&
    //           imageUrls.map((url, index) => (
    //             <Carousel.Item key={index}>
    //               <img
    //                 className="d-block w-100"
    //                 src={url}
    //                 alt={`${title} ${index}`}
    //               />
    //             </Carousel.Item>
    //           ))}
    //       </Carousel>
    //     </div>
    //   )}
    //   <div className="section-content">
    //     <h2 className="service-title">{title}</h2>
    //     <p className="service-description">{description}</p>
    //     <button>{t('secondBlock.showPicture')}</button>
    //   </div>
    //   {!isImageLeft && (
    //     <div className="section-image">
    //       <Carousel>
    //         {imageUrls.map((url, index) => (
    //           <Carousel.Item key={index}>
    //             <img
    //               className="d-block w-100"
    //               src={url}
    //               alt={`${title} ${index}`}
    //             />
    //           </Carousel.Item>
    //         ))}
    //       </Carousel>
    //     </div>
    //   )}
    // </div>
  );
};

export default GallerySection;

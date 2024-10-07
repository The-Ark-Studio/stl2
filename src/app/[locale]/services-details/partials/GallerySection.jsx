'use client';
import React from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './gallerySectionStyle.css';
import {useTranslations} from 'next-intl';

const GallerySection = ({title, description, imageUrls, isImageLeft}) => {
  const t = useTranslations('servicePage');
  return (
    <div className={`section ${isImageLeft ? 'left' : 'right'}`}>
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
        <button>{t('secondBlock.showPicture')}</button>
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
  );
};

export default GallerySection;

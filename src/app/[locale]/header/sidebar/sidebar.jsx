"use client"
import Social from '../../socials/page';
import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import ImageFile from '@pub/img/_ONY9838.jpg';
import { useTranslations } from 'next-intl';
import EmailSupport from '@pub/img/icon/emailSupport.svg';
import PhoneRing from '@pub/img/icon/phoneRing.svg';
import Location from '@pub/img/icon/location.svg';

const SideBar = ({ isOpen, setIsOpen }) => {
  const t = useTranslations();
  return (
    <>
      <div
        className={`header__area-menubar-right-sidebar-popup three ${isOpen ? 'active' : ''
          }`}
      >
        <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}>
          <i className="fal fa-times"></i>
        </div>
        <div className="header__area-menubar-right-sidebar-popup-logo">
          <Link href="/">
            <img src="/logo-1.png" alt="logo" />
          </Link>
        </div>
        <p>
          {t('homePage.thirdBlock.description')}
        </p>
        <div className="header__area-menubar-right-box-sidebar-popup-image">
          <img src={ImageFile.src} alt="" />
        </div>
        <div className="header__area-menubar-right-box-sidebar-popup-contact">
          <h4 className="mb-30">{t('footer.contact.title')}</h4>
          <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
              {/* <Image src={PhoneRing.src} alt="Description" width={60} height={60} /> */}
              <i className="fal fa-phone-alt"></i>
            </div>
            <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
              <span>{t('footer.contact.callNow')}</span>
              <h6>
                <Link href={t('footer.contact.phone')}>{t('footer.contact.phone')}</Link>
              </h6>
            </div>
          </div>
          <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
              <Image src={EmailSupport.src} alt="Description" width={50} height={50} />
            </div>
            <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
              <span>{t('footer.contact.quickEmail')}</span>
              <h6>
                <Link href={"mailto:" + t('footer.contact.quickEmail')}>
                  {t('footer.contact.email')}
                </Link>
              </h6>
            </div>
          </div>
          <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
              <i className="fal fa-map-marker-alt"></i>
            </div>
            <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
              <span>{t('footer.contact.officeAddress')}</span>
              <h6>
                <Link href={t('footer.contact.check_map.link')}>
                  {t('footer.contact.address')}
                </Link>
              </h6>
            </div>
          </div>
        </div>
        <div className="header__area-menubar-right-box-sidebar-popup-social">
          <Social />
        </div>
      </div>
      <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
    </>
  );
};

export default SideBar;

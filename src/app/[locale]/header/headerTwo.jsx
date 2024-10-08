'use client';
import {useTranslations, useLocale} from 'next-intl';
import React, {useEffect, useRef, useState} from 'react';
import {Blog, Home, Service, Room} from './Menu';
import DropDown from './DropDown';

import SideBar from './sidebar/sidebar';
// import Search from './sidebar/search';
import BookNow from '@components/book-now/book-now';
import styles from '../assets/css/language.module.css';
// import LanguageIcon from "@/public/img/Language.png";
import LanguageIcon from '../../../../public/img/Language.png';
import {useRouter, usePathname} from 'next/navigation';
import {Link} from '@i18n/routing';

const HeaderTwo = ({variant}) => {
  const t = useTranslations('header');

  const [isPending, startTransition] = React.useTransition();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  //   const [search, setSearch] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const currentPath = usePathname();

  const router = useRouter();

  const localActive = useLocale();

  const handleChangeLanguage = (e) => {
    const {value} = e.target;
    const nextLocale = value;
    const segments = currentPath.split('/');
    const currentLocale = segments;
    const newPath = currentPath.replace(
      `/${currentLocale[1]}`,
      `/${nextLocale}`
    );

    console.log('newPath', newPath);

    // startTransition(() => {
    //   router.replace(newPath);
    // });
  };

  const handleClick = () => {
    console.log('handleClick');
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);
  return (
    <>
      <div className="pb-1 header__area three">
        <div className="container custom__container">
          <div
            className={`header__area-menubar three header__sticky ${
              variant ? variant : ''
            } ${isSticky ? 'header__sticky-sticky-menu' : ''}`}
          >
            <div className="header__area-menubar-left">
              <div className="header__area-menubar-left-logo">
                <Link href="/">
                  <img src="/logo-1.png" alt="logo" />
                </Link>
                <span
                  className={
                    mobileToggle
                      ? 'mobile-menu two mobile-menu-active'
                      : 'mobile-menu two'
                  }
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>
              </div>
            </div>
            <div className="header__area-menubar-right three">
              <div className="header__area-menubar">
                <div className={styles['language-icon-wrap']}>
                  <img
                    src={LanguageIcon.src}
                    width="42"
                    height="42"
                    alt="change langs"
                  />
                  <select
                    id="language-select"
                    onClick={handleClick}
                    defaultValue={localActive}
                    onChange={(e) => handleChangeLanguage(e)}
                  >
                    <option value="en">English</option>
                    <option value="ko">Korean</option>
                  </select>
                </div>
              </div>
              <div className="header__area-menubar-right-menu three menu-responsive">
                <ul
                  className="mobile__menu"
                  style={{display: `${mobileToggle ? 'block' : 'none'}`}}
                >
                  <li className="menu-item-has-children">
                    <a href="/">{t('Nav.intro')}</a>
                    <DropDown>
                      <ul className="sub-menu">
                        <Home />
                      </ul>
                    </DropDown>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/service">{t('Nav.service')}</Link>
                    <DropDown>
                      <ul className="sub-menu">
                        <Service />
                      </ul>
                    </DropDown>
                  </li>
                  <li className="menu-item">
                    <Link href="/gallery">{t('Nav.gallery')}</Link>
                  </li>
                </ul>
              </div>
              <div className="header__area-menubar-right-box">
                <div className="header__area-menubar-right-box-search">
                  <div className="search">
                    {/* <span className="header__area-menubar-right-box-search-icon two open" onClick={() => setSearch(true)}><i className="fal fa-search"></i></span> */}
                    <BookNow />
                  </div>
                  {/* <Search isOpen={search} setIsOpen={setSearch} /> */}
                </div>
                <div className="header__area-menubar-right-sidebar">
                  <div
                    className="header__area-menubar-right-sidebar-popup-icon three"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <i className="fal fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
    </>
  );
};

export default HeaderTwo;

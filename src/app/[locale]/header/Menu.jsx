import { Link } from '../../../i18n/routing';
import { useTranslations } from 'next-intl';
// import Link from 'next/link';
import { Fragment } from 'react';
export const Home = () => {
  const t = useTranslations('header');
  return (
    <Fragment>
      <li>
        <Link href="/about">{t('Nav.about')}</Link>
      </li>
      {/* <li><Link href="/home-two">Home 02</Link></li>
        <li><Link href="/home-three">Home 03</Link></li> */}
    </Fragment>
  );
};
export const Service = () => {
  const t = useTranslations('header');
  return (
    <Fragment>
      <li>
        <Link href="/faqs">{t('Nav.faqs')}</Link>
      </li>
      <li>
        <Link href="/contact">{t('Nav.contact')}</Link>
      </li>
      <li>
        <Link href="/partnership">{t('Nav.partnerShip')}</Link>
      </li>
      {/* <li><Link href="/404-error">404 Page</Link></li> */}
    </Fragment>
  );
};
export const Room = () => (
  <Fragment>
    <li>
      <Link href="/room-style">Room Style</Link>
    </li>
    <li>
      <Link href="/room-modern">Room Modern</Link>
    </li>
    <li>
      <Link href="/room-list">Room List</Link>
    </li>
    <li>
      <Link href="/room-details">Room Details</Link>
    </li>
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    <li>
      <Link href="/blog-grid">Blog Grid</Link>
    </li>
    <li>
      <Link href="/blog-standard">Blog Standard</Link>
    </li>
    <li>
      <Link href="/blog-details/1">Blog Details</Link>
    </li>
  </Fragment>
);

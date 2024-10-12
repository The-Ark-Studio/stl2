import React from 'react';
import styles from './booknow.module.css';
import { useTranslations, useLocale } from 'next-intl';

const BookNow = () => {
    const t = useTranslations('header');
    const locale = useLocale();
    const bookingURL = `https://booking.stl.sg/${locale}/`;

    const handleClick = () => {
        window.location.href = bookingURL;
    };

    return (
        <button
            onClick={handleClick}
            className={styles['book-now-button']}
        >
            {t('booking_button')}
        </button>
    );
};

export default BookNow;

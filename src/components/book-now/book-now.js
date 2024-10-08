import React from 'react';
import styles from '@/app/[locale]/assets/css/booknow.module.css';
import { useTranslations } from 'next-intl';

const BookNow = () => {
    const t = useTranslations('header');
    const handleClick = () => {
        window.location.href = 'https://booking.stl.com';
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

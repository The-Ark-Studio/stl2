import React from 'react';
import styles from '@/app/[locale]/assets/css/booknow.module.css';

const BookNow = () => {
    const handleClick = () => {
        window.location.href = 'https://booking.stl.com';
    };

    return (
        <button
            onClick={handleClick}
            className={styles['book-now-button']}
        >
            BOOK NOW!
        </button>
    );
};

export default BookNow;

import Link from "next/link";
import { Fragment } from "react";
export const Home = () => (
    <Fragment>
        <li><Link href="/about">About Us</Link></li>
        {/* <li><Link href="/home-two">Home 02</Link></li>
        <li><Link href="/home-three">Home 03</Link></li> */}
    </Fragment>
);
export const Service = () => (
    <Fragment>
        <li><Link href="/faqs">FAQs</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/partner">Partnership</Link></li>
        {/* <li><Link href="/404-error">404 Page</Link></li> */}
    </Fragment>
);
export const Room = () => (
    <Fragment>
        <li><Link href="/room-style">Room Style</Link></li>
        <li><Link href="/room-modern">Room Modern</Link></li>
        <li><Link href="/room-list">Room List</Link></li>
        <li><Link href="/room-details">Room Details</Link></li>
    </Fragment>
);
export const Blog = () => (
    <Fragment>
        <li><Link href="/blog-grid">Blog Grid</Link></li>
        <li><Link href="/blog-standard">Blog Standard</Link></li>
        <li><Link href="/blog-details/1">Blog Details</Link></li>
    </Fragment>
);

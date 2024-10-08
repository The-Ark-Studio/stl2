import { useTranslations } from "next-intl";
import Golf from "@pub/img/home/golf.webp";
import Hotel from "@pub/img/home/hotel.webp";
import Villa from "@pub/img/home/villa.webp";
import CarRental from "@pub/img/home/carRental.webp";
import AirBnb from "@pub/img/home/airbnb.webp";
import TourPackages from "@pub/img/home/tourPackage.webp";

const TravelBookingServices = () => {
    const t = useTranslations('homePage.fourthBlock');

    const TravelBookingServicesList = [
        {
            "id": "1",
            "img": Golf.src,
            "title": t('golfBooking')
        },
        {
            "id": "2",
            "img": Hotel.src,
            "title": t('hotelBooking')
        },
        {
            "id": "3",
            "img": Villa.src,
            "title": t('villaBooking')
        },
        {
            "id": "4",
            "img": CarRental.src,
            "title": t('carRental')
        },
        {
            "id": "5",
            "img": AirBnb.src,
            "title": t('airbnb')
        },
        {
            "id": "6",
            "img": TourPackages.src,
            "title": t('tourPackages')
        },
    ]

    return (
        <div className="blog__grid section-padding" id="blog-grid">
            <div className="container">
                <div className="blog__area-title">
                    <h2>{t('travelBooking')}</h2>
                </div>
                <div className="row">
                    {TravelBookingServicesList?.map((data, id) => (
                        <>
                            <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={id}>
                                <div className="blog__two-item">
                                    <div className="blog__two-item-image">
                                        <img src={data.img} alt="image" />
                                        {/* <div className="blog__two-item-image-date">
                          <h5>{data.date}</h5>
                          <span>{data.month}</span>
                      </div> */}
                                    </div>
                                    <div className="blog__two-item-content">
                                        {/* <h6>Post by - {data.postby}</h6> */}
                                        {/* <h4 style={{ marginBottom: "none !important" }}><a href={`/blog-details/${data.id}`}>{data.title}</a></h4> */}
                                        <h4>
                                            {data.title}
                                        </h4>
                                        {/* <a className="simple-btn" href={`/blog-details/${data.id}`}><i className="far fa-chevron-right"></i>Read More</a> */}
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default TravelBookingServices;

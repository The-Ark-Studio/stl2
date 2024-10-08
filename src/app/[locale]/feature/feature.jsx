import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import ImageBanner from "@pub/img/home/_ONY9901.jpg"
import { useTranslations } from "next-intl";

export default function Feature() {
  const t = useTranslations('homePage.thirdBlock')
  return (
    <div className="feature__area">
      <div className="custom-container">
        <div className="row align-items-center bg-left mb-60 flex justify-between">
          <div className="col-xl-6 col-lg-6">
            {/* <div className="feature__area-image image-container">
              <Image
                alt=""
                src={ImageBanner.src}
                width={600}
                height={600}
                className="curved-image" // Thêm class để áp dụng CSS
              />
            </div> */}
            <div className="feature__area-image image-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <defs>
                  <clipPath id="blob">
                    <path d="M100.016,7.3972C90.2452,1.22,73.3084-3.6663,64.4255,3.7126,56.9836,9.89,62.0469,18.9174,55.01,25.3032c-10.6,9.6134-28.1589-5.4423-41.8584,2.6318C.6757,35.2543-4.2791,59.1489,4.2781,73.7975c13.1369,22.524,53.13,13.8541,61.1936,12.1061,4.5007-.9931,53.4953-12.265,55.4693-42.7043C121.898,28.2528,111.1,14.4185,100.016,7.3972Z" />
                  </clipPath>
                </defs>
                <image
                  href={ImageBanner.src}
                  x="-50%"
                  y="-60%"
                  width="200"
                  height="200"
                  clip-path="url(#blob)"
                  className="curved-image"
                  style={{ transform: "translate(-5%, 0%)" }} // Để căn giữa
                />
              </svg>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-left">
              <div className="feature__area-left-title">
                {/* <span className="subtitle__one">Our Food</span> */}
                <h2>{t('header')}</h2>
                <p>
                  {t('description')}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row align-items-center bg-right mb-60 flex justify-between">
          <div className="col-xl-6 col-lg-6  order-last order-lg-first">
            <div className="feature__area-left">
              <div className="feature__area-left-title">
                <span className="subtitle__one">Read Our Books</span>
                <h2>The Library</h2>
                <p>
                  Proin massa augue, lacinia at blandit ac, fringilla
                  scelerisque tortor. Mauris sit amet lectus porta,
                </p>
                <Link className="theme-border-btn" href="/about">
                  Read More <FaArrowRight className="ml-10" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                src="/img/features/feature-2.jpg"
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}

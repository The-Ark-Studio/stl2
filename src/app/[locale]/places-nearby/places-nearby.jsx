
"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TanSonNhatAirport from "@pub/img/home/tanSonNhat.webp";
import TurtleLake from "@pub/img/home/turtleLake.webp";
import IndependencePalace from "@pub/img/home/independencePalace.webp";
import DucBaCathedral from "@pub/img/home/ducBaCathedral.webp";
import CityPostOffice from "@pub/img/home/cityPostOffice.webp";
import HoChiMinhOperaHouree from "@pub/img/home/hcmOperaHouse.webp";
import SaigonCentre from "@pub/img/home/saigonCentre.webp";
import SaigonBookStreet from "@pub/img/home/saigonBookStreet.webp";
import HoChiMinhCityMuseum from "@pub/img/home/hcmMeseum.webp";
import TranHungDaoStatue from "@pub/img/home/tranHungDaoStatue.webp";
import WarRemnetsMuseum from "@pub/img/home/warRemnetsMuseum.webp";
import HoChiMinhCampaigMuseum from "@pub/img/home/hcmCampaignMuseum.webp";
import DiamondPlaza from "@pub/img/home/diamondPlaza.webp";
import VincomDongKhoi from "@pub/img/home/vincomDongKhoi.webp";
import BenThanhMarket from "@pub/img/home/benThanhMarket.webp";

export default function PlacesNearBy() {
  const t = useTranslations('homePage.fifthBlock')
  const placesNearByList = [
    {
      "id": "1",
      "img": TurtleLake.src,
      "title": t('turtleLake'),
      "distances": "6.0km",
    },
    {
      "id": "2",
      "img": IndependencePalace.src,
      "title": t('independencePalace'),
      "distances": "1.3km",
    },
    {
      "id": "3",
      "img": DucBaCathedral.src,
      "title": t('ducBaCathedral'),
      "distances": "1.4km",
    },
    {
      "id": "5",
      "img": HoChiMinhOperaHouree.src,
      "title": t('hoChiMinhOperaHouse'),
      "distances": "1.9km",
    },
    {
      "id": "6",
      "img": SaigonCentre.src,
      "title": t('saigonCentre'),
      "distances": "2.1km",
    },
    {
      "id": "7",
      "img": SaigonBookStreet.src,
      "title": t('saigonBookStreet'),
      "distances": "1.4km",
    },
    {
      "id": "8",
      "img": HoChiMinhCityMuseum.src,
      "title": t('hoChiMinhCityMuseum'),
      "distances": "1.7km",
    },
    {
      "id": "9",
      "img": TranHungDaoStatue.src,
      "title": t('tranHungDaoStatue'),
      "distances": "2.4km",
    },
    {
      "id": "10",
      "img": WarRemnetsMuseum.src,
      "title": t('warRemnetsMuseum'),
      "distances": "1.1km",
    },
    {
      "id": "11",
      "img": HoChiMinhCampaigMuseum.src,
      "title": t('hoChiMinhCityCampaignMuseum'),
      "distances": "2.1km",
    },
    {
      "id": "12",
      "img": DiamondPlaza.src,
      "title": t('diamondPlaza'),
      "distances": "1.8km",
    },
    {
      "id": "13",
      "img": VincomDongKhoi.src,
      "title": t('vincomDongKhoi'),
      "distances": "2.3km",
    }
  ];
  const cityPost = {
    "id": "4",
    "img": CityPostOffice.src,
    "title": t('cityPostOffice'),
    "distances": "1.3km",
  };
  const tanSonNhat = {
    "id": "13",
    "img": TanSonNhatAirport.src,
    "title": t('tanSonNhatAirport'),
    "distances": "6.0km",
  };
  const benThanh = {
    "id": "13",
    "img": BenThanhMarket.src,
    "title": t('benThanhMarket'),
    "distances": "2.2km",
  };
  const [active, setActive] = useState(1);
  const handelActive = (index) => {
    setActive(index);
  };

  return (
    <div className="blog__grid section-padding" id="blog-grid">
      <div className="container">
        <div className="blog__area-title">
          <h2>{t('placesNearby')}</h2>
        </div>
        <div className="row">
          <div className="blog__two-item" style={{ borderRadius: '15px', overflow: 'hidden' }}>
            <div className="blog__two-item-image">
              <img src={tanSonNhat.img} alt="image" />
            </div>
            <div className="blog__two-item-content">
              <h6>{tanSonNhat.distances}</h6>
              <h4>
                {tanSonNhat.title}
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {placesNearByList?.map((data, id) => (
            data.id === "3" ?
              <>
                <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={id}>
                  <div className="row">
                    <div className="blog__two-item" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                      <div className="blog__two-item-image">
                        <img src={data.img} alt="image" />
                      </div>
                      <div className="blog__two-item-content">
                        <h6>{data.distances}</h6>
                        <h4 style={{ marginBottom: "-5px" }}>
                          {data.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="blog__two-item" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                      <div className="blog__two-item-image">
                        <img src={cityPost.img} alt="image" />
                      </div>
                      <div className="blog__two-item-content">
                        <h6>{cityPost.distances}</h6>
                        <h4 style={{ marginBottom: "-5px" }}>
                          {cityPost.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                </div>
              </>
              :
              <>
                <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={id}>
                  <div className="blog__two-item" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                    <div className="blog__two-item-image">
                      <img src={data.img} alt="image" />
                    </div>
                    <div className="blog__two-item-content">
                      <h6>{data.distances}</h6>
                      <h4>
                        {data.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </>
          ))}
        </div>
        <div className="row">
          <div className="blog__two-item" style={{ borderRadius: '15px', overflow: 'hidden' }}>
            <div className="blog__two-item-image">
              <img src={benThanh.img} alt="image" />
            </div>
            <div className="blog__two-item-content">
              <h6>{benThanh.distances}</h6>
              <h4>
                {benThanh.title}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

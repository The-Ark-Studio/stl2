'use client';
import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GalleryImages from './partials/GalleryImages';
import './style/galleryStyle.css';
import Lobby1 from '@pub/img/lobby/ONY9877.jpg';
import Lobby2 from '@pub/img/lobby/ONY9880.jpg';
import Lobby3 from '@pub/img/lobby/ONY9883.jpg';
import Lobby4 from '@pub/img/lobby/ONY9884.jpg';
import Lobby5 from '@pub/img/lobby/ONY9892.jpg';
import Lobby6 from '@pub/img/lobby/ONY9897.jpg';
import Lobby7 from '@pub/img/lobby/ONY9898.jpg';
import Lobby8 from '@pub/img/lobby/ONY9899.jpg';
import Cafeteria1 from '@pub/img/cafeteria/ONY9900.jpg';
import Cafeteria2 from '@pub/img/cafeteria/ONY9900.jpg';
import Cafeteria3 from '@pub/img/cafeteria/ONY9903.jpg';
import Cafeteria4 from '@pub/img/cafeteria/ONY9907.jpg';
import Cafeteria5 from '@pub/img/cafeteria/ONY9908.jpg';
import Cafeteria6 from '@pub/img/cafeteria/ONY9912.jpg';
import Cafeteria7 from '@pub/img/cafeteria/ONY9920.jpg';
import Cafeteria8 from '@pub/img/cafeteria/ONY9921.jpg';
import Cafeteria9 from '@pub/img/cafeteria/ONY9922.jpg';
import Cafeteria10 from '@pub/img/cafeteria/ONY9967.jpg';

import Restaurant1 from '@pub/img/restaurant/ONY9741.jpg';
import Restaurant2 from '@pub/img/restaurant/ONY9745.jpg';
import Restaurant3 from '@pub/img/restaurant/ONY9747.jpg';
import Restaurant4 from '@pub/img/restaurant/ONY9748.jpg';
import Restaurant5 from '@pub/img/restaurant/ONY9753.jpg';
import Restaurant6 from '@pub/img/restaurant/ONY9755.jpg';
import Restaurant7 from '@pub/img/restaurant/ONY9757.jpg';
import Restaurant8 from '@pub/img/restaurant/ONY9758.jpg';
import Restaurant9 from '@pub/img/restaurant/ONY9760.jpg';
import Restaurant10 from '@pub/img/restaurant/ONY9761.jpg';
import Restaurant11 from '@pub/img/restaurant/ONY9762.jpg';
import Restaurant12 from '@pub/img/restaurant/ONY9764.jpg';
import Restaurant13 from '@pub/img/restaurant/ONY9765.jpg';
import Restaurant14 from '@pub/img/restaurant/ONY9768.jpg';
import Restaurant15 from '@pub/img/restaurant/ONY9770.jpg';
import Restaurant16 from '@pub/img/restaurant/ONY9771.jpg';
import Restaurant17 from '@pub/img/restaurant/ONY9773.jpg';
import Restaurant18 from '@pub/img/restaurant/ONY9774.jpg';
import Restaurant19 from '@pub/img/restaurant/ONY9781.jpg';
import Restaurant20 from '@pub/img/restaurant/ONY9784.jpg';
import Restaurant21 from '@pub/img/restaurant/ONY9809.jpg';
import Restaurant22 from '@pub/img/restaurant/ONY9812.jpg';
import Restaurant23 from '@pub/img/restaurant/ONY9928.jpg';
import Restaurant24 from '@pub/img/restaurant/ONY9929.jpg';
import Restaurant25 from '@pub/img/restaurant/ONY9931.jpg';

import Bathroom1 from '@pub/img/bathroom/ONY9932.jpg';
import Bathroom2 from '@pub/img/bathroom/ONY9934.jpg';
import Bathroom3 from '@pub/img/bathroom/ONY9935.jpg';
import Bathroom4 from '@pub/img/bathroom/ONY9937.jpg';
import Bathroom5 from '@pub/img/bathroom/ONY9938.jpg';
import Bathroom6 from '@pub/img/bathroom/ONY9941.jpg';
import Bathroom7 from '@pub/img/bathroom/ONY9942.jpg';
import Bathroom8 from '@pub/img/bathroom/ONY9943.jpg';
import Bathroom9 from '@pub/img/bathroom/ONY9944.jpg';

import FemaleSleepingRoom1 from '@pub/img/femaleSleepingRoom/ONY9956.jpg';
import FemaleSleepingRoom2 from '@pub/img/femaleSleepingRoom/ONY9957.jpg';
import FemaleSleepingRoom3 from '@pub/img/femaleSleepingRoom/ONY9958.jpg';
import FemaleSleepingRoom4 from '@pub/img/femaleSleepingRoom/ONY9959.jpg';
import FemaleSleepingRoom5 from '@pub/img/femaleSleepingRoom/ONY9963.jpg';
import FemaleSleepingRoom6 from '@pub/img/femaleSleepingRoom/ONY9964.jpg';

import Manicure1 from '@pub/img/manicure/nail1.webp';
import Manicure2 from '@pub/img/manicure/nail2.webp';

import MaleSleepingRoom1 from '@pub/img/maleSleepingRoom/ONY9945.jpg';
import MaleSleepingRoom2 from '@pub/img/maleSleepingRoom/ONY9946.jpg';
import MaleSleepingRoom3 from '@pub/img/maleSleepingRoom/ONY9947.jpg';
import MaleSleepingRoom4 from '@pub/img/maleSleepingRoom/ONY9948.jpg';
import MaleSleepingRoom5 from '@pub/img/maleSleepingRoom/ONY9949.jpg';
import MaleSleepingRoom6 from '@pub/img/maleSleepingRoom/ONY9950.jpg';
import MaleSleepingRoom7 from '@pub/img/maleSleepingRoom/ONY9952.jpg';
import MaleSleepingRoom8 from '@pub/img/maleSleepingRoom/ONY9954.jpg';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const GalleryPage = () => {
  const t = useTranslations('gallery');
  const [key, setKey] = useState('building');

  const title1 = t('firstBlock.building');

  const tabItems = [
    {
      eventKey: 'building',
      title: title1,
      imageUrls: [
        Lobby1.src,
        Lobby2.src,
        Lobby3.src,
        Lobby4.src,
        Lobby5.src,
        Lobby6.src,
        Lobby7.src,
        Lobby8.src,
      ],
    },
    {
      eventKey: 'lobby',
      title: t('firstBlock.lobby'),
      imageUrls: [
        Lobby1.src,
        Lobby2.src,
        Lobby3.src,
        Lobby4.src,
        Lobby5.src,
        Lobby6.src,
        Lobby7.src,
        Lobby8.src,
      ],
    },
    {
      eventKey: 'cafeteria',
      title: t('firstBlock.cafeteria'),
      imageUrls: [
        Cafeteria1.src,
        Cafeteria2.src,
        Cafeteria3.src,
        Cafeteria4.src,
        Cafeteria5.src,
        Cafeteria6.src,
        Cafeteria7.src,
        Cafeteria8.src,
        Cafeteria9.src,
        Cafeteria10.src,
      ],
    },
    {
      eventKey: 'buffet',
      title: t('firstBlock.buffet'),
      imageUrls: [
        Restaurant1.src,
        Restaurant2.src,
        Restaurant3.src,
        Restaurant4.src,
        Restaurant5.src,
        Restaurant6.src,
        Restaurant7.src,
        Restaurant8.src,
        Restaurant9.src,
        Restaurant10.src,
        Restaurant11.src,
        Restaurant12.src,
        Restaurant13.src,
        Restaurant14.src,
        Restaurant15.src,
        Restaurant16.src,
        Restaurant17.src,
        Restaurant18.src,
        Restaurant19.src,
        Restaurant20.src,
        Restaurant21.src,
        Restaurant22.src,
        Restaurant23.src,
        Restaurant24.src,
        Restaurant25.src,
      ],
    },
    {
      eventKey: 'bathroom',
      title: t('firstBlock.bathroom'),
      imageUrls: [
        Bathroom1.src,
        Bathroom2.src,
        Bathroom3.src,
        Bathroom4.src,
        Bathroom5.src,
        Bathroom6.src,
        Bathroom7.src,
        Bathroom8.src,
        Bathroom9.src,
      ],
    },
    {
      eventKey: 'femaleSleepingRoom',
      title: t('firstBlock.femaleSleepingRoom'),
      imageUrls: [
        FemaleSleepingRoom1.src,
        FemaleSleepingRoom2.src,
        FemaleSleepingRoom3.src,
        FemaleSleepingRoom4.src,
        FemaleSleepingRoom5.src,
        FemaleSleepingRoom6.src,
      ],
    },
    {
      eventKey: 'manicureAndMassage',
      title: t('firstBlock.manicureAndMassage'),
      imageUrls: [],
    },
    {
      eventKey: 'maleSleepingRoom',
      title: t('firstBlock.maleSleepingRoom'),
      imageUrls: [
        MaleSleepingRoom1.src,
        MaleSleepingRoom2.src,
        MaleSleepingRoom3.src,
        MaleSleepingRoom4.src,
        MaleSleepingRoom5.src,
        MaleSleepingRoom6.src,
        MaleSleepingRoom7.src,
        MaleSleepingRoom8.src,
      ],
    },
  ];

  return (
    <div id="gallery-section">
      <div className="container gallery-container">
        <div className="row">
          <div className="col-auto">
            <Tabs
              id="controlled-tab-gallery"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-5"
            >
              {tabItems.length &&
                tabItems.map((tab) => (
                  <Tab
                    eventKey={tab.eventKey}
                    title={tab.title}
                    key={tab.eventKey}
                  >
                    <GalleryImages imageUrls={tab.imageUrls} />
                  </Tab>
                ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;

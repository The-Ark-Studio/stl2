// 'use client';
// import Link from 'next/link';
// import GallerySection from '@app/[locale]/service/partials/GallerySection';
// import Lobby1 from '../../../../public/img/lobby/ONY9877.jpg';
// import Lobby2 from '../../../../public/img/lobby/ONY9880.jpg';
// import Lobby3 from '../../../../public/img/lobby/ONY9883.jpg';
// import Lobby4 from '../../../../public/img/lobby/ONY9884.jpg';
// import Lobby5 from '../../../../public/img/lobby/ONY9892.jpg';
// import Lobby6 from '../../../../public/img/lobby/ONY9897.jpg';
// import Lobby7 from '../../../../public/img/lobby/ONY9898.jpg';
// import Lobby8 from '../../../../public/img/lobby/ONY9899.jpg';
// import Cafeteria1 from '../../../../public/img/cafeteria/ONY9900.jpg';
// import Cafeteria2 from '../../../../public/img/cafeteria/ONY9900.jpg';
// import Cafeteria3 from '../../../../public/img/cafeteria/ONY9903.jpg';
// import Cafeteria4 from '../../../../public/img/cafeteria/ONY9907.jpg';
// import Cafeteria5 from '../../../../public/img/cafeteria/ONY9908.jpg';
// import Cafeteria6 from '../../../../public/img/cafeteria/ONY9912.jpg';
// import Cafeteria7 from '../../../../public/img/cafeteria/ONY9920.jpg';
// import Cafeteria8 from '../../../../public/img/cafeteria/ONY9921.jpg';
// import Cafeteria9 from '../../../../public/img/cafeteria/ONY9922.jpg';
// import Cafeteria10 from '../../../../public/img/cafeteria/ONY9967.jpg';

// import Restaurant1 from '../../../../public/img/restaurant/ONY9741.jpg';
// import Restaurant2 from '../../../../public/img/restaurant/ONY9745.jpg';
// import Restaurant3 from '../../../../public/img/restaurant/ONY9747.jpg';
// import Restaurant4 from '../../../../public/img/restaurant/ONY9748.jpg';
// import Restaurant5 from '../../../../public/img/restaurant/ONY9753.jpg';
// import Restaurant6 from '../../../../public/img/restaurant/ONY9755.jpg';
// import Restaurant7 from '../../../../public/img/restaurant/ONY9757.jpg';
// import Restaurant8 from '../../../../public/img/restaurant/ONY9758.jpg';
// import Restaurant9 from '../../../../public/img/restaurant/ONY9760.jpg';
// import Restaurant10 from '../../../../public/img/restaurant/ONY9761.jpg';
// import Restaurant11 from '../../../../public/img/restaurant/ONY9762.jpg';
// import Restaurant12 from '../../../../public/img/restaurant/ONY9764.jpg';
// import Restaurant13 from '../../../../public/img/restaurant/ONY9765.jpg';
// import Restaurant14 from '../../../../public/img/restaurant/ONY9768.jpg';
// import Restaurant15 from '../../../../public/img/restaurant/ONY9770.jpg';
// import Restaurant16 from '../../../../public/img/restaurant/ONY9771.jpg';
// import Restaurant17 from '../../../../public/img/restaurant/ONY9773.jpg';
// import Restaurant18 from '../../../../public/img/restaurant/ONY9774.jpg';
// import Restaurant19 from '../../../../public/img/restaurant/ONY9781.jpg';
// import Restaurant20 from '../../../../public/img/restaurant/ONY9784.jpg';
// import Restaurant21 from '../../../../public/img/restaurant/ONY9809.jpg';
// import Restaurant22 from '../../../../public/img/restaurant/ONY9812.jpg';
// import Restaurant23 from '../../../../public/img/restaurant/ONY9928.jpg';
// import Restaurant24 from '../../../../public/img/restaurant/ONY9929.jpg';
// import Restaurant25 from '../../../../public/img/restaurant/ONY9931.jpg';

// import Bathroom1 from '../../../../public/img/bathroom/ONY9932.jpg';
// import Bathroom2 from '../../../../public/img/bathroom/ONY9934.jpg';
// import Bathroom3 from '../../../../public/img/bathroom/ONY9935.jpg';
// import Bathroom4 from '../../../../public/img/bathroom/ONY9937.jpg';
// import Bathroom5 from '../../../../public/img/bathroom/ONY9938.jpg';
// import Bathroom6 from '../../../../public/img/bathroom/ONY9941.jpg';
// import Bathroom7 from '../../../../public/img/bathroom/ONY9942.jpg';
// import Bathroom8 from '../../../../public/img/bathroom/ONY9943.jpg';
// import Bathroom9 from '../../../../public/img/bathroom/ONY9944.jpg';

// import FemaleSleepingRoom1 from '../../../../public/img/femaleSleepingRoom/ONY9956.jpg';
// import FemaleSleepingRoom2 from '../../../../public/img/femaleSleepingRoom/ONY9957.jpg';
// import FemaleSleepingRoom3 from '../../../../public/img/femaleSleepingRoom/ONY9958.jpg';
// import FemaleSleepingRoom4 from '../../../../public/img/femaleSleepingRoom/ONY9959.jpg';
// import FemaleSleepingRoom5 from '../../../../public/img/femaleSleepingRoom/ONY9963.jpg';
// import FemaleSleepingRoom6 from '../../../../public/img/femaleSleepingRoom/ONY9964.jpg';

// import Manicure1 from '../../../../public/img/manicure/nail1.webp';
// import Manicure2 from '../../../../public/img/manicure/nail2.webp';

// import MaleSleepingRoom1 from '../../../../public/img/maleSleepingRoom/ONY9945.jpg';
// import MaleSleepingRoom2 from '../../../../public/img/maleSleepingRoom/ONY9946.jpg';
// import MaleSleepingRoom3 from '../../../../public/img/maleSleepingRoom/ONY9947.jpg';
// import MaleSleepingRoom4 from '../../../../public/img/maleSleepingRoom/ONY9948.jpg';
// import MaleSleepingRoom5 from '../../../../public/img/maleSleepingRoom/ONY9949.jpg';
// import MaleSleepingRoom6 from '../../../../public/img/maleSleepingRoom/ONY9950.jpg';
// import MaleSleepingRoom7 from '../../../../public/img/maleSleepingRoom/ONY9952.jpg';
// import MaleSleepingRoom8 from '../../../../public/img/maleSleepingRoom/ONY9954.jpg';

// import './style/serviceStyle.css';
// import {useTranslations} from 'next-intl';
// const ServicesDetails = () => {
//   const t = useTranslations('servicePage');
//   const sections = [
//     {
//       title: `${t('secondBlock.lobbyArea1f')}`,
//       description: t('secondBlock.description'),
//       imageUrls: [
//         Lobby1.src,
//         Lobby2.src,
//         Lobby3.src,
//         Lobby4.src,
//         Lobby5.src,
//         Lobby6.src,
//         Lobby7.src,
//         Lobby8.src,
//       ],
//     },
//     {
//       title: t('thirdBlock.cafeteria2f'),
//       description: t('thirdBlock.description'),
//       imageUrls: [
//         Cafeteria1.src,
//         Cafeteria2.src,
//         Cafeteria3.src,
//         Cafeteria4.src,
//         Cafeteria5.src,
//         Cafeteria6.src,
//         Cafeteria7.src,
//         Cafeteria8.src,
//         Cafeteria9.src,
//         Cafeteria10.src,
//       ],
//     },
//     {
//       title: t('fourthBlock.buffet3f'),
//       description: t('fourthBlock.description'),
//       imageUrls: [
//         Restaurant1.src,
//         Restaurant2.src,
//         Restaurant3.src,
//         Restaurant4.src,
//         Restaurant5.src,
//         Restaurant6.src,
//         Restaurant7.src,
//         Restaurant8.src,
//         Restaurant9.src,
//         Restaurant10.src,
//         Restaurant11.src,
//         Restaurant12.src,
//         Restaurant13.src,
//         Restaurant14.src,
//         Restaurant15.src,
//         Restaurant16.src,
//         Restaurant17.src,
//         Restaurant18.src,
//         Restaurant19.src,
//         Restaurant20.src,
//         Restaurant21.src,
//         Restaurant22.src,
//         Restaurant23.src,
//         Restaurant24.src,
//         Restaurant25.src,
//       ],
//     },
//     {
//       title: t('fifthBlock.bathroom4f'),
//       description: t('fifthBlock.description'),
//       imageUrls: [
//         Bathroom1.src,
//         Bathroom2.src,
//         Bathroom3.src,
//         Bathroom4.src,
//         Bathroom5.src,
//         Bathroom6.src,
//         Bathroom7.src,
//         Bathroom8.src,
//         Bathroom9.src,
//       ],
//     },
//     {
//       title: t('sixthBlock.femaleSleepingRoom5f'),
//       description: t('sixthBlock.description'),
//       imageUrls: [
//         FemaleSleepingRoom1.src,
//         FemaleSleepingRoom2.src,
//         FemaleSleepingRoom3.src,
//         FemaleSleepingRoom4.src,
//         FemaleSleepingRoom5.src,
//         FemaleSleepingRoom6.src,
//       ],
//     },
//     {
//       title: t('seventhBlock.manicureAndMassage6f'),
//       description: t('seventhBlock.description'),
//       imageUrls: [Manicure1.src, Manicure2.src],
//     },
//     {
//       title: t('eighthBlock.maleSleepingRoom7f'),
//       description: t('eighthBlock.description'),
//       imageUrls: [
//         MaleSleepingRoom1.src,
//         MaleSleepingRoom2.src,
//         MaleSleepingRoom3.src,
//         MaleSleepingRoom4.src,
//         MaleSleepingRoom5.src,
//         MaleSleepingRoom6.src,
//         MaleSleepingRoom7.src,
//         MaleSleepingRoom8.src,
//       ],
//     },
//   ];

//   return (
//     <div id="servers-section" className="services__details section-padding">
//       <div className="service__container container-fluid bg-service ">
//         <div className="my-2 service__top-contain">
//           <div className="text-center row service__top-contain">
//             <div className="my-3 col-6 col-md-3 service__top-item">
//               <div className="p-3 rounded bg-service top-item-wrap">
//                 <i className="fa fa-shower fa-2x" aria-hidden="true"></i>
//                 <p>{t('firstBlock.showerService')}</p>
//               </div>
//             </div>
//             <div className="my-3 col-6 col-md-3 service__top-item">
//               <div className="p-3 rounded bg-service top-item-wrap">
//                 <i className="fa fa-coffee fa-2x" aria-hidden="true"></i>
//                 <p>{t('firstBlock.cafeteria')}</p>
//               </div>
//             </div>
//             <div className="my-3 col-6 col-md-3 service__top-item">
//               <div className="p-3 rounded bg-service top-item-wrap">
//                 <i className="fa fa-wifi fa-2x" aria-hidden="true"></i>
//                 <p>{t('firstBlock.freeWifi')}</p>
//               </div>
//             </div>
//             <div className="my-3 col-6 col-md-3 service__top-item">
//               <div className="p-3 rounded bg-service top-item-wrap">
//                 <i
//                   className="fas fa-hand-sparkles fa-2x"
//                   aria-hidden="true"
//                 ></i>
//                 <p>{t('firstBlock.nailServices')}</p>
//               </div>
//             </div>
//             <div className="my-3 col-6 col-md-3 service__top-item">
//               <div className="p-3 rounded bg-service top-item-wrap">
//                 <i className="fas fa-tv fa-2x" aria-hidden="true"></i>
//                 <p>{t('firstBlock.bigScreenTv')}</p>
//               </div>
//             </div>
//             <div className="my-3 col-6 col-md-3 service__top-item">
//               <div className="p-3 rounded bg-service top-item-wrap">
//                 <i
//                   className="fas fa-concierge-bell fa-2x"
//                   aria-hidden="true"
//                 ></i>
//                 <p>{t('firstBlock.freeBuffetRestaurant')}</p>
//               </div>
//             </div>
//             <div className="my-3 col-6 col-md-3 service__top-item">
//               <div className="p-3 rounded bg-service top-item-wrap">
//                 <i className="fa fa-spa fa-2x" aria-hidden="true"></i>
//                 <p>{t('firstBlock.massageService')}</p>
//               </div>
//             </div>
//             <div className="my-3 col-6 col-md-3 service__top-item">
//               <div className="p-3 rounded bg-service top-item-wrap">
//                 <i className="fa fa-bed fa-2x" aria-hidden="true"></i>
//                 <p>{t('firstBlock.sleepingRoom')}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* content */}
//       <div className="container pb-1 service__container">
//         <div className="row">
//           <div className="service-content">
//             <h1 className="service__title service-title">
//               {t('secondBlock.facilitiesAndAmenities')}
//             </h1>
//             {sections.length &&
//               sections.map((section, index) => {
//                 return (
//                   <GallerySection
//                     key={index}
//                     title={section?.title}
//                     description={section?.description}
//                     imageUrls={section?.imageUrls}
//                     isImageLeft={(index + 2) % 2 === 0}
//                   />
//                 );
//               })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesDetails;

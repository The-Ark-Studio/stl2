import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
  FaDollarSign,
  FaPlane,
  FaBus,
  FaFlag,
  FaAmbulance,
  FaTransgender,
  FaVolumeMute,
  FaMoneyBillWave,
  FaSmokingBan,
  FaRegEyeSlash,
  FaMoneyCheck,
} from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs';
import { FaHandFist } from 'react-icons/fa6';
import FreedomLanguage from '@pub/img/icon/STL-icon-02.svg';
import WereOne from '@pub/img/icon/STL-icon-01.svg';
import { ChatDots, Handbag } from 'react-bootstrap-icons';

import '../style/aboutStyle.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
const AboutScreen = () => {
  const t = useTranslations('aboutUs');

  const aboutServices = [
    {
      icon: <FaDollarSign size={50} />,
      title: t('secondBlock.budget.header'),
      description: t('secondBlock.budget.description'),
    },
    {
      icon: <FaPlane size={50} />,
      title: t('secondBlock.travelTrend.header'),
      description: t('secondBlock.travelTrend.description'),
    },
    {
      icon: <FaBus size={50} />,
      title: t('secondBlock.transportation.header'),
      description: t('secondBlock.transportation.description'),
    },
    {
      icon: <Image src={WereOne.src} alt="freedom language" width={60} height={60} />,
      title: t('secondBlock.wereOne.header'),
      description: t('secondBlock.wereOne.description'),
    },
    {
      icon: <Image src={FreedomLanguage.src} alt="freedom language" width={60} height={60} />,
      title: t('secondBlock.freedomLanguage.header'),
      description: t('secondBlock.freedomLanguage.description'),
    },
    {
      icon: <FaAmbulance size={60} />,
      title: t('secondBlock.emerrgencySupport.header'),
      description: t('secondBlock.emerrgencySupport.description'),
    },
  ];

  const aboutRegulations = [
    {
      icon: <FaTransgender size={50} />,
      title: t('thirdBlock.title1'),
      description: t('thirdBlock.description1'),
    },
    {
      icon: <FaVolumeMute size={50} />,
      title: t('thirdBlock.title2'),
      description: t('thirdBlock.description3'),
    },
    {
      icon: <Handbag size={50} />,
      title: t('thirdBlock.title3'),
      description: t('thirdBlock.description3'),
    },
    {
      icon: <FaHandFist size={50} />,
      title: t('thirdBlock.title4'),
      description: t('thirdBlock.description4'),
    },
  ];

  const aboutCompensations = [
    {
      icon: <FaMoneyBillWave size={50} />,
      title: t('fourthBlock.title1'),
      description: t('fourthBlock.description1'),
    },
    {
      icon: <FaSmokingBan size={50} />,
      title: t('fourthBlock.title2'),
      description: t('fourthBlock.description2'),
    },
    {
      icon: <FaRegEyeSlash size={50} />,
      title: t('fourthBlock.title3'),
      description: t('fourthBlock.description3'),
    },
    {
      icon: <FaMoneyCheck size={50} />,
      title: t('fourthBlock.title4'),
      description: t('fourthBlock.description4'),
    },
  ];

  return (
    <Container id="about-section" className="about-container">
      <Row className="about-content-top">
        <Col lg={5} className="content-top-left">
          <Row className="top-left-item">
            <div className="about-left-title">
              <strong className="left-title-bold">O</strong>ur
            </div>
          </Row>
          <Row className="top-left-item">
            <div className="about-left-title">
              <strong className="left-title-bold">L</strong>ounge
            </div>
          </Row>
          <Row className="top-left-item">
            <div className="about-left-title">
              <strong className="left-title-bold">S</strong>tory…
            </div>
          </Row>
        </Col>
        <Col className="content-top-right">
          <div className="top-right-text b-text-description-16">
            {t('firstBlock.description')}
          </div>
        </Col>
      </Row>
      <Row className="mt-4 about-body-content">
        <div className="mt-4 about-content-header">
          {t('secondBlock.title')}
        </div>
        <Row className="about-content-item-wrap">
          {aboutServices.length
            ? aboutServices.map((service, index) => (
              <Col
                md={4}
                sm={6}
                xs={12}
                className="about-content-item about__content-item-hover"
                key={index}
              >
                <div className="about-icon-item">{service.icon}</div>
                <h5 className="about-content-title b-title-text-22-bold">
                  {service.title}
                </h5>
                <p className="about-content-description b-text-description-16">
                  {service.description}
                </p>
              </Col>
            ))
            : null}
        </Row>

        <Row className="about-content-item-wrap about__regulation">
          <div className="about__regulation-top">
            <div className="about__regulation-icon">
              {/* <BsInfoCircle size={80} /> */}
              <i class="fa fa-exclamation-circle" size={80}></i>
            </div>
            <div className="about-content-header">{t('thirdBlock.header')}</div>
          </div>

          {aboutRegulations.length
            ? aboutRegulations.map((service, index) => (
              <Col
                lg={3}
                className="about-content-item regulation-item"
                key={index}
              >
                <div className="about-icon-item regulation-icon-item">
                  {service.icon}
                </div>
                <h5 className="about-content-title regulation-item-title b-title-text-22-bold">
                  {service.title}
                </h5>
                <p className="about-content-description regulation-item-description b-text-description-16">
                  {service.description}
                </p>
              </Col>
            ))
            : null}
        </Row>

        <Row className="about-content-item-wrap about__regulation about__compensation">
          <div className="about__regulation-top">
            <div className="about__regulation-icon d-none">
              <BsInfoCircle size={80} />
            </div>
            <div className="about-content-header">
              {t('fourthBlock.header')}
            </div>
          </div>

          {aboutCompensations.length
            ? aboutCompensations.map((service, index) => (
              <Col
                lg={3}
                className="about-content-item regulation-item"
                key={index}
              >
                <div className="about-icon-item regulation-icon-item">
                  {service.icon}
                </div>
                <h5 className="about-content-title regulation-item-title b-title-text-22-bold">
                  {service.title}
                </h5>
                <p className="about-content-description regulation-item-description b-text-description-16">
                  {service.description}
                </p>
              </Col>
            ))
            : null}
        </Row>
      </Row>
    </Container>
  );
};

export default AboutScreen;

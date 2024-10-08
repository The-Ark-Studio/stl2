import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
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
import {BsInfoCircle} from 'react-icons/bs';
import {FaHandFist} from 'react-icons/fa6';

import {ChatDots, Handbag} from 'react-bootstrap-icons';

import '../style/aboutStyle.css';
import {useTranslations} from 'next-intl';
const AboutScreen = () => {
  const t = useTranslations('aboutUs');

  const aboutServices = [
    {
      icon: <FaDollarSign size={40} />,
      title: t('secondBlock.header'),
      description: t('secondBlock.description'),
    },
    {
      icon: <FaPlane size={40} />,
      title: t('thirdBlock.header'),
      description: t('thirdBlock.description'),
    },
    {
      icon: <FaBus size={40} />,
      title: t('eighthBlock.title'),
      description: t('eighthBlock.description'),
    },
    {
      icon: <FaFlag size={40} />,
      title: t('fourthBlock.header'),
      description: t('fourthBlock.description'),
    },
    {
      icon: <ChatDots size={40} />,
      title: t('fifthBlock.header'),
      description: t('fifthBlock.description'),
    },
    {
      icon: <FaAmbulance size={40} />,
      title: t('nineBlock.title'),
      description: t('nineBlock.description'),
    },
  ];

  const aboutRegulations = [
    {
      icon: <FaTransgender size={40} />,
      title: t('sixthBlock.title1'),
      description: t('sixthBlock.description1'),
    },
    {
      icon: <FaVolumeMute size={40} />,
      title: t('sixthBlock.title2'),
      description: t('sixthBlock.description3'),
    },
    {
      icon: <Handbag size={40} />,
      title: t('sixthBlock.title3'),
      description: t('sixthBlock.description3'),
    },
    {
      icon: <FaHandFist size={40} />,
      title: t('sixthBlock.title4'),
      description: t('sixthBlock.description4'),
    },
  ];

  const aboutCompensations = [
    {
      icon: <FaMoneyBillWave size={40} />,
      title: t('seventhBlock.title1'),
      description: t('seventhBlock.description1'),
    },
    {
      icon: <FaSmokingBan size={40} />,
      title: t('seventhBlock.title2'),
      description: t('seventhBlock.description2'),
    },
    {
      icon: <FaRegEyeSlash size={40} />,
      title: t('seventhBlock.title3'),
      description: t('seventhBlock.description3'),
    },
    {
      icon: <FaMoneyCheck size={40} />,
      title: t('seventhBlock.title4'),
      description: t('seventhBlock.description4'),
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
              <BsInfoCircle size={80} />
            </div>
            <div className="about-content-header">{t('sixthBlock.header')}</div>
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
              {t('seventhBlock.header')}
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

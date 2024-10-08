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
} from 'react-icons/fa';
import {BsInfoCircle} from 'react-icons/bs';
import {FaHandFist} from 'react-icons/fa6';

import {ChatDots, Handbag} from 'react-bootstrap-icons';

import '../style/aboutStyle.css';
const AboutScreen = () => {
  const aboutServices = [
    {
      icon: <FaDollarSign size={40} />,
      title: 'A Travel Budget',
      description:
        'The Saigon Travel Lounge reduces the cost burden on travelers through late check-out and room extension, enhancing customer satisfaction. It helps customers adjust their travel schedules more flexibly while providing a comfortable space for relaxation. This contributes to an overall improved travel experience.',
    },
    {
      icon: <FaPlane size={40} />,
      title: 'A Travel Trend',
      description:
        'The "new concept" travel lounge service creates new travel trends and leads the market, providing customers with unique experiences that enhance the quality of their travel.',
    },
    {
      icon: <FaBus size={40} />,
      title: 'Transportation Service',
      description:
        'The pickup and sending service offers customers a convenient one-stop solution, reducing the hassle of travel and helping them enjoy their journey more easily.',
    },
    {
      icon: <FaFlag size={40} />,
      title: "We're The One",
      description:
        'This service, which is being launched for the first time, combines the nostalgia of the homeland with the excitement of the local environment by offering a variety of foods and services, reflecting the pride of a Korean company leading the travel market.',
    },
    {
      icon: <ChatDots size={40} />,
      title: 'Freedom Of Language',
      description:
        'We have organized a concierge team that speaks both Korean and English, allowing customers to conveniently use services in the lounge without any language barriers.',
    },
    {
      icon: <FaAmbulance size={40} />,
      title: 'Emergency Support Services',
      description:
        'We provide a "helper" service to assist travelers in case of unforeseen accidents, offering administrative support for issues such as passport loss, traffic accidents, medical emergencies, and involvement in crimes.',
    },
  ];

  const aboutRegulations = [
    {
      icon: <FaTransgender size={40} />,
      title: '1. Regulations on sexual safety',
      description:
        'Facilities exclusively for women are strictly prohibited for men, and violation of this rule will result in immediate expulsion.',
    },
    {
      icon: <FaVolumeMute size={40} />,
      title: '2. Regulations on noise',
      description:
        'Noise that disturbs others is prohibited. Violating this rule will result in immediate expulsion.',
    },
    {
      icon: <Handbag size={40} />,
      title: '3.Regulations on the import of food',
      description:
        'Outside food is not allowed in the lounge. Violating this rule will result in immediate expulsion.',
    },
    {
      icon: <FaHandFist size={40} />,
      title: '4. Regulations on decadent acts',
      description:
        'Excessive inappropriate behavior is prohibited within the lounge. Violating this rule will result in immediate expulsion.',
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
            The Saigon Travel Lounge is an external airport lounge service
            designed for travelers visiting Ho Chi Minh City. It provides a
            comfortable space to relax before hotel check-in or after check-out,
            offering a quiet and cozy atmosphere. With free Wi-Fi, beverages and
            snacks, buffet access, shower facilities, sleeping rooms, and a
            cafeteria, it alleviates the fatigue of customers. The Saigon Travel
            Lounge is dedicated to ensuring that customers have a comfortable
            and enjoyable travel experience
          </div>
        </Col>
      </Row>
      <Row className="mt-4 about-body-content">
        <div className="mt-4 about-content-header">WHY CHOOSE US</div>
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
            <div className="about-content-header">USE AND EXIT REGULATIONS</div>
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
      </Row>
    </Container>
  );
};

export default AboutScreen;

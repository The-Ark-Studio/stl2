import react from 'react';
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';
import Image from 'next/image';
import '../styles/contactStyle.css';
import { useTranslations } from "next-intl";
const ContactScreen = () => {

  const t = useTranslations('footer');

  return (
    <>
      <Container style={{ marginTop: 200 }} className="">
        <Row>
          <h3 className="my-4 contact-title-top">{t('contact.location')}</h3>
          <Card className="card-container">
            <Row>
              <Col xl={8} lg={12}>
                <Card className="rounded-4 card-second">
                  <CardBody>
                    <CardBody>
                      <h2 className="contact__card-title">
                        {t('contact.systemName')}
                      </h2>
                      <p className="contact__card-sub-title">
                        {t('contact.howToContact')}
                      </p>
                      <div className="mb-4 card-item">
                        <i className="fal fa-envelope" aria-hidden="true"></i>
                        <div>
                          <a
                            href={"mailto:" + t('contact.email')}
                            className="text-white item-text d-inline-block"
                          >
                            {t('contact.email')}
                          </a>
                        </div>
                      </div>
                      <div className="mb-4 card-item">
                        <i className="fal fa-phone-alt" aria-hidden="true"></i>
                        <div>
                          <a
                            href="tel:+84934425031"
                            className="text-white item-text d-inline-block"
                          >
                            {t('contact.phone')}
                          </a>
                        </div>
                      </div>
                      <div className="mb-4 card-item">
                        <i class="fal fa-house" aria-hidden="true"></i>
                        <div>
                          <a
                            href="https://maps.app.goo.gl/XkLE6AJUNncmGecs9"
                            className="text-white item-text d-inline-block"
                          >
                            {t('contact.address')}
                          </a>
                        </div>
                      </div>

                      <div className="card-item card-item-social">
                        <div className="social-item">
                          <Facebook size={40} />
                        </div>
                        <div className="social-item">
                          <Instagram size={40} />
                        </div>
                        <div className="social-item">
                          <Linkedin size={40} />
                        </div>
                      </div>
                    </CardBody>
                  </CardBody>
                </Card>
              </Col>
              <Col className="content-text">
                <h2 className="card-second-title">{t('contact.suggestionAndQuestion.title')}</h2>
                <p className="card-description">
                  {t('contact.suggestionAndQuestion.description')}
                </p>
              </Col>
            </Row>
          </Card>
        </Row>
        <div className="row">
          <div className="col-xl-12">
            <div className="contact__area-map section-padding">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.928187580859!2d106.6909928178979!3d10.78668496376123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3254c86d61%3A0x31fa21392192d696!2zOTUgxJAuIFbDtSBUaOG7iyBTw6F1LCBQaMaw4budbmcgNiwgUXXhuq1uIDMsIEjhu5MgQ2jDrSBNaW5oIDcwMDAw!5e0!3m2!1sen!2s!4v1728330413292!5m2!1sen!2s"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactScreen;

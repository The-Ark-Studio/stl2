import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import SearchCustom from '../../../../components/search/SearchCustom';
import ImageLogo from '../../../../../public/logo-1.png';
import {Folder2} from 'react-bootstrap-icons';
import Image from 'next/image';
import '../style/partnershipStyle.css';
import {useTranslations} from 'next-intl';

const PartnershipScreen = () => {
  const t = useTranslations('partnership');
  const t2 = useTranslations('common');
  return (
    <Container className="partnership-container">
      <Row className="partnership-content">
        <Col lg={6} className="partnership-left-container">
          <div className="partnership-left-title b-title-text-32">
            {t('firstBlock.header')}
          </div>
          <Row>
            <Image
              width={200}
              height={300}
              quality={80}
              src={ImageLogo}
              alt="Saigon Travel Lounge"
              style={{maxWidth: 200, maxHeight: 300}}
            />
          </Row>
          <Row>
            <div className="partnership-left b-title-text-28">
              {t('firstBlock.description')}
            </div>
          </Row>
          <Row>
            <div className="partnership-left-description b-text-description-16">
              {t('firstBlock.descriptionTwo')}
            </div>
          </Row>
        </Col>
        <Col lg={6} className="partnership-right-container">
          <Row className="partnership-right-item">
            <SearchCustom placeholder={t2('search')} />
          </Row>
          <hr className="hr divider-item" />

          <Row className="partnership-right-item">
            <div className="partnership-title-text">{t2('recentPost')}</div>
          </Row>
          <hr className="hr divider-item" />
          <Row className="partnership-right-item">
            <div className="partnership-title-text">{t2('recentComments')}</div>
            <p className="partnership-text">{t2('noComment')}</p>
          </Row>
          <hr className="hr divider-item" />

          <Row className="mb-40 all__sidebar-item-search partnership-right-item">
            <form action="#">
              <input
                className="input-search-second"
                type="text"
                placeholder={t2('search')}
              />
              <button type="submit">
                <i className="fal fa-search"></i>
              </button>
            </form>
          </Row>
          <hr className="hr divider-item" />

          <Row className="partnership-right-item">
            <div className="partnership-title-text">{t2('category')}</div>
            <div className="partnership-sub">
              <div className="partnership-icon">
                <Folder2 size={22} />
              </div>
              <div className="partnership-text">{t2('noCategory')}</div>
            </div>
          </Row>
          <hr className="hr divider-item" />
          <Row className="partnership-right-item">
            <div className="partnership-title-text">{t2('archives')}</div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PartnershipScreen;

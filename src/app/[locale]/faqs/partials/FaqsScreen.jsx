import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import SearchCustom from '../../../../components/search/SearchCustom';
import ImageLogo from '../../../../../public/logo-1.png';
import {Folder2} from 'react-bootstrap-icons';
import Image from 'next/image';
import '../style/faqsStyle.css';
import {useTranslations} from 'next-intl';

const FaqsScreen = () => {
  const t = useTranslations('faqs');
  return (
    <Container className="faqs-container">
      <Row className="faqs-content">
        <Col lg={7} className="faqs-left-container">
          <div className="faqs-left-title b-title-text-32">{t('title')}</div>
          <Row>
            <div className="faqs-left-title b-title-text-22-bold">
              {t('firstBlock.question1')}
            </div>
            <div className="faqs-left-description b-text-description-16">
              {t('firstBlock.answer1')}
            </div>
          </Row>
          <Row>
            <div className="faqs-left-title b-title-text-22-bold">
              {t('firstBlock.question2')}
            </div>
            <div className="faqs-left-description b-text-description-16">
              {t('firstBlock.answer2')}
            </div>
          </Row>

          <Row>
            <div className="faqs-left-title b-title-text-22-bold">
              {t('firstBlock.question3')}
            </div>
            <ul className="faqs-left-description b-text-description-16 faqs-question-list">
              <li className="b-text-description-16">
                {t('firstBlock.answer3.one')}
              </li>
              <li className="b-text-description-16">
                {t('firstBlock.answer3.two')}
              </li>
              <li className="b-text-description-16">
                {t('firstBlock.answer3.three')}
              </li>
              <li className="b-text-description-16">
                {t('firstBlock.answer3.four')}
              </li>
              <li className="b-text-description-16">
                {t('firstBlock.answer3.five')}
              </li>
              <li className="b-text-description-16">
                {t('firstBlock.answer3.six')}
              </li>
              <li className="b-text-description-16">
                {t('firstBlock.answer3.seven')}
              </li>
              <li className="b-text-description-16">
                {t('firstBlock.answer3.eight')}
              </li>
              <li className="b-text-description-16">
                {t('firstBlock.answer3.nine')}
              </li>
              <li className="b-text-description-16">
                {t('firstBlock.answer3.ten')}
              </li>
            </ul>
          </Row>

          <Row>
            <div className="faqs-left-title b-title-text-22-bold">
              {t('firstBlock.question4')}
            </div>
            <ul className="faqs-left-description b-text-description-16 faqs-question-list">
              <li className="b-text-description-16">
                {t('firstBlock.answer4.one')}
              </li>
              <li className="b-text-description-16">
                {t('firstBlock.answer4.two')}
              </li>
              <li className="b-text-description-16">
                {t('firstBlock.answer4.three')}
              </li>
              <li className="b-text-description-16">
                {t('firstBlock.answer4.four')}
              </li>
              <li className="b-text-description-16">
                {t('firstBlock.answer4.five')}
              </li>
              <li className="b-text-description-16">
                {t('firstBlock.answer4.six')}
              </li>
              <li className="b-text-description-16">
                {t('firstBlock.answer4.seven')}
              </li>
            </ul>
          </Row>

          <Row>
            <div className="faqs-left-title b-title-text-22-bold">
              {t('firstBlock.question5')}
            </div>
            <div className="faqs-left-description b-text-description-16">
              {t('firstBlock.answer5')}
            </div>
          </Row>

          <Row>
            <div className="faqs-left-title b-title-text-22-bold">
              {t('firstBlock.question6')}
            </div>
            <div className="faqs-left-description b-text-description-16">
              {t('firstBlock.answer6')}
            </div>
          </Row>
        </Col>
        <Col lg={6} className="faqs-right-container">
          <Row className="faqs-right-item">
            <SearchCustom />
          </Row>
          <hr class="hr divider-item" />

          <Row className="faqs-right-item">
            <div className="faqs-title-text">Recent Posts</div>
          </Row>
          <hr class="hr divider-item" />
          <Row className="faqs-right-item">
            <div className="faqs-title-text"> Recent Comments</div>
            <p className="faqs-text">No comments to show.</p>
          </Row>
          <hr class="hr divider-item" />

          <Row className="mb-40 all__sidebar-item-search faqs-right-item">
            <form action="#">
              <input
                className="input-search-second"
                type="text"
                placeholder="Search....."
              />
              <button type="submit">
                <i className="fal fa-search"></i>
              </button>
            </form>
          </Row>
          <hr class="hr divider-item" />

          <Row className="faqs-right-item">
            <div className="faqs-title-text">Category</div>
            <div className="faqs-sub">
              <div className="faqs-icon">
                <Folder2 size={22} />
              </div>
              <div className="faqs-text">No categories</div>
            </div>
          </Row>
          <hr class="hr divider-item" />
          <Row className="faqs-right-item">
            <div className="faqs-title-text">Archives</div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FaqsScreen;

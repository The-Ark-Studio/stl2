'use client';
import React from 'react';
import {Card, CardBody, CardTitle, CardText, CardImg} from 'react-bootstrap';
import ButtonCustom from '../button/ButtonCustom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './promoStyle.css';

const PromoCard = ({promo, title, description, buttonText}) => {
  return (
    <Card className='card-promo' style={{width: '18rem'}}>
      <div className="card-content-wrap">
        <div className="position-relative">
          <CardImg
            className="card-img"
            variant="top"
            src="https://via.placeholder.com/150"
          />
          <div className="promo-item" style={{borderRadius: 6}}>
            {promo ?? '30%'} Off
          </div>
        </div>
        <CardBody>
          <CardTitle>{title ?? 'title'}</CardTitle>
          <CardText>{description ?? 'description text'}</CardText>
          <ButtonCustom>{buttonText ?? 'Click'}</ButtonCustom>
        </CardBody>
      </div>
    </Card>
  );
};

export default PromoCard;

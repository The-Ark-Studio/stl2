'use client';
import react, { useState } from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/galleryStyle.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const GalleryImages = ({ imageUrls }) => {
  const t = useTranslations('gallery');
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (url) => {
    setSelectedImage(url);
    setShow(true);
  };
  return (
    <div className="container">
      <div className="row">
        {imageUrls.length ? (
          imageUrls.map((url, index) => (
            <div className="mb-3 col-4 rounded-2 image-item" key={index}>
              <Image
                src={url}
                width={500}
                height={278}
                quality={80}
                alt={`Gallery item ${index + 1}`}
                className="rounded-2"
                onClick={() => handleShow(url)}
                style={{ cursor: 'pointer', maxHeight: 278 }}
              />
            </div>
          ))
        ) : (
          <div className="empty-image">
            <h3 className="empty-image-text">{t('noImageData')}</h3>
          </div>
        )}
      </div>

      {/* Modal for  image preview */}

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalBody>
          <div>
            <img
              src={selectedImage}
              alt="Preview"
              className="img-fluid"
            //   style={{
            //     maxHeight: '90vh',
            //     maxWidth: '90vw',
            //     objectFit: 'contain',
            //   }}
            />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default GalleryImages;


'use client';
import React, {useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const GalleryScreen = () => {
  const [key, setKey] = useState('home');

  return (
    <div>
      <h1>This is Gallery Screen</h1>
      <div className="container-fluid">
        <div className="row">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="home" title="Home">
              Tab content for Home
            </Tab>
            <Tab eventKey="profile" title="Profile">
              Tab content for Profile
            </Tab>
            <Tab eventKey="contact" title="Contact">
              Tab content for Contact
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default GalleryScreen;

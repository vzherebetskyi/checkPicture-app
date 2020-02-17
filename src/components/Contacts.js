import React from 'react';

import pictures from '../utils/importPictures';

const Contacts = () => (
  <div className="contactsPage">
    <div className="basicContact">
      <p>If you want to get in touch with us, you can do it via:</p>
      <p>E-mail: vzherebetskyi@gmail.com</p>
    </div>
    <div className="infoAndSocial">
      <div className="additionalInfo">
        <p>&#8227; You can get more details here:</p>
        <p>Work in progress</p>
      </div>
      <div className="socialMedia">
        <p>We on social media:</p>
      </div>
      <div className="contactsPictures">
        <img src={pictures['fb.png']} alt="fb_logo" />
        <img src={pictures['telegram.png']} alt="telegram_logo" />
        <img src={pictures['twitter.png']} alt="twitter_logo" />
      </div>
    </div>
  </div>
);

export default Contacts;

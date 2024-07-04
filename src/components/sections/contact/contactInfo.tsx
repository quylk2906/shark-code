import React from 'react';
import {
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiMoneyDollarCircleLine,
} from '@remixicon/react';
import { FC } from 'react';

type Prop = {
  address: string;
  phone: string;
  email: string;
};

const ContactInfo: FC<Prop> = (props) => {
  const { address, phone, email } = props;

  return (
    <>
      <div className="col-lg-6">
        <div className="contact-content-part  wow fadeInUp delay-0-2s">
          <div className="single-contact wow fadeInUp" data-wow-delay=".2s">
            <div className="contact-icon">
              <i>
                <RiMapPinLine size={20} />
              </i>
            </div>
            <h2>My address:</h2>
            <p>{address}</p>
          </div>
          <div className="single-contact wow fadeInUp" data-wow-delay=".2s">
            <div className="contact-icon">
              <i>
                <RiMoneyDollarCircleLine size={20} />
              </i>
            </div>
            <h2>Hourly Rate</h2>
            <p>20-25$/hour</p>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="contact-content-part  wow fadeInUp delay-0-2s">
          <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
            <div className="contact-icon">
              <i>
                <RiPhoneLine size={20} />
              </i>
            </div>
            <h2>contact number:</h2>
            <p>
              <a href={`tel:${phone}`}>{phone}</a>
            </p>
          </div>

          <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
            <div className="contact-icon">
              <i>
                <RiMailLine size={20} />
              </i>
            </div>
            <h2>Email:</h2>
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;

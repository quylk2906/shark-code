import React from 'react';
import {
  RiArrowRightUpLine,
  // RiDownloadLine,
  RiFacebookCircleFill,
  RiTwitterXLine,
  RiLinkedinFill,
  RiGithubLine,
} from '@remixicon/react';

import SlideUp from '../animations/slideUp';
import { FC } from 'react';
import { ReactNode } from 'react';

type Prop = {
  avatar: string;
  name: string;
  intro: ReactNode;
  skills: string[];
};

const About: FC<Prop> = (props) => {
  const { name, intro, skills, avatar } = props;
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row align-items-center">
          {/*  START ABOUT IMAGE DESIGN AREA  */}
          <div className="col-lg-5">
            <SlideUp>
              <div className="about-image-part">
                <img src={avatar} alt="About Me" />
                <h2>{name}</h2>
                <div className="about-btn btn-one text-center">
                  <h6>Available for Work</h6>
                  <div className="circle pulse color-pulse"></div>
                </div>
                <div className="about-social text-center">
                  <ul>
                    <li>
                      <a href="">
                        <i>
                          <RiFacebookCircleFill size={20} />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i>
                          <RiTwitterXLine size={20} />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i>
                          <RiLinkedinFill size={20} />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i>
                          <RiGithubLine size={20} />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </SlideUp>
          </div>
          {/*  END ABOUT IMAGE DESIGN AREA  */}
          {/*  START ABOUT TEXT DESIGN AREA  */}
          <div className="col-lg-7">
            <div className="about-content-part">
              <SlideUp>
                <h2>{intro}</h2>
                {/* <div className="hero-btns">
                  <a href="#" className="theme-btn">
                    Download CV{' '}
                    <i>
                      // <RiDownloadLine size={16} />
                    </i>
                  </a>
                </div> */}
              </SlideUp>
              <SlideUp>
                <ul className="list-style-one two-column">
                  {skills.map((el, idx) => (
                    <li key={idx}>
                      <i>
                        <RiArrowRightUpLine size={18} />
                      </i>{' '}
                      {el}
                    </li>
                  ))}
                </ul>
              </SlideUp>
            </div>
          </div>
          {/*  END ABOUT TEXT DESIGN AREA  */}
        </div>
      </div>
    </section>
  );
};

export default About;

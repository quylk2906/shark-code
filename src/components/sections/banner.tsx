import React, { FC, Fragment } from 'react';
import SlideUp from '../animations/slideUp';

type Prop = {
  firstName: string;
  lastName: string;
  title: string;
  intro?: string[];
};

const Banner: FC<Prop> = (props) => {
  const { firstName, lastName, title, intro } = props;
  return (
    <section id="home" className="main-hero-area">
      <div className="container">
        <div className="container-inner">
          <div className="row align-items-center">
            <div className="col-lg-12 col-sm-12">
              {/*  START HERO DESIGN AREA  */}
              <SlideUp>
                <div
                  className="hero-content rmb-25 text-center"
                  style={{ paddingBottom: 40 }}
                >
                  <h1>
                    I'm <span>{firstName}</span> {lastName}
                  </h1>
                  <div className="job">
                    <span>{title}</span>
                  </div>
                </div>
                <div style={{ maxWidth: 800, marginInline: 'auto' }}>
                  {intro?.map((el, idx) => (
                    <p key={idx} className="mb-1">
                      {el}
                    </p>
                  ))}
                </div>
              </SlideUp>
              {/*  / END HERO DESIGN AREA  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

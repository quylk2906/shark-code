import React, { FC } from 'react';
import { RiBookLine } from '@remixicon/react';
import Title from '../ui/title';
import SlideUp from '../animations/slideUp';

type Props = {
  data: {
    years: string;
    institute: string;
    position: string;
    description?: string;
    responsibilities?: React.ReactNode;
    accomplishments?: React.ReactNode;
    technologies?: React.ReactNode;
  }[];
};

const Experience: FC<Props> = ({ data }) => {
  // const data_1 = data?.slice(0, data.length / 2) ?? [];
  // const data_2 = data?.slice(data_1.length, data.length) ?? [];
  return (
    <section id="resume" className="resume-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <Title>
              <p>Experience</p>
              <h2>Professional Resume</h2>
            </Title>
          </div>
        </div>
        <div className="resume-items">
          <div className="row">
            {/*  START EXPERIENCE RESUME DESIGN AREA  */}
            <div className="col-xl-12 col-md-12 col-sm-24">
              <div className="experience-list">
                {data.map((el, idx) => (
                  <Card key={idx} {...el} />
                ))}
              </div>
            </div>
            {/*  END EXPERIENCE RESUME DESIGN AREA  */}
            {/*  START EDUCATION RESUME DESIGN AREA  */}
            {/* <div className="col-xl-6 col-md-6">
              <div className="experience-list">
                {data_2.map((el, idx) => (
                  <Card key={idx} {...el} />
                ))}
              </div>
            </div> */}
            {/* END EDUCATION RESUME DESIGN AREA  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

const Card = ({
  institute,
  position,
  years,
  responsibilities,
  description,
  accomplishments,
  technologies,
}: any) => {
  return (
    <SlideUp>
      <div className="resume-item">
        <div className="icon">
          <i>
            <RiBookLine />
          </i>
        </div>
        <div className="content">
          <span className="years">{years}</span>
          <h4>{institute}</h4>
          <span className="company text-primary">Title: {position}</span>
          {description && <p className="text-dark">{description}</p>}

          <h5 className="text-info">Responsibilities:</h5>
          {responsibilities}

          {accomplishments && (
            <>
              <h5 className="text-info">Accomplishments:</h5>
              {accomplishments}
            </>
          )}

          {technologies && (
            <>
              <h5 className="text-info">Technologies:</h5>
              {technologies}
            </>
          )}
        </div>
      </div>
    </SlideUp>
  );
};

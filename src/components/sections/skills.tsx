import React, { FC } from 'react';
import Title from '../ui/title';
import ZoomIn from '../animations/zoomIn';

type Prop = {
  skills: {
    title: string;
    excerpts: string[];
  }[];
};

const Skills: FC<Prop> = ({ skills }) => {
  return (
    <section id="services" className="services-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <Title>
              <p>Skills</p>
              <h2>Knowledge</h2>
            </Title>
          </div>
        </div>
        <div className="row">
          {skills.map(({ title, excerpts }, idx) => {
            return (
              <div key={idx} className="col-12 mb-4">
                <ZoomIn id={idx}>
                  <div className="service-item">
                    <h4>{title}</h4>
                    <ol>
                      {excerpts.map((el2, idx2) => (
                        <li style={{ listStyle: 'circle' }} key={idx2}>
                          {el2}
                        </li>
                      ))}
                    </ol>
                  </div>
                </ZoomIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

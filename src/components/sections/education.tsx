import React, { FC, PropsWithChildren } from 'react';
import Title from '../ui/title';
import ZoomIn from '../animations/zoomIn';

type Prop = {
  //
};

const Education: FC<PropsWithChildren<Prop>> = ({ children }) => {
  return (
    <section id="education" className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <Title>
              <h2>Education</h2>
            </Title>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-4">
            <ZoomIn>
              <div className="border rounded pt-3">{children}</div>
            </ZoomIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

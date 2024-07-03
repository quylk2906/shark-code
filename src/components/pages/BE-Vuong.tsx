import React from 'react';
import Banner from '../sections/banner';
import About from '../sections/about';

import Contact from '../sections/contact/contact';

import avatar from '../../assets/images/vuong.jpg';
import Experience from '../sections/experience';
import Skills from '../sections/skills';
import Education from '../sections/education';

const BEVuong = () => {
  return (
    <>
      <Banner
        firstName="Nghi Hong"
        lastName="Phung"
        title="Product Owner"
        intro={[``, ``, ``, ``]}
      />
      <About
        avatar={avatar}
        name="xxxxx"
        skills={[
          '',
          '',
          '',
          '',
          'BA Leader',
          'Product Owner',
          'Waterfall, Agile/ Scrum',
        ]}
        intro={
          <>
            Hello, I’m Phung, <span>Product Manager</span>
          </>
        }
      />

      <Skills
        skills={[
          {
            title: 'Personal Skills:',
            excerpts: [
              `____`,
              `____`,
              `____`,
              `____`,
              `____`,
              `____`,
              `____`,
              `____`,
            ],
          },
          {
            title: 'Product Skills:',
            excerpts: [
              `____`,
              `____`,
              `____`,
              `____`,
              `____`,
              `____`,
              `____`,
              `____`,
            ],
          },
          {
            title: 'Tools and Technologies',
            excerpts: [
              `____`,
              `____`,
              `____`,
              `____`,
              `____`,
              `____`,
              `____`,
              `____`,
            ],
          },
        ]}
      />
      <Experience
        data={[
          {
            years: '',
            description: ``,
            institute: ``,
            position: '',
            responsibilities: (
              <div>
                {/* <h6>Documentation and Documentation Management:</h6> */}
                <ol className="mb-2">
                  {[
                    `____`,
                    `____`,
                    `____`,
                    `____`,
                    `____`,
                    `____`,
                    `____`,
                    `____`,
                  ].map((el, idx) => (
                    <li style={{ listStyle: 'circle' }} key={idx}>
                      {el}
                    </li>
                  ))}
                </ol>
              </div>
            ),
          },
        ]}
      />

      <Education>
        <ol>
          {[
            `____`,
            `____`,
            `____`,
            `____`,
            `____`,
            `____`,
            `____`,
            `____`,
            `____`,
          ].map((el, idx) => (
            <li style={{ listStyle: 'disc' }} key={idx}>
              {el}
            </li>
          ))}
        </ol>
      </Education>
      {/* <Services /> */}
      <Contact
        info={{
          address: '____',
          phone: '____',
          email: '____',
        }}
      />
    </>
  );
};

export default BEVuong;

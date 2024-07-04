import React from 'react';
import Banner from '../sections/banner';
import About from '../sections/about';

import Contact from '../sections/contact/contact';

import avatar from '../../assets/images/thien.jpg';
import Experience from '../sections/experience';
import Skills from '../sections/skills';
import Education from '../sections/education';

const BEThien = () => {
  return (
    <>
      <Banner
        firstName="Huynh Huu"
        lastName="Thien"
        title="Software Engineer"
        intro={[
          `Become a senior business analyst and lead some software teams.`,
          `Start my own business within 10 years.`,
        ]}
      />
      <About
        avatar={avatar}
        name="Huynh Huu Thien"
        skills={[
          'Javascript',
          'Java',
          'GraphQL/Restful',
          'HTML5/CSS3',
          'MySQL',
        ]}
        intro={
          <>
            <span>Software Engineer</span>
          </>
        }
      />

      <Skills
        skills={[
          {
            title: 'Organizer team member & volunteer:',
            excerpts: [
              `Organizing team member & volunteer for MyKolor 2017 in Can Tho city.`,
              `Organizing team member & volunteer for Me Color Run 2018 in Ho Chi Minh City.`,
              `Supporter & volunteer for the "Chuyến Xe Xuân Nghĩa Tình" program that provides nearly 5,000 free bus tickets to poor workers in Binh Duong to return home for Tet in 2019`,
            ],
          },
        ]}
      />
      <Experience
        data={[
          // ----------------------------------------------------
          {
            years: '2022- present',
            institute: 'VIETNAMESE-GERMAN UNIVERSITY',
            position: 'Application Administrator and Developer',
            responsibilities: (
              <ol className="mb-2">
                {[
                  `Providing comprehensive application development and maintenance services, including upgrading and updating legacy applications and systems, developing new features and applications to meet user requirements, and supporting users in their daily tasks.`,
                  `Programming languages: Ruby, Javascript, Java, HTML, CSS, PHP`,
                  `Tools: VSCode, Eclipse, Dbeaver, MySQL Workbench, Tableau, OpenProject, GitLab`,
                ].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
          },
          // ----------------------------------------------------
          {
            years: '06/2023- 01/2024',
            institute: 'Kilo',
            position: 'Full-stack web application developer',
            responsibilities: (
              <ol className="mb-2">
                {[
                  `Using Java Spring Boot to build a back-end REST API server for an e-commerce application.`,
                  `Programming languages: Java`,
                  `Tools: Eclipse, Dbeaver, MySQL Workbench , Jira, GitLab`,
                ].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
          },
          // ----------------------------------------------------
          {
            years: '2019- 2022',
            institute: 'GLOBALTECH INVESTMENT JOINT STOCK COMPANY',
            position: 'Full-stack web application developer',
            responsibilities: (
              <ol className="mb-2">
                {[
                  `Develop and maintain Angular 2 and .NET Core applications, translating customer requirements into technical speci cations and implementing and customizing graphic libraries for speci c modules, while ensuring documentation accuracy and error-free test cases. `,
                  `Programming languages: Javascript, C#, HTML, CSS`,
                  `Tools: VSCode, Microsoft Visual Studio, GitLab, Jira`,
                ].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
          },
          {
            years: '2018- 2019',
            institute: `IT IDEA SOLUTIONS COMPANY LIMITED`,
            position: ' Back-end developer & Database analyst',
            responsibilities: (
              <div>
                {/* <h6>Documentation and Documentation Management:</h6> */}
                <ol className="mb-2">
                  {[
                    `Design, develop, maintain, and deploy software systems using Java, RESTful APIs, MySQL Database, and Xamarin, while collaborating with testers and system administrators to ensure quality and performance.`,
                    `Programming languages: Java, SQL, C#`,
                    `Tools: Microsoft Visual Studio, XCode, Eclipse, Navicat, MySQL Workbench, Tortoise SV`,
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
            `2014- 2019: Thu Dau Mot University Information System`,
            `GPA: 7.06/10`,
            `TOEIC - Scored 685/990`,
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
          address: 'Thu Dau Mot City, Binh Duong Province',
          phone: '0898 698 890',
          email: 'huynhthien3009@gmail.com',
        }}
      />
    </>
  );
};

export default BEThien;

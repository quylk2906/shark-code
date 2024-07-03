import React from 'react';
import Banner from '../sections/banner';
import About from '../sections/about';

import Contact from '../sections/contact/contact';

import avatar from '../../assets/images/thanh.png';
import Experience from '../sections/experience';
import Skills from '../sections/skills';
import Education from '../sections/education';

const MBTHanh = () => {
  return (
    <>
      <Banner
        firstName="NGUYEN HUU"
        lastName="THANH"
        title="Full-stack Developer"
        intro={[
          `I have been working in the information technology industry for 8 years, around 5 years of experience working with mobile React Native and web application React JS, 3 years with PHP and NodeJS, and 1 year with Fluter. As a Mobile React Native developer, I’m in charge of defining the project structure, implementing main features, maintaining, and reviewing the code of other members of the team. Besides, I have had experience as a team leader for 2 years. I have mentored and guided new team members to ensure our team can grow together.`,
          `I’m strong at Scrum methodology and Tribe model management. I’m good at communication and problem-solving skills. I can work smoothly with other departments and clients. My listening skill and understanding of the ideas are my strengths`,
        ]}
      />
      <About
        avatar={avatar}
        name="NGUYEN HUU THANH"
        skills={[
          'React Native ',
          'ReactJS',
          'NextJS',
          'PHP',
          'JQuery',
          'HTML5/CSS3',
          'Waterfall, Agile/ Scrum',
          'MongoDB',
        ]}
        intro={
          <>
            <span>Full-stack Developer</span>
          </>
        }
      />

      <Skills
        skills={[
          {
            title: 'Core Qualification:',
            excerpts: [
              `Strong in the React Native framework, ReactJS, ReactAdmin, and NextJS.`,
              `Good expertise in Git, and Bitbucket code management tools.`,
              `Good knowledge of programming languages: PHP, CSS, Bootstrap, Tailwind CSS, JQuery, JavaScript, HTML5`,
              `Having experience in CI/CD tools`,
              `Strong in the Scrum process and software lifecycle, with the ability to lead a team independently.`,
              `Learn new programming languages or methods quickly to keep up with commercial and technological demands`,
            ],
          },
          {
            title: 'Hand-on Technical Skills:',
            excerpts: [
              `React Native, ReactJS, ReactAdmin, NextJS, PHP, CSS, JQuery, JavaScript, HTML5`,
              `CI/CD, Git, Bitbucket`,
              `Database: MongoDB, No SQL, MySQL`,
              `Layout Component: Antd Design, Material, Bootstrap, Tailwind, React NativeBase,ReactNative Elements`,
              `React: Redux, Redux Toolkit, Redux saga, React Hook`,
            ],
          },
        ]}
      />
      <Experience
        data={[
          {
            years: '04/2023- Present',
            description: [``],
            institute: `Freelance`,
            position: 'ReactJs, NodeJs Developer',
            responsibilities: (
              <ol className="mb-2">
                {[
                  `Build websites for buying and selling insurance`,
                  `Providing the CRM solution for local business`,
                  `Build websites displaying information`,
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
            years: '06/2018- 03/2023',
            description: [
              `Integrate with a partner's system to provide users with new services: billing repayment, opening bank account: VP Casa, CIMB Casa, VIB Casa, CIMB CDL, CIMB buy now pay later, MCredit cash-loan, insurance: OPES, GIC…; Integrate with service providers, including Napas, Vietin, VP bank, Sacombank CyberSources, VietQR, banking partners, and insurance partners.`,
            ],
            institute: 'SmartPay- SmartNet:',
            position: 'Full-stack Developer',
            responsibilities: (
              <ol className="mb-2">
                {[
                  `React Native`,
                  `Take part in the business requirement grooming to clarify the feature behaviors and logics.`,
                  `Implement the main features in the mobile application such as: money transferring, scratch cards, phone top up, billing protection, Smartcart e-commert, GIC insurance.`,
                  `One year of Flutter riverpod, a restful API server, notification Firebase, and stream experience`,
                  `Implement the Smartcard features in the internal salesman's application.`,
                  `Implement the common components to reuse in the whole team.`,
                  `Improve UI UX`,
                  `Present the React secure storage for the development team to qualify the bank partner’s standard.`,
                  `Writing and publicizing a NPM module.`,
                  `Weekly meeting and report to line manager.`,
                  `Team size: Team of 11 member`,
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
            years: '04/2015- 06/2017',
            description: [
              `Providing the ERP solution for local business: managing the materials, humans’s resources, timeattendance by figuring, produce processing, warehouse management.`,
              `Import external data to the current system, export the finance reports, sale reports, accounting reports.`,
            ],
            institute: 'ISon-Idea solution',
            position: 'Full-stack Developer',
            responsibilities: (
              <ol className="mb-2">
                {[
                  `xxxx`,
                  `xxxx`,
                  `xxxx`,
                  `xxxx`,
                  `xxxx`,
                  `xxxx`,
                  `xxxx`,
                  `xxxx`,
                ].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
            accomplishments: (
              <ol className="mb-2">
                {[`xxxx`, `xxxx`].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
            technologies: (
              <ol className="mb-2">
                {[`xxxx`, `xxxx`].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
          },
        ]}
      />

      <Education>
        <ol>
          {[
            `2009- 2012 THE VOCATIONAL COLLEGE NUMBER8-HCM,VIETNAM`,
            `English - Technical documents`,
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
          address:
            'NL 15 street, My Phuoc 3 ward, Ben Cat district, Binh Duong',
          phone: '84345609609',
          email: 'hthanh.kg8991@gmail.com',
        }}
      />
    </>
  );
};

export default MBTHanh;

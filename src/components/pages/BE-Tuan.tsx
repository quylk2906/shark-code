import React from 'react';
import Banner from '../sections/banner';
import About from '../sections/about';

import Contact from '../sections/contact/contact';

import avatar from '../../assets/images/tuan.jpg';
import Experience from '../sections/experience';
import Skills from '../sections/skills';
import Education from '../sections/education';

const BETuan = () => {
  return (
    <>
      <Banner
        firstName="LE NHA"
        lastName="TUAN"
        title="BE Developer"
        intro={[
          `As a software engineer with over 7 
        years of experience in object
        oriented software design, problem
        solving, implementation, and 
        maintenance, I am seeking an 
        opportunity that will allow me to 
        further develop my programming 
        and leadership skills, and advance 
        my career in IT.`,
        ]}
      />
      <About
        avatar={avatar}
        name="LE NHA TUAN"
        skills={[
          `Java `,
          `Spring Boot  `,
          `Quarkus  `,
          `Restful API `,
          `GraphQL `,
          `gRPC `,
          `Hibernate, JPA `,
          `PostgreSQL `,
          `MongoDB `,
          `Redis  `,
          `Microservices `,
          `RabbitMQ, ActiveMQ `,
        ]}
        intro={
          <>
            <span>Senior Java Developer</span>
          </>
        }
      />

      <Skills
        skills={[
          {
            title: 'Additional skills',
            excerpts: [`NodeJ`, `NestJs `, `Micronaut `, `SQLite`, `Cassandr`],
          },
        ]}
      />
      <Experience
        data={[
          {
            years: '04/2022 – current',
            institute: `BIZZI VIETNAM`,
            position: 'Senior Java Developer',
            responsibilities: (
              <ol className="mb-2">
                {[
                  `Engineered architect, crafted database and develop payment APIs, integrate with Bản Việt bank, MSB.`,
                  `Maintain and implement new features for expense management web.`,
                  `Maintain and implement expense management app.`,
                  `Build and maintain E-Invoice system.`,
                  `Build E-Invoice Open API and integrate with ERP system.`,
                  `Technologies: Graphql, RESTful; Quarkus, Spring boot, Hibernate, JPA; DB: PostgreSQL, MongoDB; FE: NextJS, Angular; NodeJs, NestJs`,
                  `Languages: Java, JavaScript/TypeScript`,
                ].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
          },
          {
            years: '03/2021 – 07/2021',
            institute: `VIETSAVER COMPANY`,
            position: 'Senior Java Developer',
            responsibilities: (
              <ol className="mb-2">
                {[
                  `Responsible for API design and development of services for the product in the business. `,
                  `Build services with Java for flow installment conversion. `,
                  `Build API for partners to integrate (Thế giới di động, Bảo Kim). `,
                  `Conduct requirements analysis to design and program applications and deliver support for system enhancement.`,
                  `Technologies: Graphql, RESTful, gRPC, Quarkus, Hibernate, JPA, Nats ,PostgreSQL`,
                  `Languages: Java`,
                ].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
          },
          {
            years: '06/2019 – 03/2021 ',
            institute: `MOMO E-WALLET`,
            position: 'Middle Java Developer',
            responsibilities: (
              <ol className="mb-2">
                {[
                  ` Responsible for Insurance system at MOMO, design and develop API for flow of insurance (Purchase insurance, Claim, Refund, Insurance Marketplace).`,
                  `Integrated insurance services with partners (BaoViet, PVI, Prudential).`,
                  `Ensure code quality, reusable, follow solid.`,
                  `Performed unit testing of applications by developing and applying test cases in JUnit.`,
                  `Enhanced the quality of code and improved application`,
                  `Technologies: RESTful, gRPC, Spring boot, Vertx,, JDBC, Quartz, Rabbit MQ, Redis, Oracle DB, JUnit, Mockit`,
                  `Languages: Java`,
                ].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
          },
          {
            years: '04/2017 – 06/2019',
            institute: `DXC TECHNOLOGY`,
            position: 'Java Developer',
            responsibilities: (
              <ol className="mb-2">
                {[
                  `Work on Backend Development of Insurance Project`,
                  `Build services with Java for flow installment conversion`,
                  `Quickly catch-up business domain knowledge`,
                  `Maintain existing features as well as design and develop  new features`,
                  `Manage mini team (4 persons), set priorities, assign tasks`,
                  `Mentor for new members`,
                  `Implement reusable component utilizing various standard  framework`,
                  `Work in Scrum Master, Waterfall, Kanban model.`,
                  `Technologies: RESTful, Spring, ActiveMQ, Cloudant, MongoDB, Maven 
                  `,
                  `Languages: Java`,
                ].map((el, idx) => (
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
            `Software Engineer 
            Posts and Telecommunications 
            Institute of Technology, 
            2012-2017 `,
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
            '214 Nguyen Trai Street, Nguyen Cu Trinh Ward, District 1, HCM City',
          phone: '0973 378 653 ',
          email: 'nhatuan444@gmail.com',
        }}
      />
    </>
  );
};

export default BETuan;

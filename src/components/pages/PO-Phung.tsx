import React from 'react';
import Banner from '../sections/banner';
import About from '../sections/about';

import Contact from '../sections/contact/contact';

import avatar from '../../assets/images/nana.jpg';
import Experience from '../sections/experience';
import Skills from '../sections/skills';

const POPhung = () => {
  return (
    <>
      <Banner firstName="Nghi Hong" lastName="Phung" title="Product Owner" />
      <About
        avatar={avatar}
        name="Phung, Nghi Hong"
        skills={[
          'Scrum Master',
          'BA Leader',
          'Product Owner',
          'Waterfall, Agile/ Scrum',
        ]}
        intro={
          <>
            Hello, I’m Phung, <span>Product Manager</span> with over 4 years of
            experience in Web, Mobile Development
          </>
        }
      />
      <Skills
        skills={[
          {
            title: 'Personal Skills:',
            excerpts: [
              `Problem-solving: Constantly researching deeper  and analyzing lots of information from different sources to find the root causes and the
          most suitable solution.`,
              ` Strategic thinking: Understand quickly the main purpose of an objective.
              Always find the key point and balance point of various views`,
              `Collaboration: Listening, verbal, and written communication. Being positive,
              and responsible for what I'm involved in.`,
              `Team development, strategic thinking, innovation, ethical practice,
              and civic-mindedness`,
            ],
          },
          {
            title: 'Product Skills:',
            excerpts: [
              ` Project management with Waterfall or SCRUM methodologies`,
              `Business analysis: Writing technical User Stories, creating Flow charts, use
          cases, Sequence diagrams, and UML Diagramming.`,
              ` Software architecture and design: UI/UX Design, Market Research, Review of UX
          f
          lowto Anticipate Problems`,
            ],
          },
          {
            title: 'Tools and Technologies',
            excerpts: [
              `Working with relational databases such as Microsoft SQL Server, MySQL, Excel`,
              `Understanding experience in Front-end: JavaScript, SCSS/CSS, HTML5 o
          Knowledge Security: AWS, Cloudflare, Amazon EC2`,
              `Goodskills using tools Project Management: Agile and Scrum, Jira and
          Confluence, Product Backlog, Roadmap, Writing BRD/ SRS`,
              `Tools: Figma, Draw.io, Mockup/ Wireframe`,
            ],
          },
        ]}
      />
      <Experience
        data={[
          {
            years: '11/2023 - Now',
            description: `HomeX is an application used by Sale Network (employees of Home Credit Vietnam). This
            application focuses on paperless procedures to improve the sales workflow and
            performance of Home Credit Vietnam`,
            institute: 'HomeCredit Experience',
            position: 'IT Business Analyst',
            responsibilities: (
              <div>
                <h6> Requirement Gathering and Analysis</h6>
                <ol className="mb-2">
                  {[
                    `Conducted comprehensive interviews and workshops with
                  stakeholders to gather business requirements for the LDS and
                  SOM modules.`,
                    `Analyzed existing sales processes and lead
                  management workflows to identify pain points and areas for
                  improvement. `,
                    `Translated business requirements into detailed
                  technical specifications for the development team, ensuring
                  alignment with organizational goals and objectives.`,
                    `Collaborated closely with Sales Associates (SAs) and other
                  end-users to understand their needs and preferences,
                  incorporating their feedback into the solution design.`,
                  ].map((el, idx) => (
                    <li style={{ listStyle: 'circle' }} key={idx}>
                      {el}
                    </li>
                  ))}
                </ol>

                <h6>Documentation and Documentation Management:</h6>
                <ol className="mb-2">
                  {[
                    `Created and maintained detailed business requirement documents (BRDs) and functional requirement documents (FRDs) for the LDS and SOM modules.`,
                    `Documented system workflows, data models, and user interfaces to provide clear guidance for developers and stakeholders.`,
                    `Facilitated requirement review sessions with key stakeholders to validate understanding and obtain approval for proposed solutions.`,
                  ].map((el, idx) => (
                    <li style={{ listStyle: 'circle' }} key={idx}>
                      {el}
                    </li>
                  ))}
                </ol>

                <h6>Solution Evaluation and Recommendation:</h6>
                <ol>
                  {[
                    `Provided recommendations for the selection and implementation of IT solutions for the
                    LDS and SOMmodules, balancing technical requirements with business objectives.`,
                    `Collaborated with vendors and IT teams to assess third-party solutions and negotiate
                    contracts and licensing agreements.`,
                  ].map((el, idx) => (
                    <li style={{ listStyle: 'circle' }} key={idx}>
                      {el}
                    </li>
                  ))}
                </ol>
              </div>
            ),
          },
          {
            years: '3/2022- 11/2023',
            description: `This Fintech domain was built for mobile applications. It provides a network of functional and
            intelligent financial services to the community of customers and merchants, as well as
            multiple capacities like top-up, online money transfers, bill payment, payment by scanning a
            QRcode, and settlement.`,
            institute: ' SmartPay Experience',
            position: 'IT Business Analyst',
            responsibilities: 'responsibilities',
          },
        ]}
      />
      {/* <Services /> */}
      <Contact
        info={{
          address: 'New City, Q2',
          phone: '079 7777 969',
          email: 'hongnghiphung@gmail.com',
        }}
      />
    </>
  );
};

export default POPhung;

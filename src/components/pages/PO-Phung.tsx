import React from 'react';
import Banner from '../sections/banner';
import About from '../sections/about';

import Contact from '../sections/contact/contact';

import avatar from '../../assets/images/nana.jpg';
import Experience from '../sections/experience';
import Skills from '../sections/skills';
import Education from '../sections/education';

const POPhung = () => {
  return (
    <>
      <Banner
        firstName="Hong Nghi"
        lastName="Phung"
        title="Product Manager"
        intro={[
          `As a seasoned Product Manager in the Ecommerce Sales Car industry, I bring a wealth of experience and a deep understanding of the automotive market to drive innovative solutions and exceptional customer experiences. With a strong background in product development, market analysis, and cross-functional team leadership, I excel in translating customer needs into successful product strategies. My passion for leveraging technology and data-driven insights has consistently resulted in increased sales, enhanced customer satisfaction, and streamlined operations. I am dedicated to staying ahead of market trends and continuously improving the ecommerce car sales landscape to deliver value and growth.`,
        ]}
      />
      <About
        avatar={avatar}
        name="Hong Nghi Phung"
        skills={[
          'Scrum Master',
          'BA Leader',
          'Product Manager',
          'Waterfall, Agile/ Scrum',
        ]}
        intro={
          <>
            <span>Product Manager</span>
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
            description: [
              `HomeX is an application used by Sale Network (employees of Home Credit Vietnam). This
            application focuses on paperless procedures to improve the sales workflow and
            performance of Home Credit Vietnam`,
            ],
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
            description: [
              `This Fintech domain was built for mobile applications. It provides a network of functional and
            intelligent financial services to the community of customers and merchants, as well as
            multiple capacities like top-up, online money transfers, bill payment, payment by scanning a
            QRcode, and settlement.`,
            ],
            institute: ' SmartPay Experience',
            position: 'IT Business Analyst',
            responsibilities: (
              <ol className="mb-2">
                {[
                  `Integrate with a partner's system to provide users with new services: Billing repayment, opening bank accounts: VPBank CASA, CIMB CASA; Loan service: Easy Credit CDL, TPFICO CDL, CIMB buy now pay later, Kredivo BNPL, Mcredit cash-loan; Insurance: Motorbike Insurance BSH, OPES, Health insurance PVI,...`,
                  `Handling the reconciliation and money flow: recording transactions in the way4 system, exporting transaction reports, calculating transaction fees, recurring payments...`,
                  `Integrate with service providers, including Napas, Vietinbank, VPBank, Sacombank CyberSources, VietQR, banking and insurance partners.`,
                  `Meet with partners and the business team for consulting and answering questions about the system behavior`,
                  `Discuss with the business team to collect requirements and consult the solution if needed`,
                  `Follow the development progress and partner’s support to keep the deadline`,
                  `Present and set up sprint grooming with the development tea`,
                  `Weekly meetings and report to board director`,
                  `Manage team members' tasks and follow project progress`,
                  `Work on Merchant App with core features and get the requirements from the business team`,
                  `Support Biz team coordinate with the IT team and define the solution`,
                  `Writing a user story, feature description, and flow chart to describe a detailed function`,
                  `Review the BRD document with the relevant team and propose UI/UX for standard features. `,
                  `Use the English language for writing BRD/SRS`,
                  `Use it proficiency tool Figma/Confluence/Paint.. for brainstorming`,
                  `Documentation on Jira/Confluence of the client.`,
                ].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
            accomplishments: (
              <ol className="mb-2">
                {[
                  `Experienced Scrum methodologies`,
                  `Strong experience in Azure, PLSQL, Oracle form`,
                ].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
            technologies: (
              <ol className="mb-2">
                {[
                  `Git`,
                  `Jira`,
                  `Confluence`,
                  `PLSQL, SQL`,
                  `Postman`,
                  `VisualStudio`,
                ].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
          },
          // -------------
          {
            years: '7/2021- 3/2022',
            description: [
              `These websites have some security issues such as authentication, etc. that violate new
            security policies of the client. The client wants to enhance the system with TOTP (Time-Based
            OneTime Password)`,
            ],
            institute: 'Manulife Vietnam Limited (PTG-Security Project)',
            position: 'Senior Business Analyst',
            responsibilities: (
              <ol className="mb-2">
                {[
                  `Making wireframes and working with the designer to get the final design`,
                  `Writing user stories and breaking tasks in Jira`,
                  `Grooming new features with the team before starting a new Sprint`,
                  `Directly communicate with the client for clarifying requirements and solution discussion`,
                  `Writing a User Story (Mockup, User Story Description, Acceptance Criteria)`,
                  `Review user stories and designs developed by team member`,
                  `Use the English language`,
                  `Can use document templates of the CONSULTANT`,
                  `Documentation on Confluence of CLIENT`,
                ].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
            accomplishments: (
              <ol className="mb-2">
                {[
                  `Experienced Scrum methodologies`,
                  `Strong experience in Azure, PLSQL, Oracle form`,
                ].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
            technologies: (
              <ol className="mb-2">
                {[
                  `Git`,
                  `Jira`,
                  `Confluence`,
                  `PLSQL, SQL`,
                  `Postman`,
                  `VisualStudio`,
                ].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
          },
          // -------------
          {
            years: '1/2021- 6/2021',
            description: [
              `The client is developing an ATS (eRecruitment) system, and they want to INTEGRATE it with
            their current AMS and TAS systems to sync data.`,
            ],
            institute: 'Manulife Vietnam Limited (ATS-Integration Project)',
            position: 'Senior Business Analyst',
            responsibilities: (
              <ol className="mb-2">
                {[
                  ` Communicate with the customer to get/suggest behavior system, data analyst`,
                  ` Creating a Project Overview Proposal`,
                  ` Drawing a Use case diagram`,
                  ` Documentation and working Data Flow, Sequence Diagrams, and Integration Workflow`,
                  ` Writing Data Dictionary`,
                  ` Writing API documen`,
                ].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
            accomplishments: (
              <ol className="mb-2">
                {[
                  `Understanding of how APIs function`,
                  `Strong experience in SQL and SQL Server`,
                  `Writing a document technical skills`,
                ].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
            technologies: (
              <ol className="mb-2">
                {[
                  `Oracle DB`,
                  `Microservices`,
                  `Java, API`,
                  `Batchjob Scheduler`,
                ].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
          },
          // -----------------------------------------------------------------
          {
            years: '1/2020- 12/2020',
            institute: 'Mecury Studio & CBI Digital',
            position: 'Junior Business Analyst',
            responsibilities: (
              <ol className="mb-2">
                {[
                  `Analyze the structure of a business, how it uses technology and what its goals are. - Communicate with senior people in organizations to find out what they hope to achieve.`,
                  `Identify problems within a business, including by using data modeling techniques - Formulate ways for businesses to improve, based on previous research. - Persuade internal and external stakeholders of the benefits of new technology or strategies.`,
                  `Oversee the implementation of new technology and systems.`,
                  `Run workshops and training sessions.`,
                  `Solutions and development projects were delivered on time and with high-quality standards.`,
                  `Oversaw design, regulation, and daily management of the principal project - Guide efforts to improve technology systems in a real and cost-effective way - Led and conducted an in-depth analysis of business performance versus business goals.`,
                  `Create a wireframe for the project and outline new features.`,
                  `Actively worked with technical architecture, developer teams, quality assurance, and clients.`,
                ].map((el, idx) => (
                  <li style={{ listStyle: 'circle' }} key={idx}>
                    {el}
                  </li>
                ))}
              </ol>
            ),
            accomplishments: (
              <ol className="mb-2">
                {[
                  `Describe responsibilities`,
                  `Conceptual skills`,
                  `User-centered design processes`,
                  `Design quality standards`,
                  `Service and product design methodologies`,
                  `Agile and Scrum`,
                  `Conducting design sprints`,
                  `User validation`,
                  `Analytical skills`,
                  `Collaboration and teamwork`,
                  `Communication`,
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
            `Ho Chi Minh City University of Technology- HUTECH: Bachelor of Software
 Engineering – 2019`,
            `Major: Business Information System Project Management & Professional `,
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
          address: 'New City, Q2',
          phone: '079 7777 969',
          email: 'hongnghiphung@gmail.com',
        }}
      />
    </>
  );
};

export default POPhung;

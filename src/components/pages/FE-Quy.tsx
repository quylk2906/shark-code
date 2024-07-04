import React from 'react';
import Banner from '../sections/banner';
import About from '../sections/about';

import Contact from '../sections/contact/contact';

import avatar from '../../assets/images/quy.jpg';
import Experience from '../sections/experience';
import Skills from '../sections/skills';
import Education from '../sections/education';
import Portfolio from '../sections/portfolio.tsx';

const FEQuy = () => {
  return (
    <>
      <Banner
        firstName="Le Kim"
        lastName="Quy"
        title="Senior FE Developer"
        intro={[
          `Hi, I'm Le Kim Quy, a Senior Front-End Developer specializing in eCommerce solutions for the automotive industry. With 7 years of experience, I excel at creating seamless, user-friendly interfaces that enhance the online car buying experience. My expertise lies in leveraging the latest web technologies to build responsive, high-performance websites that drive sales and improve customer satisfaction. I'm passionate about staying at the forefront of industry trends and continuously improving the digital journey for car buyers.`,
        ]}
      />
      <About
        avatar={avatar}
        name="Le Kim Quy"
        skills={[
          'ReactJS',
          'ReactNative',
          'HTML5/CSS3',
          'MongoDB',
          'NextJS/GatsbyJS/Storybook',
          'NodeJS',
          'MongoDB',
          'GraphQL/Restful',
        ]}
        intro={
          <>
            <span>Senior FE Developer</span>
          </>
        }
      />

      <Skills
        skills={[
          {
            title: 'Personal Skills:',
            excerpts: [
              `Approximately 7 years of working experience in technology as Frontend Developer  `,
              `Proficient in Frontend with ReactJS, HTML5/CSS3 and Sass, have experience in building 
projects from scratch with Atomic Design`,
              `Familiar with BE development such as NodeJS, MongoDB (BE), GraphQL, Restful `,
              `Having experience in ReactNative, Flutter, Telegram Mini App, familiar in Babel, Webpack, 
NPM, Yarn, understanding of ReactJS and its core principles, SSR, CSR, Zustand, Redux and 
Thunk/Saga, Zod, experiences of web layout, UX design, Ant Design, Material UI React, 
NextUI, TailwindCSS, style module, FCM, storybook, NextJS, GatsbyJS `,
              `Experience in unit test with jest, enzyme, react testing library, playwright; CD/CI `,
              `Good at reading and writing in English, with basic communication abilities `,
            ],
          },
        ]}
      />
      <Experience
        data={[
          {
            years: 'Oct 2022 – Present ',
            description: [
              `A B2B fintech startup that is VC-backed and has been recognized for its awesome culture, rapid growth, and as one of the most innovative tech companies in Vietnam. Established in Sep 2019, Bizzi's mission is to apply automation technology to enhance productivity and reduce costs for accounting and finance operations `,
            ],
            institute: `Bizzi Vietnam`,
            position: 'Senior Frontend Developer',
            responsibilities: (
              <div>
                <h6>Expense web app </h6>
                <ol className="mb-2">
                  {[
                    `Description: A web application allows users to manage all expenses arise in the company operation `,
                    `References: https://hoadon.bizzi.vn/ `,
                    `Team size: 10 people `,
                    `Duties: Separate components, build a website following Figma design; Integrate API with BE or implement new API if necessary ;Review code, take the hardest FE tas`,
                  ].map((el, idx) => (
                    <li style={{ listStyle: 'circle' }} key={idx}>
                      {el}
                    </li>
                  ))}
                </ol>
              </div>
            ),
          },
          // ----------------------------------------------------
          {
            years: 'Nov 2020 - Oct 2022',
            description: [
              `Fourdigit is a land of inspirations and opportunities. There are bricks that have been laid solid, and even more untouched bricks for you to contribute to the transformation of Fourdigit VN. Fourdigit is a digital company founded in Tokyo in 2001 and specializes in Design and Technology. We have been introducing new services and systems that are already widespread in Japan to Southeast Asia.The establishment of our VN subsidiary in July 2020 in HCM, therefore, is not sudden but simply the next step taken in the natural development of the compan`,
            ],
            institute: 'Fourdigit Vietnam',
            position: 'Senior Frontend Developer',
            responsibilities: (
              <div>
                <h6>TOKYU Garden City</h6>
                <ol className="mb-2">
                  {[
                    `Description: This is an SSR webpage. It introduces BECAMEX TOKYU and its facilities, lifestyle, facts (at Binh Duong New City)`,
                    `References: https://tokyugardencity.com/`,
                    `Team size: 5 people `,
                    `Duties: Build React components with ABEM, SCSS, NextJS, Storybook; Integrate Prismic (CMS) to generate static page with Nextjs; Implement svg animation; Manage members andreview code, transfer data from old site to new site`,
                  ].map((el, idx) => (
                    <li style={{ listStyle: 'circle' }} key={idx}>
                      {el}
                    </li>
                  ))}
                </ol>
                <h6>Aeon Smart Technology </h6>
                <ol className="mb-2">
                  {[
                    `Description: The static pages generated by GatsbyJS; The global of this web app show some tech services of AEON web page `,
                    `References: https://www.aeon-st.co.jp/`,
                    `Team size: 3 people `,
                    `Responsibilities: Config GatsbyJS code page and develop atom-level components with ABEM, SCSS `,
                  ].map((el, idx) => (
                    <li style={{ listStyle: 'circle' }} key={idx}>
                      {el}
                    </li>
                  ))}
                </ol>
                <h6>Saison American Express® Card</h6>
                <ol className="mb-2">
                  {[
                    `Description: This is a static page, built by ReactJS, that introduces the services of SAISON Corp`,
                    `References: https://www.saisoncard.co.jp/amex/`,
                    `Team size: 5 people `,
                    `Responsibilities: Build react components with ABEM, SCSS. Per-review code of other members`,
                  ].map((el, idx) => (
                    <li style={{ listStyle: 'circle' }} key={idx}>
                      {el}
                    </li>
                  ))}
                </ol>
                <h6>AEONCard</h6>
                <ol className="mb-2">
                  {[
                    `Description: This is a CSR and SSR webpage. It introduces AEON card services and its campaign, its benefits`,
                    `References: https://www.aeon.co.jp`,
                    `Team size: 10 people `,
                    `Responsibilities: Build React components with ABEM, SCSS; Integrate API, investigate and fix bugs; Implement Unit Test for new features`,
                  ].map((el, idx) => (
                    <li style={{ listStyle: 'circle' }} key={idx}>
                      {el}
                    </li>
                  ))}
                </ol>
              </div>
            ),
          },
          // ----------------------------------------------------
          {
            years: 'Aug 2018 – Jun 2020',
            description: [
              `ETEQ is the high-tech company that provides IT consultancy, software design and development as well as professional services to the following verticals: Government (Local and Central), Logistics, Tourism, Industry, Health Care, Education...`,
            ],
            institute: 'ETEQ JSC',
            position: 'Frontend Developer',
            responsibilities: (
              <div>
                <h6>Loglag Logistics </h6>
                <ol className="mb-2">
                  {[
                    `Description: A Single Page Application (ReactJS); The purpose of the website is to allow users to book supplies which will be bidding between vehicle owners, who has a vehicle could meet requirement of supplies and pick the ones they needed.; Web also allows users track position of vehicles which carry on their supplies, package on google maps in real-time`,
                    `References: https://loglag.com/#/`,
                    `Team size: 5 people `,
                    `Responsibilities: Implement the features from specs document and designer; Discuss with supervisor to clarify requirements and consult the better archiving solution; Feedback bug to BE and help them to figure out solution; Refactor code, making it clean and reusable, keep website with high performance`,
                  ].map((el, idx) => (
                    <li style={{ listStyle: 'circle' }} key={idx}>
                      {el}
                    </li>
                  ))}
                </ol>

                <h6>E-News</h6>
                <ol className="mb-2">
                  {[
                    `Description: The purpose of this website is to manage a process of an editorial department, it includes all steps from the reporters who register a topic and compose article, then topic will be approved/rejected by multiple managers with different levels, and finally it can be printed or publish to user news page; Web developed with typescript, using popular npm libs such as webpack hot reload, react-saga, redux, redux-thunk, lodash, react-infinite– scroller, slickjs calendar, FCM to push notification, etc`,
                    `Team size: 5 people `,
                    `Responsibilities: Implement feature from specs document and designer, separate components and layout, configure all settings for project; Discuss with supervisor to clarify requirement and consult the better archiving solution; Research complicated lib and integrate it to project; Refactor code, making it clean and reusable, keep website with high performance`,
                  ].map((el, idx) => (
                    <li style={{ listStyle: 'circle' }} key={idx}>
                      {el}
                    </li>
                  ))}
                </ol>
              </div>
            ),
          },
          // ----------------------------------------------------
          {
            years: 'Jul 2017 – Aug 2018',
            institute: 'BeesightSoft',
            position: 'FE Developer',
            responsibilities: (
              <ol className="mb-2">
                {[
                  `Description: An industry app, the purpose of the App is to allow a user (Rep) to access and maintain a list of their contacts; For a selected contact, the user will then be able to view, add and maintain recommendations and Crop Monitor details; The user will have the ability to send, via email from the backend server, reports for recommendations and Crop Monitor's with attached PDF's. This functionalit`,
                  `References: https://farm-land-cb5f7.firebaseapp.com/ (quy.le@beesightsoft.com/12345678)`,
                  `Team size: 3 people `,
                  `Responsibilities: Handle specification documents and assign tasks to subordinates Communicate with client to clarify business logic, change requirements; Discuss and give them a better solution; Review, refactor code, keep code clean and clear for maintaining, scale up`,
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
            years: 'Feb 2017 – Jun 2017',
            institute: 'TerraLogic Company',
            position: 'iOS Developer',
            responsibilities: (
              <ol className="mb-2">
                {[
                  `Description: Healthy App. Keep track of diabetes patient from the iDevice and remind them of health issues`,
                  `Team size: 5 people `,
                  `Responsibilities Update code, maintain and fix bugs layout; Communicate with client to clarify business issues`,
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
            `University of Information Technology, Ho Chi Minh City 2012– 2017 Bachelor`,
            `Major: Software Engineer `,
            `Certificates: TOEIC 570`,
          ].map((el, idx) => (
            <li style={{ listStyle: 'disc' }} key={idx}>
              {el}
            </li>
          ))}
        </ol>
      </Education>
      <Portfolio />
      <Contact
        info={{
          address: 'The Sun Avenue, Q2, HCM',
          phone: '0963878723',
          email: 'quylk2906@gmail.com',
        }}
      />
    </>
  );
};

export default FEQuy;

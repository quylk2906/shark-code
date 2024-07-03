import React, { useState } from 'react';
import { RiArrowRightUpLine } from '@remixicon/react';
import Title from '../ui/title';
import Lightbox from '../ui/lightbox';
import tgc01 from '../../assets/images/portfolio/tgc-01.jpg';
import ast01 from '../../assets/images/portfolio/ast-01.jpeg';
import saison01 from '../../assets/images/portfolio/saison-01.jpg';
import aeon01 from '../../assets/images/portfolio/aeon-01.jpg';
import qsncc01 from '../../assets/images/portfolio/qsncc-01.jpg';
import bizzi01 from '../../assets/images/portfolio/bizzi-01.jpg';
import bizzi03 from '../../assets/images/portfolio/bizzi-03.jpg';
import bizzi05 from '../../assets/images/portfolio/bizzi-05.png';
import loglag01 from '../../assets/images/portfolio/loglag-01.jpg';
import farmland01 from '../../assets/images/portfolio/farmland-01.png';
import mapview01 from '../../assets/images/portfolio/mapview-01.jpg';
import mapview03 from '../../assets/images/portfolio/mapview-03.jpg';
import eb01 from '../../assets/images/portfolio/eb-01.jpg';
import eb03 from '../../assets/images/portfolio/eb-03.jpg';
import moonso01 from '../../assets/images/portfolio/moonso-01.jpg';
// function getImageUrl(name: string) {
//   return new URL(`../../../../public/portfolio/${name}.jpg`, import.meta.url)
//     .href;
// }

const FIGURES = [
  {
    group: '4DVN',
    img: tgc01,
    href: 'https://www.awwwards.com/sites/tokyu-garden-city',
    name: 'TOKYU Garden City',
  },
  {
    group: '4DVN',
    img: ast01,
    name: 'Aeon Smart Technology',
    href: 'https://www.aeon-st.co.jp/en/',
  },
  {
    group: '4DVN',
    name: 'SAISON AMERICAN EXPRESS® CARD',
    img: saison01,
    href: 'https://www.saisoncard.co.jp/amex/platinumbusiness/?p=tp_mv',
  },
  {
    group: '4DVN',
    name: 'AEON Card',
    img: aeon01,
    href: 'https://www.aeon.co.jp/',
  },
  {
    group: '4DVN',
    name: 'QSNCC - Bangkok, Thailand',
    img: qsncc01,
    href: 'https://www.qsncc.com/en',
  },
  {
    group: 'BIZZI',
    name: 'Budget management',
    img: bizzi01,
    href: 'https://bizzi.vn/the-tin-dung/?fbclid=IwAR2KEcjYkcoQe1uXJ1a7tClqnJJDg6wB4_jT2Hm47mal1nEVXbVtrFkD-IY',
  },
  {
    group: 'BIZZI',
    name: 'Expense management',
    img: bizzi03,
    href: 'https://bizzi.vn/',
  },
  {
    group: 'Loglag',
    name: 'LogLag Logistics',
    img: loglag01,
    href: 'https://startup.vnexpress.net/startup/thong-tin/loglag-technology-746.html',
  },
  {
    group: 'FarmLand',
    name: 'Farm Land',
    href: '#',
    img: farmland01,
  },
  {
    group: 'Other',
    name: 'Mapview',
    img: mapview01,
    href: 'https://app.mapview.com.au/#/',
  },
  {
    group: 'Other',
    name: 'Extrabread',
    img: eb01,
    href: 'https://extrabread.com/',
  },
  {
    group: 'Other',
    name: 'Moon.so',
    img: moonso01,
    href: 'https://dev.moons.so/',
  },
];

const animations = ['slideIn', 'fadeIn', 'scaleUp'];

const getRandomAnimation = () => {
  const randomIndex = Math.floor(Math.random() * animations.length);
  return animations[randomIndex];
};

const Portfolio = () => {
  const [category, setCategory] = useState('All');
  const [animationClass, setAnimationClass] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    console.log('click');
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleCategoryClick = (item) => {
    setCategory(item);
    const randomAnimation = getRandomAnimation();
    setAnimationClass(randomAnimation);
  };

  // ------ filter unique category
  const filteredCategory = ['All'];
  FIGURES.forEach(({ group }) => {
    if (!filteredCategory.includes(group)) {
      filteredCategory.push(group);
    }
  });
  // ------ filter unique category

  const filteredProjects =
    category === 'All'
      ? FIGURES
      : FIGURES.filter((image) => image.group === category);

  return (
    <section id="portfolio" className="projects-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <Title>
              <p>Works</p>
              <h2>Creative Portfolio</h2>
            </Title>
          </div>
        </div>
        <ul className="project-filter filter-btns-one justify-content-left pb-15 wow fadeInUp delay-0-2s">
          {filteredCategory.map((item, id) => (
            <li
              key={id}
              onClick={() => handleCategoryClick(item)}
              className={item === category ? 'current' : ''}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="row project-masonry-active">
          {filteredProjects.map(({ group, name, href, img }, id) => (
            <Card
              key={id}
              category={group}
              title={name}
              src={img}
              animationClass={animationClass}
              openLightbox={() => window.open(href, '_blank')}
            />
          ))}
        </div>
      </div>
      <Lightbox selectedImage={selectedImage} onClose={closeLightbox} />
    </section>
  );
};

export default Portfolio;

const Card = ({ category, title, src, animationClass, openLightbox }) => {
  console.log(`⚡ ~~ Card ~~ src`, src);
  return (
    <div className={`col-lg-4 col-md-6 item branding ${animationClass}`}>
      <div className="project-item style-two wow fadeInUp delay-0-2s">
        <div className="project-image">
          <img src={src} alt="Project" />
          <div
            onClick={() => openLightbox(src)}
            className="details-btn work-popup"
          >
            <i>
              <RiArrowRightUpLine />
            </i>
          </div>
        </div>
        <div className="project-content">
          <span className="sub-title">{category}</span>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

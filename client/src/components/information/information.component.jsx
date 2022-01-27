import React, { useState } from 'react';
import InfoItems from '../info-items/info-items.component';
import './information.styles.scss';

function Information() {
  const [infoItems] = useState({
    sections: [
      {
        id: 1,
        image: '/images/logo/logo_1.png',
        title: 'Free Delivery',
        text:
          'Worldwide delivery on all.\n' +
          '                  Authorit tively morph next-generation\n' +
          '                  innov tion with extensive\n' +
          '                  models.',
      },
      {
        id: 2,
        image: '/images/logo/logo_2.png',
        title: 'Sales & discounts',
        text:
          'Worldwide delivery on all.\n' +
          '                  Authorit tively morph next-generation\n' +
          '                  innov tion with extensive\n' +
          '                  models.',
      },
      {
        id: 3,
        image: '/images/logo/logo_3.png',
        title: 'Quality assurance',
        text:
          'Worldwide delivery on all.\n' +
          '                  Authorit tively morph next-generation\n' +
          '                  innov tion with extensive\n' +
          '                  models.',
      },
    ],
  });

  const { sections } = infoItems;

  return (
    <section className="information">
      <div className="information__row info">
        {sections.map(({ id, ...rest }) => (
          <InfoItems key={id} {...rest} />
        ))}
      </div>
    </section>
  );
}

export default Information;

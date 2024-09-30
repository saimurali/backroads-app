import React from 'react';
import { socialLinks } from './data';
import SocialLink from './SocialLink';

const Navicons = () => {
  return (
    <>
      <ul className="nav-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass="nav-icon" />;
        })}
      </ul>
    </>
  );
};

export default Navicons;

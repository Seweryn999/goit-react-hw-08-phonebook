import React from 'react';
import ContactsApp from 'components/contactsApp/ContactsApp';
import css from './pages.module.css'
import d from '../components/colorContext/ColorContext.module.css';
import { useColor } from 'components/colorContext/ColorContext';

const Contacts = () => {
    const { colorTheme } = useColor();
  return (
    <div
      className={
        colorTheme === 'dark'
          ? css.background + ' ' + d.isDarkOne
          : css.background
      }
    >
      <ContactsApp />
    </div>
  );
};

export default Contacts;

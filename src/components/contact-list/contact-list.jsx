import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button/button';
import css from './contact-list.module.css';
import { useColor } from 'components/colorContext/ColorContext';

const ContactList = ({ arr, btnHandler }) => {
  const { colorTheme } = useColor();
  return (
    <ul
      className={
        colorTheme === 'dark'
          ? css.contactList + ' ' + css.isDarkTwo
          : css.contactList
      }
    >
      {arr.map(({ id, name, number }) => (
        <li
          className={
            colorTheme === 'dark'
              ? css.contactList__item + ' ' + css.isDarkTwo
              : css.contactList__item
          }
          key={id}
        >
          <p className={css.contactList__name}>{`${name}`}</p>
          <p className={css.contactList__number}> {`${number}`}</p>{' '}
          <Button
            label="Delete"
            typeOfBtn="button"
            btnFunc={() => btnHandler(id)}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  btnHandler: PropTypes.func.isRequired,
};

export default ContactList;

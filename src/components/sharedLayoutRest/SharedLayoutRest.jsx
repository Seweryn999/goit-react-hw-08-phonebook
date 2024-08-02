import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../sharedLayout/SharedLayout.module.css';
import { useColor } from 'components/colorContext/ColorContext';
import Toggle from 'components/toggle/Toggle';

const SharedLayoutRest = () => {
  const { setColorTheme } = useColor();
  const colorHandler = e => {
    const { checked } = e.target;
    if (checked === true) {
      setColorTheme('dark');
    } else {
      setColorTheme('');
    }
  };
  return (
    <>
      <div className={css.header__sub}>
        <NavLink
          to="/goit-react-hw-08-phonebook"
          className={({ isActive }) =>
            isActive ? css.active : css.header__link
          }
        >
          Phonebook
        </NavLink>
        <Toggle changeHandler={colorHandler} />
      </div>
      <div className={css.header__sub}>
        <NavLink
          to="/goit-react-hw-08-phonebook/register"
          className={({ isActive }) =>
            isActive ? css.active : css.header__link
          }
        >
          Register
        </NavLink>
        <NavLink
          to="/goit-react-hw-08-phonebook/login"
          className={({ isActive }) =>
            isActive ? css.active : css.header__link
          }
        >
          Login
        </NavLink>
      </div>
    </>
  );
};

export default SharedLayoutRest;

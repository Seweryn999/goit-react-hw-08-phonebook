import React from 'react';
import css from '../sharedLayout/SharedLayout.module.css';
import { useAuthRoute } from 'hook/useAuthRoute';
import Button from 'components/button/button';
import { useDispatch } from 'react-redux';
import opAuth from 'redux/auth/opAuth';
import { NavLink } from 'react-router-dom';
import { useColor } from 'components/colorContext/ColorContext';
import Toggle from 'components/toggle/Toggle';

const SharedLayoutPriv = () => {
  const dispatch = useDispatch();
  const { user } = useAuthRoute();
  const { setColorTheme } = useColor();
  const colorHandler = e => {
    const { checked } = e.target;
    if (checked === true) {
      setColorTheme('dark');
    } else {
      setColorTheme('');
    }
  };
  const btnHandler = () => {
    dispatch(opAuth.logOut());
  };

  return (
    <>
      <div className={css.header__sub}>
        <NavLink
          to="/goit-react-hw-08-phonebook/contacts"
          className={({ isActive }) =>
            isActive ? css.active : css.header__link
          }
        >
          Phonebook
        </NavLink>
        <Toggle changeHandler={colorHandler} />
      </div>
      <div className={css.header__sub}>
        <p className={css.header__link}>{user.email}</p>
        <Button
          label="Log Out"
          typeOfBtn="button"
          btnFunc={() => btnHandler()}
        />
      </div>
    </>
  );
};

export default SharedLayoutPriv;

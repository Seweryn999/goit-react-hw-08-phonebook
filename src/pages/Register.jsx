import React from 'react';
import UserForm from 'components/userForm/UserForm';
import css from './pages.module.css';
import d from '../components/colorContext/ColorContext.module.css';
import { useColor } from 'components/colorContext/ColorContext';

const Register = () => {
    const { colorTheme } = useColor();
  return (
    <div
      className={
        colorTheme === 'dark'
          ? css.background + ' ' + d.isDarkOne
          : css.background
      }
    >
      <div className={css.container}>
        <UserForm typeOfForm={'Register'}></UserForm>
      </div>
    </div>
  );
};

export default Register;

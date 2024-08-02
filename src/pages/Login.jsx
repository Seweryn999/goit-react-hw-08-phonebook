import React from 'react';
import css from './pages.module.css';
import UserForm from 'components/userForm/UserForm';
import d from '../components/colorContext/ColorContext.module.css';
import { useColor } from 'components/colorContext/ColorContext';

const Login = () => {
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
        <UserForm typeOfForm={'Login'}></UserForm>
      </div>
    </div>
  );
};

export default Login;

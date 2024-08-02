import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';
import { useColor } from 'components/colorContext/ColorContext';

const Button = ({ label, typeOfBtn, btnFunc }) => {
  const { colorTheme } = useColor();
  return (
    <button
      className={colorTheme === 'dark' ? css.btn + ' ' + css.btnDark : css.btn}
      type={typeOfBtn}
      onClick={btnFunc}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  typeOfBtn: PropTypes.string.isRequired,
  btnFunc: PropTypes.func,
};

export default Button;

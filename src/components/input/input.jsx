import React from 'react';
import PropTypes from 'prop-types';
import css from './Input.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { useColor } from 'components/colorContext/ColorContext';

const Input = ({
  label,
  type,
  dataName,
  validation,
  title,
  funcChange,
  stateField,
}) => {
  const idForLabelAndInput = nanoid();
  const {colorTheme} = useColor()
  return (
    <label
      className={
         css.label
      }
      htmlFor={idForLabelAndInput}
    >
      {label}
      <input
        className={
          colorTheme === 'dark' ? css.input + ' ' + css.isDarkOne : css.input
        }
        type={type}
        name={dataName}
        pattern={validation}
        title={title}
        required
        onChange={funcChange}
        value={stateField}
        id={idForLabelAndInput}
      />
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataName: PropTypes.string.isRequired,
  validation: PropTypes.string,
  title: PropTypes.string.isRequired,
  funcChange: PropTypes.func.isRequired,
  stateField: PropTypes.string.isRequired,
};

export default Input;

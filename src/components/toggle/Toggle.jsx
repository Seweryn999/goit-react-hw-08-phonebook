import React from 'react';
import css from './Toggle.module.css';
import PropTypes from 'prop-types';

const Toggle = ({ changeHandler }) => {
  return (
    <label className={css.switch}>
      <input type="checkbox" onChange={changeHandler}></input>
      <span className={css.slider + ' ' + css.round}></span>
    </label>
  );
};

Toggle.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};

export default Toggle;

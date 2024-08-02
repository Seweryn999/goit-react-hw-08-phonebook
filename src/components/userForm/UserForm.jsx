import React, { useState } from 'react';
import Input from 'components/input/input';
import { useDispatch } from 'react-redux';
import opAuth from 'redux/auth/opAuth';
import css from './UserForm.module.css';
import { useColor } from 'components/colorContext/ColorContext';

const UserForm = ({ typeOfForm }) => {
  const { colorTheme } = useColor();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const formReset = typeOfForm => {
    if (typeOfForm === 'Register') {
      setName('');
      setEmail('');
      setPassword('');
    } else {
      setEmail('');
      setPassword('');
    }
  };
  const handleSubmitReg = (name, email, pass) => {
    if (pass.length < 6) {
      alert('Password must be at least 7 characters long');
    } else {
      let credentials = {
        name: `${name}`,
        email: `${email}`,
        password: `${pass}`,
      };
      dispatch(opAuth.register(credentials));
    }
  };

  const handleSubmitLog = (email, pass) => {
    const credentials = { email: email, password: pass };
    dispatch(opAuth.logIn(credentials));
  };

  const handleSubmit = (typeOfForm, name, email, pass) => {
    if (typeOfForm === 'Register') {
      handleSubmitReg(name, email, pass);
    } else {
      handleSubmitLog(email, pass);
    }
  };

  const handleChangeUser = e => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
    } else {
      setPassword(value);
    }
  };
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit(typeOfForm, name, email, password);
          formReset();
        }}
        className={
          colorTheme === 'dark'
            ? css.container + ' ' + css.form + ' ' + css.isDarkOne
            : css.container + ' ' + css.form
        }
      >
        {typeOfForm === 'Register' && (
          <Input
            label="User Name"
            type="text"
            dataName="name"
            title="User name for server"
            required
            funcChange={handleChangeUser}
            stateField={name}
          />
        )}
        <Input
          label="Email"
          type="email"
          dataName="email"
          title="Should look like smth@and.so.on"
          required
          funcChange={handleChangeUser}
          stateField={email}
        />
        <Input
          label="Password"
          type="password"
          dataName="password"
          title="Should be secret"
          required
          funcChange={handleChangeUser}
          stateField={password}
        />
        <button
          type="submit"
          className={
            colorTheme === 'dark' ? css.btn + ' ' + css.btnDark : css.btn
          }
        >
          {typeOfForm === 'Register' ? typeOfForm : 'Log In'}
        </button>
      </form>
    </>
  );
};
export default UserForm;

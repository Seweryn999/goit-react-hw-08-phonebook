import React, { useEffect } from 'react';
import { Form } from '../form/form';
import Input from '../input/input';
import ContactList from '../contact-list/contact-list';
import css from './Sandbox.module.css';
import {
  selectFilter,
  selectFiltered,
  selectError,
  selectLoading,
} from '../../redux/sandbox/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/sandbox/filterSlice';
import opSandbox from 'redux/sandbox/opSandbox';

export const Sandbox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const filtered = useSelector(selectFiltered);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  const filterHandler = e => {
    const { name, value } = e.target;
    if (name === 'filter') {
      dispatch(setFilter(value));
    }
  };

  const removeContact = id => {
    dispatch(opSandbox.deleteContactSandbox(id));
  };

  useEffect(() => {
    dispatch(opSandbox.fetchSandboxToDisplay());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Form />
      <Input
        label="Find contacts by name"
        type="text"
        dataName="filter"
        validation="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Search is not case sensitive"
        funcChange={filterHandler}
        stateField={filter}
      />
      <ContactList arr={filtered} btnHandler={removeContact} />
      {isLoading && !error && <b>Request in progress</b>}
    </div>
  );
};

export default Sandbox;

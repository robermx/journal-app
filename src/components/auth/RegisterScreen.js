// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import isEmail from 'validator/lib/isEmail';

import { useForm } from '../../hooks/useForm';
import { removeError, setError, addClassName } from '../../actions/ui';
import { startRegister } from '../../actions/auth';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError, className } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: 'Roberto Arenas',
    email: 'roberto@webxmex.com',
    password: '123456',
    password2: '123456',
  });

  const { name, email, password, password2 } = formValues;

  const alert = () => {
    dispatch(addClassName('animate__bounceIn'));

    setTimeout(() => {
      dispatch(addClassName('animate__bounceOut'));
    }, 2000);
  };

  const isFormValid = () => {
    if (name.trim().length <= 1) {
      dispatch(setError('Name is required'));
      alert();
      return false;
    } else if (!isEmail(email)) {
      dispatch(setError('This email is not valid'));
      alert();
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError('Password is incorrect'));
      alert();
      return false;
    }
    dispatch(removeError());
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegister(email, password, name));
    }
  };

  return (
    <>
      <h2 className="mt-0">Journal App</h2>
      <form onSubmit={handleRegister}>
        {msgError && (
          <div className="d-flex justify-center translate-y">
            <div
              className={`alert__alert-error fixed animate__animated ${className}`}
            >
              {msgError}
            </div>
          </div>
        )}
        <input
          className="mb-1"
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="mb-1"
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="mb-1"
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="mb-1"
          type="password"
          placeholder="confirm password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn-slider learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Register</span>
        </button>
      </form>
      <hr />

      <Link className="link mt-1" to="/auth/login">
        Already<span>Register?</span>
      </Link>
    </>
  );
};

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { startEmailPass, startGoogleLogin } from '../../actions/auth';

import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: 'roberto@webxmex.com',
    password: '123456',
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(startEmailPass(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h2 className="mt-0">Journal App</h2>
      <form onSubmit={handleLogin}>
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

        <button
          disabled={loading}
          type="submit"
          className="btn-slider learn-more"
        >
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Login</span>
        </button>
      </form>
      <hr />

      <div className="google-btn">
        <div className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google button"
          />
        </div>

        <p onClick={handleGoogleLogin} className="btn-text">
          <b>Sign in with google</b>
        </p>
      </div>
      <Link className="link mt-1" to="/auth/register">
        Create<span>New</span>Account
      </Link>
    </>
  );
};

import { useState } from 'react';
import './login.scss';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/user.actions';
import { useNavigate } from 'react-router';

export function Login() {
  const [data, setData] = useState({
    email: 'tony@stark.com',
    password: 'password123',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const postLogin = async () => {
    await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(login({ ...response.body }));
          return navigate('/user');
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              postLogin();
            }}
          >
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email || ''}
                onChange={handleData}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={data.password || ''}
                onChange={handleData}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type="submit">Sign In</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Login;

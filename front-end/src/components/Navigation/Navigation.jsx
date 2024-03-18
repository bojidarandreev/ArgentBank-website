import { NavLink } from 'react-router-dom';
import './navigation.scss';

import Logo from '../../assets/argentBankLogo-optimised.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { logout }from '../../redux/actions/user.actions';
import { useState } from 'react';
import InputComponent from '../UsernameChange/UsernameChange';

function Navigation() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [showInput, setShowInput] = useState(false);

  const toggleInputField = () => {
    setShowInput(!showInput);
  };

  // const [showInput, setShowInput] = useState(false);
  // const handleButtonClick = () => {
  //   setShowInput(true);
  // };
    return (
        <nav className="main-nav">
          <NavLink className="main-nav-logo" to="/">
            <img
              className="main-nav-logo-image"
              src={Logo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </NavLink>
          <div>
            {!user.isLogged && (
              <NavLink className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i> Sign In
            </NavLink>
            )}
            {user.isLogged && (
              <NavLink className="main-nav-item" to="/user">
              <i className="fa fa-user-circle">{user.firstName}</i>
            </NavLink>
            )}
            {user.isLogged && (
             
              
              <NavLink className="main-nav-item"
              to="/"
              onClick={() => dispatch(logout())}
              >
              
              <i className="fa fa-sign-out"></i> Sign Out
            </NavLink>
            
            
            )}
          </div>
        </nav>
    );
  }
  
  export default Navigation;
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';


import { getUserInfoAction } from '../../redux/actions/user.actions';
import InputComponent from '../../components/UsernameChange/UsernameChange';

import './user.scss'
function User() {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showInput, setShowInput] = useState(false);
    
    const toggleInputField = () => {
      setShowInput(!showInput);
    };

    // let unChange = false;
    // const userNameChange = () => {
    //   console.log('userNameChange Triggered');
    //   if (!unChange) {
    //   unChange = true;
    // } else { unChange = false;}
    // console.log(unChange);
    // };

    useEffect(() => {
        if (!user.isLogged) {
            return navigate('/login');
        }
        
        const getUserInfo = () => {
            fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: { Authorization: `Bearer ${user.token}`},
            })
            .then((response) => {
                if (response.ok) {
                   return response.json();
                }
                console.log(response)
            })
            .then((data) => {
                console.log(data)
                if (data.status === 200) {
                    dispatch(getUserInfoAction(data.body));
                }
            })
            
            .catch((error) => console.log(error));
        }
        getUserInfo();
    }, [dispatch, navigate, user.isLogged, user.token]);

  //   useEffect(() => {
  //     console.log("The second useEffect is triggered");
  //     const changeUserInfo = () => {
  //         fetch('http://localhost:3001/api/v1/user/profile', {
  //             method: 'POST',
  //             headers: { Authorization: `Bearer ${user.token}`},
  //         })
  //         .then((response) => {
  //             if (response.ok) {
  //                return response.json();
  //             }
  //             console.log(response)
  //         })
  //         .then((data) => {
  //             console.log(data)
  //             if (data.status === 200) {
  //                 dispatch(getUserInfoAction(data.body));
  //             }
  //         })
          
  //         .catch((error) => console.log(error));
  //     }
  //     changeUserInfo();
  // }, [userNameChange]);


    return(
        
        <main className="main bg-dark user-panel-main">
      <div className="header user-panel-header">
        {!showInput && <h1>Welcome back<br />{user.userName} !</h1>}
        {showInput && <InputComponent toggleInputField={toggleInputField} />}
        <button className={ showInput ? "edit-button button-cancel" : "edit-button" }
        onClick={toggleInputField}>{showInput ? 'Cancel' : 'Edit Name'}</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
    )
}
export default User;
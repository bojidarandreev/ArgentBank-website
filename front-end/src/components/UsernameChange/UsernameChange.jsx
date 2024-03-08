import './usernameChange.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserName } from '../../redux/actions/user.actions';

const InputComponent = ({toggleInputField}) => {
  const user = useSelector((store) => store.user);

  const [data, setData] = useState({
    userName: user.userName,
  });
  
  const dispatch = useDispatch();

  const handleData = (e) => {
    changeUser();
    console.log("Data Handled");
    
  };


  const changeUser = async () => {
    await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch(changeUserName({ userName: response.body.userName }));
          toggleInputField(false);
        }
      })
      .catch((error) => console.log(error));
      
  };

const handleInput = (e) => {
  setData({userName: e.target.value});
}
    return (
      <form
      onSubmit={(e) => {
        e.preventDefault();
      
        console.log("formSubmitRun");
        handleData();
      }}
      >
        <label htmlFor="user-name">User name: </label>
        <input
                type="text"
                id="user-name"
                name="userName"
                defaultValue={user.userName}
                readOnly={false}
                onChange={handleInput}
              />
        <label htmlFor="first-name">First name: </label>
        <input
                type="text"
                id="first-name"
                name="First name"
                value={user.firstName}
                readOnly={true}
              />
        <label htmlFor="last-name">Last name: </label>
        <input
                type="text"
                id="last-name"
                name="Last name"
                value={user.lastName}
                readOnly={true}
              />
        <button className='edit-button'>Save</button>
      </form>
    );
  };

export default InputComponent;
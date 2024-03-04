import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import Transaction from '../../components/Transactions/Transaction';
import { getUserInfoAction } from '../../redux/actions/user.actions';
// import transactionsData from '../../data/transaction';

import './user.scss'
function User() {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    return(
        
        <div>
            THIS IS THE USER PAGE 
        </div>
    )
}
export default User;
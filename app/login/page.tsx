'use client';
import React, { ChangeEvent, useState } from 'react';
import axiosInstance from '../interceptors';

const LoginPage = () => {
  const [user, setUser] = useState<User>({ username: '', password: '' }); // kminchelle/0lelplR

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = async () => {
    const userDetail = await axiosInstance.post('login', user);
    localStorage.setItem('token', userDetail?.data?.token);

    setUser({ username: '', password: '' });
  };

  return (
    <>
      <div className='form p-3 space-y-3'>
        <h2 className='mb-5 text-2xl'>Login</h2>
        <div>
          <div className='block'>UserName</div>
          <input
            type='text'
            name='username'
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className=''>
          <div className='block'>Password</div>
          <input
            type='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

export default LoginPage;

'use client';
import React, { ChangeEvent, useState } from 'react';
import axiosInterceptor from '../interceptors';

interface UserLogin {
  username: string;
  password: string;
}

const LoginPage = () => {
  const [user, setUser] = useState<UserLogin>({ username: '', password: '' }); // kminchelle/0lelplR
  const [token, setToken] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = async () => {
    const userDetail = await axiosInterceptor.post('/login', user);

    localStorage.setItem('token', userDetail.token);
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
        <hr />
        <div>
          Token:{' '}
          {token
            ? `${token.slice(0, 15)}${'.'.repeat(5)}${token.slice(-15)}`
            : ''}
        </div>
      </div>
    </>
  );
};

export default LoginPage;

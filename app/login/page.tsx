import React from 'react';

interface User {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

const Login = () => {
  return (
    <>
      <div className='form p-3 space-y-3'>
        <h2 className='mb-5 text-2xl'>Login</h2>
        <div>
          <div className='block'>UserName</div>
          <input type='text' />
        </div>
        <div className=''>
          <div className='block'>Password</div>
          <input type='text' />
        </div>
      </div>
    </>
  );
};

export default Login;
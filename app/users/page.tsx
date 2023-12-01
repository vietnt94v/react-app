'use client';
import React, { useEffect } from 'react';
import Button from '../components/Button';

const User = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className='pt-3'>User</div>
      <div className='space-x-3'>
        <Button variant='secondary' size='lg' disabled>
          Click
        </Button>
        <Button variant='secondary' size='lg'>
          Click
        </Button>
      </div>
    </>
  );
};

export default User;

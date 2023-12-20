'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const User = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    const usersRes = await axios.get('users');
    setUsers(usersRes.data);
  };

  return (
    <>
      <div className='pt-3'></div>
    </>
  );
};

export default User;

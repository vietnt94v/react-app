'use client';
import React, { useEffect } from 'react';
import axios from 'axios';
// import axiosInterceptor from '../interceptors';

const UserDetail = ({ params }: { params: { username: string } }) => {
  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = async () => {
    const userDetail = await axios.get(`/users/${params.username}`);
  };

  return (
    <>
      <div></div>
    </>
  );
};

export default UserDetail;

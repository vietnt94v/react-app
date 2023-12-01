'use client';
import React from 'react';

const UserDetail = ({ params }: { params: { slug: string } }) => {
  console.log(params);

  return (
    <>
      <div>UserDetail</div>
      <div>{params.slug}</div>
    </>
  );
};

export default UserDetail;

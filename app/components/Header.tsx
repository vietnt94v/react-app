import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <>
      <div className='flex items-center bg-violet-400 h-14'>
        <div className='container'>
          <Image src='../../next.svg' alt='Logo' width={100} height={24} />
        </div>
      </div>
    </>
  );
};

export default Header;

import { FC } from 'react';

import { loginOverlaysTypes } from './loginOverlayTypes';

const LoginOverlay: FC<loginOverlaysTypes> = ({ handleClick }) => (
  <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center z-30'>
    <div className='bg-white/90 dark:bg-black/90 p-8'>
      <h1 onClick={handleClick} className='text-2xl mb-4 cursor-pointer hover:scale-105 hover:ease-in-out hover:transition'>
        login to use
      </h1>
      <h3 className='mb-1'>don't have an account?</h3>
      <div
        onClick={handleClick}
        className='cursor-pointer underline hover:scale-105 hover: ease-in-out hover:transition'
      >
        register
      </div>
    </div>
  </div>
);

export default LoginOverlay;
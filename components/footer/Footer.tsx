import { FC } from 'react';

const Footer: FC = () => (
  <footer>
    <div className='flex fixed h-20 w-screen justify-around items-center bottom-0 bg-white/70 dark:bg-black/70'>
      <div className='flex gap-14 dark:text-white'>
        <div className='cursor-pointer'>feed</div>
        <div className='cursor-pointer'>discover</div>
        <div className='cursor-pointer'>upload</div>
        <div className='cursor-pointer'>likes</div>
        <div className='cursor-pointer'>account</div>
      </div>
    </div>
  </footer>
);

export default Footer;
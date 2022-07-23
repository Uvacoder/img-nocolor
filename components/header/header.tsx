import { FC } from 'react';

import Switch from '../switch/switch';

const Header:FC = () => (
  <div className='flex sticky px-8 md:px-16 lg:px-32 justify-between items-center z-20 bg-white/70 dark:bg-black/70 top-0 h-20'>
    <a href='/#' className='tracking-wider cursor-pointer '>no color</a>
    <Switch />
  </div>
);

export default Header;
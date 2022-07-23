import { FC } from 'react';

import Switch from '../switch/switch';

const Header:FC = () => (
  <div className='flex sticky mx-8 md:mx-16 lg:mx-32 justify-between items-center z-20 bg-white/70 dark:bg-black/70 top-0 h-20'>
    <div className='tracking-wider cursor-pointer '>no color</div>
    <Switch />
  </div>
);

export default Header;
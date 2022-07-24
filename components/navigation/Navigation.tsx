import { FC } from 'react';
import Link from 'next/link';

import Switch from '../switch/switch';

const Navigation:FC = () => (
  <div className='flex sticky px-8 md:px-16 lg:px-36 justify-between items-center z-20 bg-white/70 dark:bg-black/70 top-0 h-20'>
    <Link href='/#' className='tracking-wider cursor-pointer '>no color</Link>
    <Switch />
  </div>
);

export default Navigation;
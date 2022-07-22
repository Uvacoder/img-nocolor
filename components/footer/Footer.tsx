import { FC } from 'react';

import { footerLinks } from './footerData';

const Footer: FC = () => (
  <footer>
    <div className='flex fixed h-20 w-screen justify-around items-center bottom-0 bg-white/70 dark:bg-black/70'>
      <div className='flex gap-4 sm:gap-14 dark:text-white'>
        {footerLinks.map((item) => <div>{item.link}</div>)}
      </div>
    </div>
  </footer>
);

export default Footer;
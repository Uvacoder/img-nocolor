import { FC } from 'react';
import Link from 'next/link';

import { footerLinks } from './footerData';

const Footer: FC = () => (
  <footer>
    <section className='group flex fixed h-20 w-screen justify-around items-center bottom-0 bg-white/70 dark:bg-black/70'>
      <div className='relative flex h-fit gap-4 sm:gap-14 dark:text-white'>
        {footerLinks.map((item) => (
          <>
            <Link href='/#' className='normal'>
              {item.link}
            </Link>
            <div className='hidden group-hover:flex absolute flex justify-center right-1/2 translate-x-1/2 bottom-1/2 -translate-y-1/2 w-screen h-20 items-center bg-white dark:bg-black cursor-pointer'>
              <div className='hover:scale-105 hover: ease-in-out hover:transition'>Login to use</div>
            </div>
          </>
        ))}
      </div>
    </section>
  </footer>
);

export default Footer;
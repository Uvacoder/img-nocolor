import { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { bottomMenuLinks } from './bottomMenuLinks';
import { loginLinks } from './loginLinks';

import { bottomMenuTypes } from './bottomMenuTypes';

const BottomMenu: FC<bottomMenuTypes> = ({ user, handleClick }) => {
  const router = useRouter();

  return (
    <footer>
      {!user ? (
        <section className='group flex fixed h-20 w-screen justify-around items-center bottom-0 bg-white/70 dark:bg-black/70'>
          <div className='relative flex h-fit gap-4 sm:gap-14 dark:text-white'>
            {bottomMenuLinks.map((item) => (
              <>
                <div
                  className={router.pathname === item.href ? 'underline underline-offset-4 cursor-default' : 'cursor-default'}
                >
                  {item.link}

                </div>
                <div className='hidden group-hover:flex absolute flex justify-center right-1/2 translate-x-1/2 bottom-1/2 -translate-y-1/2 w-screen h-20 items-center bg-white dark:bg-black cursor-pointer'>
                  <div
                    onClick={handleClick}
                    className='hover:scale-105 hover: ease-in-out hover:transition'
                  >
                    login to use
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
      ) : (
        <section className='flex fixed h-20 w-screen justify-around bottom-0 bg-white/70 dark:bg-black/70'>
          <div className='flex items-center gap-4 sm:gap-14 dark:text-white'>
            {bottomMenuLinks.map((item) => (
              <>
                <div className='relative group py-8'>
                  {item.href === '/account' ? (
                    <div className={`${router.pathname === item.href && 'underline underline-offset-4'} cursor-default`}>
                      {item.link}
                    </div>

                  ) : (
                    <Link href={item.href}>
                      <a href={item.href} className={`${router.pathname === item.href && 'underline underline-offset-4'}`}>
                        {item.link}
                      </a>
                    </Link>
                  )}

                  <div className={` ${item.href === '/account' && 'group-hover:flex'} hidden absolute h-20 justify-center items-center right-1/2 translate-x-1/2 bottom-1/2 -translate-y-1/2 pr-52 lg:pr-0 w-[100rem] lg:w-[1000rem]  bg-white dark:bg-black cursor-pointer gap-12`}>
                    {loginLinks.map((item) => (
                      <Link
                        href={item.href}
                        className='hover:scale-105 hover: ease-in-out hover:transition'
                      >
                        <a
                          onClick={item.link === 'log out' && handleClick}
                          href={item.href}
                        >
                          {item.link}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
      )}
    </footer>
  );
};

export default BottomMenu;

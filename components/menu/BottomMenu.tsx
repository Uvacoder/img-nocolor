import { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { bottomMenuLinks } from '../../public/data/bottomMenuLinks';
import { loginLinks } from '../../public/data/loginLinks';

import { bottomMenuTypes } from './bottomMenuTypes';
import LikesModal from '../modal/LikesModal';

const BottomMenu: FC<bottomMenuTypes> = ({ user, handleClick }) => {
  const router = useRouter();

  return (
    <footer>
      {!user ? (
        <section className='group flex fixed h-20 w-screen justify-around items-center bottom-0 bg-white/90 dark:bg-black/90'>
          <div className='relative flex h-fit gap-6 xs:gap-12 sm:gap-16 dark:text-white'>
            {bottomMenuLinks.map((item) => (
              <div key={item.id}>
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
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className='flex fixed h-20 w-screen justify-around bottom-0 bg-white/90 dark:bg-black/90'>
          <div className='flex items-center gap-6 xs:gap-12 sm:gap-16 dark:text-white'>
            {bottomMenuLinks.map((item) => (
              <div key={item.id}>
                <div
                  className='relative group py-8'
                >
                  {item.href === '/account' || item.href === '/likes' ? (
                    <div className={`${router.pathname === item.href && 'underline underline-offset-4'} cursor-pointer`}>
                      {item.link}
                    </div>

                  ) : (
                    <Link
                      href={item.href}
                    >
                      <a href={item.href} className={`${router.pathname === item.href && 'underline underline-offset-4'}`}>
                        {item.link}
                      </a>
                    </Link>
                  )}
                  <div className={` ${item.href === '/account' && 'group-hover:flex'} hidden absolute h-20 justify-center items-center right-1/2 translate-x-1/2 bottom-1/2 -translate-y-1/2 pr-52 md:pr-0 w-[100rem] lg:w-[1000rem] bg-white/95 dark:bg-black/95 cursor-pointer gap-8`}>
                    {loginLinks.map((item) => (
                      <Link
                        key={item.id}
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
                  {item.href === '/likes' && (
                    <LikesModal />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </footer>
  );
};

export default BottomMenu;

import { FC } from 'react';
import Image from 'next/image';

import { feedTypes } from './feedTypes';

const NoPhotosFeed: FC<feedTypes> = ({ data }) => (
  <div className='flex flex-3 flex-wrap align-center justify-center gap-2'>
    {data.map((item) => (
      <div className='bg-black/10 dark:bg-white/10 relative w-28 h-28 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-58 md:h-58 lg:w-[16rem] lg:h-[16rem] xl:w-[18rem] xl:h-[18rem] xxl:w-[22rem] xxl:h-[22rem] grayscale' />
    ))}
  </div>
);

export default NoPhotosFeed;
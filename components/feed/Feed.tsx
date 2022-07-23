import { FC } from 'react';
import Image from 'next/image';

import { feedTypes } from './feedTypes';

const Feed: FC<feedTypes> = ({ item }) => (
  <div className='relative w-24 h-24 sm:w-44 sm:h-44 md:w-64 md:h-64 lg:w-[20rem] lg:h-[20rem] 2xl:w-[25rem] 2xl:h-[25rem] grayscale'>
    <Image src={item.url} layout='fill' objectFit='cover' />
  </div>
);

export default Feed;
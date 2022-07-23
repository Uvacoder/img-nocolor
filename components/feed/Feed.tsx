import { FC } from 'react';
import Image from 'next/image';

import { feedTypes } from './feedTypes';

const Feed: FC<feedTypes> = ({ item }) => (
  <div className='relative w-28 h-28 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[18rem] lg:h-[18rem] xxl:w-[22rem] xxl:h-[22rem] grayscale'>
    <Image src={item.url} layout='fill' objectFit='cover' />
  </div>
);

export default Feed;
import Image from 'next/image';
import { FC } from 'react';

import { heroSectionData } from './heroSection.data';

const HeroSection: FC = () => (
  <div className='flex flex-3 flex-wrap align-center justify-center dark:bg-black gap-2'>
    {heroSectionData.map((item) => (
      <div className='relative w-36 h-36 sm:w-44 sm:h-44 md:w-64 md:h-64 lg:w-[20rem] lg:h-[20rem] 2xl:w-[25rem] 2xl:h-[25rem] grayscale'>
        <Image src={item.url} layout='fill' objectFit='cover' />
      </div>
    ))}
  </div>
);

export default HeroSection;
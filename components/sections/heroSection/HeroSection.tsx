import Image from 'next/image';
import { FC } from 'react';

import { heroSectionData } from './heroSection.data';

const HeroSection: FC = () => (
  <div className='flex flex-3 flex-wrap mx-8 opacity-80 align-center justify-center dark:bg-black gap-8'>
    {heroSectionData.map((item) => <Image height={300} width={300} src={item.url} />)}
  </div>
);

export default HeroSection;
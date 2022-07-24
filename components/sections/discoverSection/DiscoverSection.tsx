import { FC } from 'react';

import Feed from '../../feed/Feed';

import { discoverSectionData } from './discoverSectionData';

const DiscoverSection: FC = () => (
  <div className='flex flex-3 flex-wrap align-center justify-center dark:bg-black gap-2'>
    {discoverSectionData.map((item) => (
      <Feed
        key={item.id}
        item={item}
      />
    ))}
  </div>
);

export default DiscoverSection;

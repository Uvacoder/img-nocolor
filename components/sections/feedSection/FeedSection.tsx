import { FC } from 'react';

import Feed from '../../feed/Feed';

import { feedSectionData } from './feedSectionData';

const FeedSection: FC = () => (
  <div className='flex flex-3 flex-wrap align-center justify-center dark:bg-black gap-2'>
    {feedSectionData.map((item) => (
      <Feed
        key={item.id}
        item={item}
      />
    ))}
  </div>
);

export default FeedSection;
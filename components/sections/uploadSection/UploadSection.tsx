import { FC } from 'react';

import Feed from '../../feed/Feed';

import { uploadSectionData } from './uploadSectionData';

const UploadSection: FC = () => (
  <div className='relative flex flex-3 flex-wrap align-center justify-center dark:bg-black gap-2'>
    {uploadSectionData.map((item) => (
      <Feed
        key={item.id}
        item={item}
      />
    ))}
  </div>
);

export default UploadSection;
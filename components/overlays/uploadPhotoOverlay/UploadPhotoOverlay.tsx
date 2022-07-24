import { FC } from 'react';

const UploadPhotoOverlay: FC = () => (
  <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center z-30'>
    <div className='bg-white/70 dark:bg-black/70 p-6 rounded-md'>
      <form>
        <h1 className='text-2xl mb-6 cursor-pointer'>
          upload photo
        </h1>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center gap-1'>
            <label>choose photo</label>
            <input type='file' name='file' accept='.jpg,.png' className='block md:w-4/5 p-2 text-sm text-black/70 dark:text-white/70 rounded-lg cursor-pointer bg-white/70 dark:bg-white/20 placeholder:text-black/70 dark:placeholder:text-white/70 file:border-0 file:rounded-sm file:text-black dark:file:text-white' />
            <span className='text-xs mx-4 md:w-4/5 opacity-70'>please use square and b&w photos otherwise we will convert them</span>
          </div>
          <div className='flex flex-col items-center gap-1'>
            <label>description</label>
            <input type='text' className='w-full md:w-4/5 p-2 bg-white/70 dark:bg-white/20 text-sm rounded-md placeholder:text-black/70 dark:placeholder:text-white/70' placeholder='description #hashtag #hashtag2' />
            <span className='text-xs md:w-4/5 opacity-70'>if you want to use hashtags separate them by space</span>
          </div>
          <button type='submit' className='p-4 bg-white/70 dark:bg-white/20 rounded-md'>upload</button>
        </div>
      </form>
    </div>
  </div>
);

export default UploadPhotoOverlay;
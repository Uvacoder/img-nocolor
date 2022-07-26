import { FC } from 'react';

const UploadPhotoOverlay: FC = () => (
  <div className='absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 mx-auto w-4/5 sm:w-fit text-center bg-white/90 dark:bg-black/90'>
    <div className='p-6'>
      <form>
        <h1 className='text-2xl mb-6 cursor-pointer'>
          upload photo
        </h1>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center gap-1'>
            <label>choose photo</label>
            <input type='file' name='file' accept='.jpg,.png' className='block w-4/5 p-2 text-sm text-black/70 dark:text-white/70 cursor-pointer bg-black/10 dark:bg-white/10 placeholder:text-black/70 dark:placeholder:text-white/70 file:border-0 file:text-black/80 dark:file:bg-white/10 dark:file:text-white/80 file:hover:cursor-pointer' />
            <span className='text-xs mx-4 md:w-4/5 opacity-70 break-normal'>please use square and b&w photos otherwise we will convert them</span>
          </div>
          <div className='flex flex-col items-center gap-1'>
            <label>description</label>
            <input type='text' className='w-4/5 p-2 bg-black/10 dark:bg-white/10 text-sm placeholder:text-black/70 dark:placeholder:text-white/70' placeholder='description #hashtag #hashtag2' />
            <span className='text-xs md:w-4/5 opacity-70'>if you want to use hashtags separate them by space</span>
          </div>
          <button type='submit' className='p-4 bg-black/10 dark:bg-white/10'>upload</button>
        </div>
      </form>
    </div>
  </div>
);

export default UploadPhotoOverlay;
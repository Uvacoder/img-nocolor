import Image from 'next/image';

const Profile = () => (
  <div className='flex flex-col items-center mb-12'>
    <h1 className='text-4xl mt-16 mb-4 text-end mx-4 sm:mx-12 md:mx-20'>profile</h1>
    <div className='relative w-28 h-28 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-58 md:h-58 lg:w-[16rem] lg:h-[16rem] xl:w-[18rem] xl:h-[18rem] xxl:w-[22rem] xxl:h-[22rem] grayscale rounded-full overflow-hidden mb-4 cursor-pointer'>
      <Image src='https://res.cloudinary.com/dznarb2eu/image/upload/w_500,h_500/v1658614621/nocolor%20-%20feedSection/feed23_uirckp.jpg' layout='fill' objectFit='cover' />
    </div>
    <h3 className='text-sm text-black dark:text-white mb-4 cursor-pointer'>@lukyno</h3>
    <div className='flex gap-4'>
      <button className='bg-black/10 dark:bg-white/10 p-4'>followers</button>
      <button className='bg-black/10 dark:bg-white/10  p-4'>following</button>
    </div>
  </div>
);

export default Profile;
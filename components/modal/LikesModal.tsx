const LikesModal = () => (
  <div className='group-hover:flex hidden absolute h-80 w-80 justify-center right-1/2 translate-x-1/2 bottom-1/2 mr-16 sm:mr-0 bg-white/90 dark:bg-black/90 mb-10 gap-8 overflow-hidden'>
    <div className='flex flex-col'>
      <h3 className='text-center my-4'>likes</h3>
      <div className='text-sm flex flex-col px-6 gap-4 text-left overflow-y-scroll'>
        <p>user @Lukas likes your photo</p>
        <p>user @Petr started following you</p>
        <p>user @Honza likes your photo</p>
        <p>user @Misa likes your photo</p>
        <p>user @Dan started following you</p>
        <p>user @Zuzka likes your photo</p>
        <p>user @Tereza likes your photo</p>
        <p>user @Petra started following you</p>
        <p>user @Vojta likes your photo</p>
        <p>user @Matej likes your photo</p>
      </div>
    </div>
  </div>
);

export default LikesModal;
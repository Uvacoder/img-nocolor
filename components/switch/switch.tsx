import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { useUserContext } from '../../contexts';

const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const { theme, setTheme } = useUserContext();

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  };

  return (
    <div className={`flex ${isOn ? 'justify-start' : 'justify-end'} items-center p-1 rounded-full cursor-pointer w-8 h-6 bg-black dark:bg-white`} onClick={() => { toggleSwitch(); setTheme(theme === 'dark' ? 'light' : 'dark'); }}>
      <motion.div className='w-4 h-4 rounded-full bg-white dark:bg-black' layout transition={spring} />
    </div>
  );
};

export default Switch;
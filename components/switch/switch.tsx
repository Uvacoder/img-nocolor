import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const { theme, setTheme } = useTheme();

  useEffect(() => () => {
    setTheme('dark');
  }, []);

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  };

  return (
    <div className={`flex ${isOn ? 'justify-start' : 'justify-end'} items-center p-1 rounded-full cursor-pointer w-12 h-8 bg-black dark:bg-white`} data-isOn={isOn} onClick={() => { toggleSwitch(); setTheme(theme === 'dark' ? 'light' : 'dark'); }}>
      <motion.div className='w-6 h-6 rounded-full bg-white dark:bg-black' layout transition={spring} />
    </div>
  );
};

export default Switch;
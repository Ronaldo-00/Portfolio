import React from 'react'
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Custom hook to handle visibility animation
 export const useProjectInView = (threshold = 0.2) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold });
  
    React.useEffect(() => {
      if (inView) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }, [controls, inView]);
  
    return { ref, controls };
};
// Animation Variants
export const VariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } }
  };

export const VariantsRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } }
};
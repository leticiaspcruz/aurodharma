import React, { useRef, useEffect } from 'react';
import { Container } from './style';
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: JSX.Element,
  width?: "fit-content" | "100%",
}

const Reveal = ({children, width = "fit-content"}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animate = useAnimation();

  useEffect (() => {
    if (isInView) {
      animate.start("visible")
    }
  }, [isInView, animate])

  return (
    <Container ref={ref} style={{ width }}>
      <motion.div 
        variants={
          {
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }
      }
        initial="hidden"
        animate={animate}
        transition={{ duration: 0.5, delay: 0.30 }}
      >
        {children}
      </motion.div>
    </Container>
  )
};

export default Reveal;
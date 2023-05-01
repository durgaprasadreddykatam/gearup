import React from 'react';
import Image from 'next/image';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

export default function ImageSlider({ style, imgpath }) {
  const [car, setCar] = React.useState(0);
  const { scrollX } = useViewportScroll();

  const variants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const x = useTransform(scrollX, [0, imgpath.length * 1000], [0, -(imgpath.length - 1) * 100]);

  const handleDotClick = (index) => {
    setCar(index);
  };

  return (
    <div className={`${style} relative`} style={{ overflow: 'hidden' }}>
      <motion.div
        key={car}
        className={style}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        style={{ position: 'relative', width: `${imgpath.length * 100}%`, display: 'flex', left: `${-car * 100}%`, x }}
      >
        {imgpath.map((path, index) => (
          <Image key={path} src={path} alt="" width={500} height={500} />
        ))}
      </motion.div>
      <div className={`absolute bottom-0 w-full flex justify-center items-center`}>
        {imgpath.map((path, index) => (
          <div
            key={path}
            onClick={() => handleDotClick(index)}
            className={`${car === index ? 'bg-white' : 'bg-black'} m-3 cursor-pointer h-4 w-4 rounded-full`}
          ></div>
        ))}
      </div>
    </div>
  );
}

'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function HeroAnimated({ children }: { children: React.ReactNode[] }) {
  return (
    <>
      {children.map((child, i) => (
        <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" animate="show">
          {child}
        </motion.div>
      ))}
    </>
  )
}

// src/components/TransitionWrapper.jsx
'use client'
import { motion } from 'framer-motion'

export default function TransitionWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-dark-300 text-white py-12">
      <div className="container-max section-padding">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
          >
            <ArrowUp size={24} />
          </motion.button>
          
          <div className="text-center">
            <p className="text-lg mb-2">
              Made with <Heart className="inline text-red-500" size={20} /> by Collins Ndege
            </p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
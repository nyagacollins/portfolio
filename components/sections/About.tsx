'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Coffee, Lightbulb } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-200">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I’m a dedicated Computer Science student with hands-on experience gained during my industrial attachment, where I developed strong skills in Quality Assurance and software development. During this period, I worked with Angular and Spring Boot to build and test web applications, ensuring functionality, performance, and reliability.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I’m passionate about solving complex problems and transforming ideas into efficient, user-friendly solutions. My interests span modern web technologies, backend development, and continuous learning in emerging tech fields. I’m always eager to expand my skill set and contribute to impactful projects.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new coffee shops, 
                reading tech blogs, or contributing to open-source projects.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-dark-100 rounded-lg shadow-md">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Code className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Clean Code</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Writing maintainable and scalable code
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-dark-100 rounded-lg shadow-md">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Lightbulb className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Problem Solving</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Finding creative solutions to complex challenges
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-dark-100 rounded-lg shadow-md">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Coffee className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Continuous Learning</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Always staying updated with latest technologies
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
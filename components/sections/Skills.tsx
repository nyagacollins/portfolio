'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from '@react-spring/web'
import { useState, useEffect } from 'react'

const skills = [
  { name: 'javascript', level: 95, color: 'bg-blue-500' },
  { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
  { name: 'Java', level: 90, color: 'bg-blue-600' },
  { name: 'C++', level: 90, color: 'bg-blue-600' },
  { name: 'C', level: 90, color: 'bg-blue-600' },
  { name: 'Html', level: 90, color: 'bg-blue-600' },
  { name: 'Node.js', level: 85, color: 'bg-green-600' },
  { name: 'Python', level: 80, color: 'bg-yellow-600' },
  { name: 'PostgreSQL', level: 85, color: 'bg-indigo-500' },
  { name: 'Docker', level: 80, color: 'bg-cyan-500' },
  { name: 'GraphQL', level: 70, color: 'bg-pink-500' },
  { name: 'MySQL', level: 90, color: 'bg-indigo-500' },
  

]

const SkillBar = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [animatedLevel, setAnimatedLevel] = useState(0)

  const springProps = useSpring({
    width: inView ? `${animatedLevel}%` : '0%',
    config: { tension: 100, friction: 10 },
  })

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level)
      }, index * 100)
      return () => clearTimeout(timer)
    }
  }, [inView, skill.level, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium">{skill.name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <animated.div
          style={springProps}
          className={`h-full ${skill.color} rounded-full relative`}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </animated.div>
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                
              </h3>
              {skills.slice(0, 6).map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                
              </h3>
              {skills.slice(7).map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index + 4} />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm constantly learning and adapting to new technologies. 
              These skills represent my current expertise, but I'm always 
              excited to take on new challenges and expand my knowledge.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
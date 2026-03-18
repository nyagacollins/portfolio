'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'E$M TECHNOLOGIES',
    location: 'TATU CITY,KENYA',
    period: '12/09/2025-14/11/2025',
    description: [
      'Developed MVP from scratch using modern web technologies',
      'Collaborated with design team to implement pixel-perfect UIs',
      'Optimized application performance improving load times by 40%',
      'Integrated third-party APIs and payment processing systems'
    ],
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Stripe', 'Heroku']
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'E&M TECHNOLOGIES',
    location: 'TATU CITY,KENYA',
    period: '12/09/2025-14/11/2025',
    description: [
      'Built responsive websites for 20+ clients across various industries',
      'Collaborated with designers to translate mockups into code',
      'Implemented SEO best practices improving search rankings',
      'Maintained and updated existing client websites'
    ],
    technologies: ['ANGULAR']
  },
  {
    id: 3,
    title: 'Junior Developer Intern',
    company: 'E&M TECHNOLOGIES',
    location: 'TATU CITY,KENYA',
    period: '12/09/2025-14/11/2025',
    description: [
      'Assisted in developing internal tools and dashboards',
      'Learned modern development practices and version control',
      'Participated in code reviews and team meetings',
      'Contributed to bug fixes and feature implementations'
    ],
    technologies: ['React', 'Python', 'Git', 'REST APIs', 'MySQL']
  }
]

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-2 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-dark-300 shadow-lg"></div>
      
      {/* Content */}
      <div className="ml-12 pb-8">
        <div className="bg-white dark:bg-dark-100 rounded-lg shadow-lg p-6 card-hover">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {experience.title}
            </h3>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
              <Calendar size={16} className="mr-1" />
              {experience.period}
            </div>
          </div>
          
          <div className="flex items-center text-blue-600 dark:text-blue-400 mb-4">
            <span className="font-semibold">{experience.company}</span>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <MapPin size={16} className="mr-1" />
              {experience.location}
            </div>
          </div>
          
          <ul className="space-y-2 mb-4">
            {experience.description.map((item, i) => (
              <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                <span className="text-blue-600 mr-2 mt-1.5 text-xs">▪</span>
                {item}
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Experience
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
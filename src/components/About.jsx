import { motion } from 'framer-motion';
import { personalInfo, education } from '../data/portfolio-data';

const About = () => {
  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">About Me</span>
        </h2>

        {/* Focus Areas */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Research Focus</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {personalInfo.focus.map((area, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-800 dark:text-gray-200 font-medium">{area}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.institution}
                    </h4>
                    {edu.school && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {edu.school}
                      </p>
                    )}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <p>{edu.location}</p>
                    <p>{edu.endDate}</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {edu.degree}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-700 dark:text-gray-300">
                  <p className="font-semibold">GPA: {edu.gpa}</p>
                  {edu.rank && <p className="font-semibold">Rank: {edu.rank}</p>}
                </div>
                {edu.coursework && (
                  <div className="mt-3">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Relevant Coursework:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

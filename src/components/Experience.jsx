import { motion } from 'framer-motion';
import { FiBriefcase, FiSearch } from 'react-icons/fi';
import { workExperience, researchExperience } from '../data/portfolio-data';

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    className="relative pl-8 pb-12 last:pb-0"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    {/* Timeline dot */}
    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>

    {/* Timeline line */}
    <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 last:hidden"></div>

    <div className="card">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {exp.position}
          </h3>
          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
            {exp.company || exp.institution}
          </p>
        </div>
        <div className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 text-sm">
          <p>{exp.location}</p>
          <p>
            {exp.startDate} – {exp.endDate}
          </p>
        </div>
      </div>

      <ul className="space-y-2">
        {exp.description.map((item, i) => (
          <li
            key={i}
            className="text-gray-700 dark:text-gray-300 flex items-start"
          >
            <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Experience</span>
        </h2>

        {/* Research Experience */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <FiSearch className="text-3xl text-blue-600 dark:text-blue-400 mr-3" />
            <h3 className="text-2xl font-semibold">Research Experience</h3>
          </div>
          <div className="relative">
            {researchExperience.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <div className="flex items-center mb-8">
            <FiBriefcase className="text-3xl text-blue-600 dark:text-blue-400 mr-3" />
            <h3 className="text-2xl font-semibold">Industry Experience</h3>
          </div>
          <div className="relative">
            {workExperience.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

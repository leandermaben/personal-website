import { motion } from 'framer-motion';
import { FiExternalLink, FiStar, FiAward } from 'react-icons/fi';
import { featuredPublications, additionalPublications } from '../data/portfolio-data';

const Research = () => {
  return (
    <section id="research" className="section-container bg-gray-50 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Research & Publications</span>
        </h2>

        {/* Featured Publications */}
        <div className="space-y-8 mb-12">
          {featuredPublications.map((pub, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col">
                {/* Title and Metadata */}
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span className="flex items-center">
                      <span className="font-semibold mr-1">With:</span> {pub.authors}
                    </span>
                    {pub.venue && (
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full font-semibold">
                        {pub.venue}
                      </span>
                    )}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {pub.stars && (
                      <span className="flex items-center px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm">
                        <FiStar className="mr-1" /> {pub.stars} GitHub Stars
                      </span>
                    )}
                    {pub.citations && (
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">
                        {pub.citations} Citations
                      </span>
                    )}
                    {pub.award && (
                      <span className="flex items-center px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">
                        <FiAward className="mr-1" /> {pub.award}
                      </span>
                    )}
                    {pub.status && (
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">
                        {pub.status}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {pub.description}
                </p>

                {/* Highlights */}
                {pub.highlights && (
                  <div className="mb-4">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Highlights:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      {pub.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Link */}
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
                  >
                    View Project <FiExternalLink className="ml-2" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6">Additional Publications</h3>
          <div className="card">
            <ul className="space-y-3">
              {additionalPublications.map((pub, index) => (
                <li
                  key={index}
                  className="text-gray-700 dark:text-gray-300 flex items-start"
                >
                  <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                  <span>{pub}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Research;

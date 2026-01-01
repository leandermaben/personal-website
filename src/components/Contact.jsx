import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { SiGooglescholar } from 'react-icons/si';
import { personalInfo } from '../data/portfolio-data';

const Contact = () => {
  const contactMethods = [
    {
      icon: FiMail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'github.com/leandermaben',
      href: personalInfo.github,
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/leander-maben',
      href: personalInfo.linkedin,
    },
    {
      icon: SiGooglescholar,
      label: 'Google Scholar',
      value: 'Scholar Profile',
      href: personalInfo.scholar,
    },
  ];

  return (
    <section id="contact" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Get In Touch</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12">
            I'm always open to discussing research collaborations, interesting projects,
            or opportunities. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card flex items-center space-x-4 hover:shadow-2xl transform hover:scale-105 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <method.icon size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {method.label}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind CSS.
        </p>
      </footer>
    </section>
  );
};

export default Contact;

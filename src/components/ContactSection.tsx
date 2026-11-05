import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Download } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'fredrik.fehrm@gmail.com',
    href: 'mailto:fredrik.fehrm@gmail.com',
    description: 'Email me here'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Fredrik Fehrm',
    href: 'https://www.linkedin.com/in/fredrik-fehrm-9471a9360/',
    description: 'Connect professionally'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'fredster-dev',
    href: 'https://github.com/fredster-dev',
    description: 'View my code'
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="sec sec--contact py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-6 ink">Let's Create Something Amazing</h2>
          <p className="text-lg ink-2 max-w-2xl mx-auto mb-8">
            Want to chat about design or collaborate on something new? I'd love to hear from you.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a className="btn-brand" href={`${import.meta.env.BASE_URL}CVFredrikFehrmUX_UI.pdf`} download>
              <Download className="w-4 h-4" aria-hidden="true" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <ul className="contact-grid grid md:grid-cols-3 gap-6" role="list">
          {contactLinks.map((link, index) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="float contact-card"
              >
                <span className="contact-card__icon">
                  <link.icon className="w-6 h-6" aria-hidden="true" />
                </span>
                <h3>{link.label}</h3>
                <p className="desc">{link.description}</p>
                <p className="value">
                  {/* Får radbrytas efter @ om kortet blir smalt */}
                  {link.value.includes('@') ? (
                    <>
                      {link.value.split('@')[0]}@<wbr />
                      {link.value.split('@')[1]}
                    </>
                  ) : (
                    link.value
                  )}
                </p>
                {!link.href.startsWith('mailto:') && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-8 border-t"
        >
          <p className="ink-2">© {new Date().getFullYear()} Fredrik Fehrm. Designed and built with care.</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default ContactSection;

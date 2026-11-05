import { motion } from 'motion/react';
import { howIWork } from '../data/howIWork';

const AboutSection = () => {
  return (
    <section id="about" className="sec pb-16 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="float about-block"
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-copy">
            <p>
              When something is hard to trust or hard to understand, the problem is almost never that the
              user doesn't get it. It's that the product hasn't managed to explain itself. That's the part I
              find interesting.
            </p>
            <p>
              As a UX designer, I see myself as a bridge between the users and the company. They don't always
              want the same things, so a big part of my work is finding solutions that work for both.
            </p>
            <p>
              I like finding the small problems people have stopped noticing because they've gotten used to
              them, and figuring out what's actually causing them. I do the same outside of work. If something
              keeps slowing down my day, I'll usually try to build something to fix it. Right now, that's an
              app I'm working on to make starting my workday a little easier.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hiw-wrap"
        >
          <h3 id="how-i-work" className="section-title" data-scroll-target>
            How I work
          </h3>
          <ol className="hiw-grid" role="list" data-spotlight-group>
            {howIWork.map((item, index) => (
              <motion.li
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <article
                  id={`hiw-${item.key}`}
                  className={`float hiw-card hiw-card--${index + 1}`}
                  data-scroll-target
                >
                  <span className="hiw-num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h4 className="hiw-title">{item.title}</h4>
                  <div className="hiw-text">
                    {item.text.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

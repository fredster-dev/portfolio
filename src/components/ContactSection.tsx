import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Mail, Linkedin, MessageSquare, Download } from 'lucide-react';

const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@yourname.com',
      href: 'mailto:hello@yourname.com',
      description: 'Drop me a line'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/yourname',
      href: 'https://linkedin.com/in/yourname',
      description: 'Connect professionally'
    },
    {
      icon: MessageSquare,
      label: 'Portfolio Contact Form',
      value: 'Send a message',
      href: '#contact-form',
      description: 'Lets people message you without revealing your email publicly'
    }
  ];

  return (
    <section id="contact" className="py-16 px-8 relative z-10 bg-[#E9F1EF]/80">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-6">Let's Create Something Amazing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Want to chat about design or collaborate on something new? I'd love to hear from you.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button className="mb-12 cursor-pointer" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block group"
            >
              <Card className="border border-[#3C5556]/20 shadow-sm bg-white/90 backdrop-blur-sm hover:shadow-lg hover:shadow-[#3C5556]/20 hover:border-[#3C5556]/40 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#E9F1EF] rounded-full flex items-center justify-center group-hover:bg-[#3C5556] group-hover:text-white transition-all duration-300 border border-[#3C5556]/30">
                    <link.icon className="w-6 h-6" />
                  </div>
                  <h4 className="mb-2 group-hover:text-[#353B45] transition-colors text-[#353B45]">
                    {link.label}
                  </h4>
                  <p className="text-[#5A6C6D] text-sm mb-2">
                    {link.description}
                  </p>
                  <p className="text-[#3C5556] group-hover:underline group-hover:text-[#353B45] transition-colors">
                    {link.value}
                  </p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground">
            © 2025 Fredrik Fehrm. Designed and built with care.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default ContactSection;
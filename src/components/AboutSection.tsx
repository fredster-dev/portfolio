import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Heart, Users, Palette } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Empathy',
      description: 'Understanding user needs and emotions drives every design decision I make.',
      bgColor: 'bg-[#F5D4C3]/70',
      iconColor: 'text-[#3C5556]',
      borderColor: 'border-[#F5D4C3]/80'
    },
    {
      icon: Users,
      title: 'Usability',
      description: 'Creating intuitive interfaces that feel natural and effortless to use.',
      bgColor: 'bg-[#C8DBD7]/70',
      iconColor: 'text-[#3C5556]',
      borderColor: 'border-[#C8DBD7]/80'
    },
    {
      icon: Palette,
      title: 'Aesthetics',
      description: 'Balancing beautiful visuals with functional design for memorable experiences.',
      bgColor: 'bg-[#E9F1EF]/70',
      iconColor: 'text-[#3C5556]',
      borderColor: 'border-[#E9F1EF]/80'
    }
  ];

  return (
    <section id="about" className="pt-8 pb-16 px-8 relative z-10 bg-[#F8F5EE]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-[#E09789]/60 w-16 mr-6"></div>
            <h2 className="text-[#3C5556]">About Me</h2>
            <div className="h-px bg-[#E09789]/60 w-16 ml-6"></div>
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground">
            <p>
              <strong className="font-medium text-[#3C5556]">Creativity and listening to other people's needs</strong> have always been important to me, and I also learn best when I <strong className="font-medium text-[#3C5556]">interact with others</strong>. 
              I'm genuinely interested in why solutions are the way they are, but I always try to figure out how to <strong className="font-medium text-[#3C5556]">improve them</strong>.   
              I believe <strong className="font-medium text-[#3C5556]">collaborating with cross-functional teams</strong> where honest criticism is given and taken, is important for development as a UX designer!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-center mb-12">My Design Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className={`${value.bgColor} ${value.borderColor} border shadow-sm h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                  data-value={value.title.toLowerCase()}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 bg-white/80 rounded-full flex items-center justify-center border ${value.borderColor}`}>
                      <value.icon className={`w-6 h-6 ${value.iconColor}`} />
                    </div>
                    <h4 className="mb-3">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
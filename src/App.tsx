import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Award,
  CheckCircle,
  Users,
  Clock,
  ArrowRight
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function App() {
  const skills = [
    { name: 'Drupal 8/9/10', level: 'Expert', years: '10+' },
    { name: 'PHP', level: 'Expert', years: '10+' },
    { name: 'MySQL', level: 'Advanced', years: '8+' },
    { name: 'JavaScript', level: 'Advanced', years: '8+' },
    { name: 'React', level: 'Advanced', years: '5+' },
    { name: 'DevOps', level: 'Intermediate', years: '5+' },
    { name: 'AWS', level: 'Intermediate', years: '4+' },
    { name: 'Docker', level: 'Intermediate', years: '4+' }
  ]

  const projects = [
    {
      title: 'Enterprise E-commerce Platform',
      description: 'Built a complex multi-vendor e-commerce platform using Drupal Commerce with custom modules for inventory management and advanced reporting.',
      tech: ['Drupal 9', 'Commerce', 'React', 'MySQL'],
      impact: '500K+ products, 10K+ daily users'
    },
    {
      title: 'Healthcare Content Management System',
      description: 'Developed a HIPAA-compliant CMS for a major healthcare provider with patient portal integration and custom workflow automation.',
      tech: ['Drupal 10', 'PHP', 'PostgreSQL', 'Docker'],
      impact: '50+ medical facilities, 100K+ patients'
    },
    {
      title: 'Media & Publishing Platform',
      description: 'Created a headless Drupal architecture serving content to multiple front-end applications including mobile apps and web portals.',
      tech: ['Drupal 9', 'REST API', 'React', 'Redux'],
      impact: '1M+ monthly page views'
    },
    {
      title: 'Government Portal Migration',
      description: 'Led the migration of a large government website from Drupal 7 to Drupal 10 with minimal downtime and enhanced security features.',
      tech: ['Drupal 10', 'Migration API', 'Varnish', 'Solr'],
      impact: '99.9% uptime during migration'
    }
  ]

  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Custom Drupal Development',
      description: 'Tailored Drupal solutions including custom modules, themes, and integrations to meet your specific business needs.'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Site Migration & Upgrades',
      description: 'Seamless migration from older Drupal versions or other CMS platforms with zero data loss and minimal downtime.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Performance Optimization',
      description: 'Comprehensive site audits and optimization strategies to improve loading speeds and user experience.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Training & Consulting',
      description: 'Expert consulting services and team training to help organizations maximize their Drupal investment.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-bold text-xl text-slate-900"
            >
              Drupal Expert
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors">Skills</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">Projects</a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">Services</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
                Drupal
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {' '}Expert
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
                10 years of crafting exceptional digital experiences with Drupal. 
                From enterprise solutions to complex migrations, I deliver results that scale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 hover:border-slate-400">
                <ArrowRight className="mr-2 h-5 w-5" />
                View My Work
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">10+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">100+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
                <div className="text-slate-600">Happy Clients</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Crafting Digital Excellence with Drupal
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                With over a decade of experience in Drupal development, I've helped organizations 
                transform their digital presence through robust, scalable, and secure web solutions.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                My expertise spans from complex enterprise migrations to custom module development, 
                always focusing on performance, security, and user experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  <Award className="mr-2 h-4 w-4" />
                  Drupal Certified
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  100% Success Rate
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  <Clock className="mr-2 h-4 w-4" />
                  On-Time Delivery
                </Badge>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">My Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Deep technical analysis and strategic planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Agile development with continuous communication</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Thorough testing and quality assurance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Post-launch support and optimization</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A comprehensive skillset built over 10 years of professional development
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={fadeInUp}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                      <Badge variant={skill.level === 'Expert' ? 'default' : 'secondary'}>
                        {skill.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600">{skill.years} years</p>
                    <div className="mt-4 bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ 
                          width: skill.level === 'Expert' ? '100%' : 
                                 skill.level === 'Advanced' ? '85%' : '70%' 
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Showcasing some of my most impactful Drupal implementations
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm font-medium text-green-700 bg-green-50 px-3 py-2 rounded-lg">
                      Impact: {project.impact}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Services Offered</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive Drupal solutions tailored to your business needs
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6 text-center">
                    <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Work Together</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to transform your digital presence with Drupal? Let's discuss your project.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600">hello@drupalexpert.dev</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600">+1 (555) 123-4567</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Location</h3>
              <p className="text-slate-600">San Francisco, CA</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400">
              © 2024 Drupal Expert. Crafting exceptional digital experiences since 2014.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
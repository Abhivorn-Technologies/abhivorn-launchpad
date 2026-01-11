import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useState } from 'react';

const filters = ['All', 'Healthcare', 'Finance', 'Enterprise', 'HRMS'];

const caseStudies = [
  {
    id: 1,
    company: 'Elevate Rootz',
    industry: 'Healthcare',
    headline: 'How Elevate Rootz onboarded 100+ patients in their first month',
    challenge: 'The wellness center had no patient management system, relied on manual appointment booking, and struggled with follow-up tracking.',
    solution: 'We built a custom CRM with an integrated booking system, automated reminders, and a patient portal for seamless engagement.',
    results: [
      { metric: '100+', label: 'Patients in Month 1' },
      { metric: '80%', label: 'Booking Time Reduction' },
      { metric: '95%', label: 'Patient Satisfaction' }
    ],
    technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
    timeline: '9 weeks'
  },
  {
    id: 2,
    company: 'US Mortgage Processing',
    industry: 'Finance',
    headline: 'Achieving 98.5% data extraction accuracy for mortgage documents',
    challenge: 'Manual processing of mortgage documents was time-consuming, error-prone, and created bottlenecks in the approval process.',
    solution: 'We developed an OCR-powered document extraction system that automatically captures and validates data from mortgage applications.',
    results: [
      { metric: '98.5%', label: 'Extraction Accuracy' },
      { metric: '85%', label: 'Time Reduction' },
      { metric: '3x', label: 'Processing Capacity' }
    ],
    technologies: ['Python', 'OCR', 'AWS Lambda', 'PostgreSQL'],
    timeline: '8 weeks'
  },
  {
    id: 3,
    company: 'AR Calling System',
    industry: 'Enterprise',
    headline: 'Building a real-time calling platform for 500+ users',
    challenge: 'The client needed a reliable WebRTC-based calling solution with low latency and high connection reliability.',
    solution: 'We built a cross-platform calling app using React Native with WebRTC integration and robust signaling infrastructure.',
    results: [
      { metric: '500+', label: 'Active Users' },
      { metric: '99.2%', label: 'Connection Rate' },
      { metric: '<200ms', label: 'Latency' }
    ],
    technologies: ['React Native', 'WebRTC', 'Node.js', 'Redis'],
    timeline: 'Ongoing'
  },
  {
    id: 4,
    company: 'Insurance HRMS',
    industry: 'HRMS',
    headline: 'Transforming HR operations for a leading insurance company',
    challenge: 'Manual attendance tracking, no performance analytics, and compliance issues with labor regulations.',
    solution: 'We deployed VORN HR with biometric integration, automated compliance tracking, and custom HR analytics dashboards.',
    results: [
      { metric: '90%', label: 'Conflict Reduction' },
      { metric: '70%', label: 'Admin Time Saved' },
      { metric: '100%', label: 'Compliance Rate' }
    ],
    technologies: ['VORN HR', 'Biometric Integration', 'Power BI'],
    timeline: '3 weeks'
  },
  {
    id: 5,
    company: 'Multi-Company HRMS',
    industry: 'HRMS',
    headline: 'Deploying VORN HR across 10+ companies managing 5,000+ employees',
    challenge: 'Multiple companies needed a unified HR solution that could handle diverse requirements while maintaining data isolation.',
    solution: 'We implemented a multi-tenant VORN HR architecture with company-specific customizations and a centralized admin portal.',
    results: [
      { metric: '10+', label: 'Companies Deployed' },
      { metric: '5,000+', label: 'Employees Managed' },
      { metric: '99.8%', label: 'Uptime' }
    ],
    technologies: ['VORN HR', 'AWS', 'PostgreSQL', 'Docker'],
    timeline: 'Ongoing'
  }
];

const testimonials = [
  {
    quote: "Abhivorn's HRMS solution transformed our HR operations. We've seen a 70% reduction in administrative work.",
    name: 'HR Director',
    company: 'Insurance Company',
    rating: 5
  },
  {
    quote: "The document extraction system exceeded our expectations with 98.5% accuracy. It's been a game-changer for our mortgage processing.",
    name: 'Operations Manager',
    company: 'Mortgage Processing Firm',
    rating: 5
  },
  {
    quote: "Professional team, excellent communication, and delivered on time. We highly recommend Abhivorn for healthcare solutions.",
    name: 'Founder',
    company: 'Elevate Rootz',
    rating: 5
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredStudies = caseStudies.filter(
    study => activeFilter === 'All' || study.industry === activeFilter
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Real Results for{' '}
              <span className="text-accent">Real Businesses</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Case studies showcasing our expertise across industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-12">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      {study.industry}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Timeline: {study.timeline}
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                    {study.headline}
                  </h2>

                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Challenge</h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Solution</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-muted/50 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-accent" />
                      Results
                    </h3>
                    <div className="grid grid-cols-3 gap-6">
                      {study.results.map((result) => (
                        <div key={result.label} className="text-center">
                          <div className="text-3xl font-bold text-accent mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-sm font-medium text-foreground">Technologies:</span>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">Hear from businesses we've helped transform</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Ready to See Similar Results?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Let's discuss how we can help transform your business operations.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="bg-accent hover:bg-accent/90">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

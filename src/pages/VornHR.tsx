import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Clock, Shield, BarChart3, Smartphone, Database, Zap, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/layout/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: Users,
    title: 'Employee Management',
    description: 'Complete employee database with role-based access control and organizational hierarchy management.'
  },
  {
    icon: Clock,
    title: 'Attendance & Tracking',
    description: 'Facial recognition and GPS-based attendance with real-time monitoring for field employees.'
  },
  {
    icon: CheckCircle,
    title: 'Leave Management',
    description: 'Automated leave workflows, balance tracking, and multi-level approval systems.'
  },
  {
    icon: BarChart3,
    title: 'Performance Management',
    description: 'Appraisal cycles, OKR tracking, and 360-degree feedback for comprehensive reviews.'
  },
  {
    icon: Database,
    title: 'Payroll & Compensation',
    description: 'Automated salary calculations, tax compliance, and salary slip generation.'
  },
  {
    icon: Zap,
    title: 'Analytics & Reports',
    description: 'Custom dashboards, attendance trends, and actionable HR insights.'
  }
];

const benefits = [
  {
    title: '60% Reduction in Admin Work',
    description: 'Automate routine HR tasks like attendance tracking, leave approvals, and payroll processing. Free your HR team to focus on strategic initiatives.',
    stats: '60% less time on paperwork'
  },
  {
    title: '99.8% Attendance Accuracy',
    description: 'Our facial recognition technology ensures accurate attendance records without buddy punching or manual errors.',
    stats: 'Near-perfect accuracy'
  },
  {
    title: 'Real-Time Employee Tracking',
    description: 'GPS-based tracking for field employees with live location updates and automated check-ins at client sites.',
    stats: 'Live location monitoring'
  },
  {
    title: 'Actionable HR Analytics',
    description: 'Data-driven insights with custom dashboards, trend analysis, and predictive analytics for better decision-making.',
    stats: 'Smart reporting'
  }
];

const pricingPlans = [
  {
    name: 'Freemium',
    price: 'Free',
    period: 'Forever',
    description: 'Perfect for small teams getting started',
    features: ['Up to 20 employees', 'Basic attendance', 'Leave management', 'Email support'],
    cta: 'Get Started Free',
    variant: 'outline' as const
  },
  {
    name: 'Professional',
    price: '₹10,000',
    period: '/month',
    description: 'For growing businesses with advanced needs',
    features: ['Up to 500 employees', 'All features', 'Facial recognition', 'Priority support', 'API access', 'Custom reports'],
    cta: 'Start Free Trial',
    highlighted: true,
    variant: 'hero' as const
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'Pricing',
    description: 'For large organizations with custom requirements',
    features: ['500+ employees', 'Custom features', 'Dedicated support', 'On-premise option', 'SLA guarantee', 'Training included'],
    cta: 'Contact Sales',
    variant: 'outline' as const
  }
];

const faqs = [
  {
    question: 'How long does implementation take?',
    answer: 'Standard implementation takes 2-3 weeks, including data migration, configuration, and training. For complex requirements, we provide a detailed timeline during the consultation.'
  },
  {
    question: 'Do you offer training?',
    answer: 'Yes! All plans include initial training for HR admins and managers. We also provide documentation, video tutorials, and ongoing support.'
  },
  {
    question: 'Can it integrate with our existing systems?',
    answer: 'Absolutely. VORN HR supports integration with popular payroll systems, biometric devices, ERP solutions, and custom APIs for seamless data flow.'
  },
  {
    question: 'Is our data secure?',
    answer: 'Security is our top priority. We use SSL/TLS encryption, role-based access control, regular backups, and are compliant with data protection regulations.'
  },
  {
    question: 'What happens if we need customization?',
    answer: 'Our Enterprise plan includes custom development. We can modify workflows, add new modules, and integrate with your specific requirements.'
  }
];

const techStack = [
  'React', 'Django', 'PostgreSQL', 'AWS', 'Mobile Apps'
];

export default function VornHR() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  99.8% Uptime
                </span>
                <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                  24/7 Support
                </span>
                <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  MSME Trusted
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                Complete HR Management for{' '}
                <span className="text-accent">Modern Businesses</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Trusted by 10+ companies managing 5,000+ employees. Streamline attendance, 
                leave, payroll, and performance management in one powerful platform.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="heroOutline" size="xl">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold text-primary/20 mb-4">HR</div>
                  <div className="text-2xl font-bold text-foreground">VORN HR</div>
                  <div className="text-muted-foreground">Complete HRMS Solution</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive HR management features designed to simplify your operations
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose VORN HR?</h2>
            <p className="text-muted-foreground">Real benefits that transform your HR operations</p>
          </motion.div>

          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium">
                    {benefit.stats}
                  </span>
                </div>
                <div className={`aspect-video rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/10 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <span className="text-sm font-medium text-muted-foreground">Built with:</span>
            {techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground">
                {tech}
              </span>
            ))}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-accent" />
              SSL/TLS Encryption
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground">Choose the plan that fits your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground ring-2 ring-accent'
                    : 'bg-card border border-border'
                }`}
              >
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? '' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? 'text-primary-foreground/70' : 'text-muted-foreground'}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className={`h-4 w-4 ${plan.highlighted ? 'text-secondary' : 'text-accent'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button
                    variant={plan.variant}
                    className={`w-full ${plan.highlighted ? 'bg-accent hover:bg-accent/90' : ''}`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            All plans include free implementation support
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-12">Trusted by Leading Companies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Companies Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">5,000+</div>
                <div className="text-sm text-muted-foreground">Employees Managed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">99.8%</div>
                <div className="text-sm text-muted-foreground">Uptime Record</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Ready to transform your HR processes?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10">
              Join 10+ companies already using VORN HR to streamline their HR operations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

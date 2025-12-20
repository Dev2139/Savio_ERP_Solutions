import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Settings,
  Users,
  Headphones,
  BookOpen,
  BarChart3,
  Shield,
  Wrench,
  Cloud,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'ERP Implementation',
    description: 'Complete end-to-end ERP deployment tailored to your business processes and industry requirements.',
    features: ['Requirements Analysis', 'Custom Configuration', 'Data Migration', 'Go-Live Support'],
  },
  {
    icon: Wrench,
    title: 'Customization & Integration',
    description: 'Seamlessly integrate your ERP with existing systems and customize modules to fit your workflows.',
    features: ['API Integration', 'Custom Modules', 'Third-party Connectors', 'Workflow Automation'],
  },
  {
    icon: BookOpen,
    title: 'Training & Onboarding',
    description: 'Comprehensive training programs ensuring your team can maximize the potential of your ERP system.',
    features: ['User Training', 'Admin Training', 'Video Tutorials', 'Documentation'],
  },
  {
    icon: Headphones,
    title: '24/7 Technical Support',
    description: 'Round-the-clock dedicated support team ready to resolve issues and answer questions anytime.',
    features: ['Phone Support', 'Email Support', 'Remote Assistance', 'Issue Tracking'],
  },
  {
    icon: BarChart3,
    title: 'Business Consulting',
    description: 'Expert consultation to optimize your business processes and leverage ERP capabilities effectively.',
    features: ['Process Analysis', 'Best Practices', 'ROI Optimization', 'Growth Strategy'],
  },
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Seamlessly migrate your on-premise ERP to the cloud for enhanced accessibility and scalability.',
    features: ['Assessment', 'Migration Planning', 'Data Transfer', 'Performance Optimization'],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'}}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container-custom relative z-10">
          <SectionHeading
            badge="Our Services"
            title="Quality Services for Your Success"
            description="We provide comprehensive ERP services designed to help your business thrive in the digital age."
            variant="light"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Let's Build Your ERP Solution
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Ready to transform your business operations? Our team of experts is here to help you every step of the way.
            </p>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl" className="bg-white text-primary hover:bg-white/90">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

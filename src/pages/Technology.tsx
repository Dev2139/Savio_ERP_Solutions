import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { 
  Globe, 
  Server, 
  Cloud, 
  Smartphone, 
  Database, 
  Shield,
  Code,
  Layers,
  Cpu,
  GitBranch,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const expertise = [
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Modern, responsive web applications built with cutting-edge frameworks.',
  },
  {
    icon: Server,
    title: 'Enterprise ERP',
    description: 'Robust ERP systems designed for complex business operations.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud-native applications with 99.9% uptime guarantee.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications for on-the-go access.',
  },
];

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Redis', category: 'Caching' },
  { name: 'GraphQL', category: 'API' },
];

const deliveryProcess = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understanding your business needs and requirements through in-depth analysis.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Creating detailed blueprints and prototypes for your custom solution.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Building your solution using agile methodology with regular updates.',
  },
  {
    step: '04',
    title: 'Deployment',
    description: 'Seamless deployment with comprehensive training and documentation.',
  },
  {
    step: '05',
    title: 'Support',
    description: 'Ongoing maintenance, updates, and 24/7 technical support.',
  },
];

export default function Technology() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)'}}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container-custom relative z-10">
          <SectionHeading
            badge="Technology"
            title="Powered by Modern Technology"
            description="We leverage the latest technologies and best practices to deliver robust, scalable, and secure ERP solutions."
            variant="light"
          />
        </div>
      </section>

      {/* Development Expertise */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Expertise"
            title="Development Excellence"
            description="Our team excels in delivering custom solutions across multiple domains."
            align="left"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeading
            badge="Tech Stack"
            title="Technologies We Use"
            description="Industry-leading technologies ensuring performance, security, and scalability."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="p-5 bg-card rounded-xl border border-border text-center hover:shadow-md transition-all duration-300 hover:border-primary/30"
              >
                <div className="text-lg font-semibold text-foreground mb-1">{tech.name}</div>
                <div className="text-xs text-muted-foreground">{tech.category}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Database, title: 'Database Management', desc: 'Optimized database design for high-performance queries' },
              { icon: Shield, title: 'Security First', desc: 'Enterprise-grade security with encryption and compliance' },
              { icon: Cpu, title: 'High Performance', desc: 'Optimized for speed with intelligent caching strategies' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Process"
            title="Our Delivery Process"
            description="A proven methodology ensuring successful project delivery every time."
          />

          <div className="relative mt-12">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-border" />

            <div className="grid lg:grid-cols-5 gap-6">
              {deliveryProcess.map((process, index) => (
                <div key={process.step} className="relative">
                  <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shrink-0 relative z-10">
                      {process.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{process.title}</h4>
                      <p className="text-sm text-muted-foreground">{process.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

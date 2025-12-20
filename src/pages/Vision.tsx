import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Eye, Target, Heart, Lightbulb, Shield, Zap } from 'lucide-react';

const visionCards = [
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the global leader in enterprise resource planning, empowering businesses of all sizes to achieve operational excellence through innovative, accessible, and transformative technology solutions.',
    highlights: ['Global Leadership', 'Operational Excellence', 'Innovation'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To deliver comprehensive, customizable ERP solutions that streamline business processes, enhance productivity, and drive sustainable growth for our clients across every industry.',
    highlights: ['Comprehensive Solutions', 'Enhanced Productivity', 'Sustainable Growth'],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Heart,
    title: 'Our Philosophy',
    description: 'We believe in building lasting partnerships with our clients, understanding their unique challenges, and delivering solutions that evolve with their needs. Technology should empower, not complicate.',
    highlights: ['Lasting Partnerships', 'Client-Centric', 'Continuous Evolution'],
    color: 'from-purple-500 to-purple-600',
  },
];

const coreValues = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously pushing boundaries to deliver cutting-edge solutions.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Building trust through transparency, honesty, and ethical practices.',
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'Striving for the highest quality in everything we do.',
  },
];

export default function Vision() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'}}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container-custom relative z-10">
          <SectionHeading
            badge="Vision & Mission"
            title="Driving the Future of Enterprise Solutions"
            description="Our vision guides our innovation, our mission defines our purpose, and our philosophy shapes every interaction with our valued clients."
            variant="light"
          />
        </div>
      </section>

      {/* Vision, Mission, Philosophy Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {visionCards.map((card, index) => (
              <div
                key={card.title}
                className="group relative bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${card.color}`} />
                
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{card.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {card.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeading
            badge="Core Values"
            title="What Drives Us Forward"
            description="Our core values are the foundation of everything we do, guiding our decisions and shaping our culture."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 bg-card rounded-xl border border-border shadow-sm hover:shadow-card transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

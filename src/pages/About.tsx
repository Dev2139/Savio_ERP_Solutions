import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Award, Headphones, Settings, TrendingUp, Users, Clock, Building, Globe } from 'lucide-react';

const whyChooseUs = [
  {
    icon: Clock,
    title: '15+ Years Experience',
    description: 'Over a decade and a half of expertise in delivering enterprise-grade ERP solutions.',
  },
  {
    icon: Settings,
    title: 'Full Customization',
    description: 'Tailored solutions that adapt to your unique business processes and workflows.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock dedicated support team ensuring your operations never stop.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Grow without limits. Our ERP scales seamlessly with your business expansion.',
  },
];

const stats = [
  { value: '15+', label: 'Years of Excellence', icon: Award },
  { value: '500+', label: 'Happy Clients', icon: Users },
  { value: '20+', label: 'ERP Modules', icon: Building },
  { value: '50+', label: 'Countries Served', icon: Globe },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-muted/30">
        <div className="container-custom">
          <SectionHeading
            badge="About Us"
            title="Empowering Businesses Since 2009"
            description="We are a leading ERP solutions provider committed to transforming how businesses operate through innovative technology and exceptional service."
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - About Text */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Your Trusted Partner in Digital Transformation
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Savio ERP was founded with a vision to democratize enterprise resource planning, making powerful business management tools accessible to organizations of all sizes. What started as a small team of passionate developers has grown into a comprehensive ERP solutions provider trusted by over 500 enterprises worldwide.
                </p>
                <p>
                  Our team of expert consultants, developers, and support professionals work tirelessly to understand your unique challenges and deliver solutions that drive real business value. We believe that technology should simplify operations, not complicate them.
                </p>
                <p>
                  From manufacturing to retail, healthcare to hospitality, we've helped businesses across diverse industries streamline their operations, reduce costs, and achieve sustainable growth. Our commitment to innovation ensures that our clients always stay ahead of the curve.
                </p>
              </div>
            </div>

            {/* Right - Why Choose Us Cards */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Why Choose Savio ERP?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 bg-card rounded-xl border border-border shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

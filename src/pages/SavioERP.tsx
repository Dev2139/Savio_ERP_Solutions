import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Package,
  DollarSign,
  Users,
  ShoppingCart,
  Truck,
  Factory,
  FileText,
  BarChart3,
  Calendar,
  Building,
  Briefcase,
  CreditCard,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const coreModules = [
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Complete control over your stock with real-time tracking and automated processes.',
    features: [
      'Real-time stock tracking across locations',
      'Automated reorder point alerts',
      'Batch and serial number tracking',
      'Warehouse management and optimization',
      'Multi-location inventory control',
    ],
  },
  {
    icon: DollarSign,
    title: 'Finance & Accounting',
    description: 'Comprehensive financial management for accurate reporting and compliance.',
    features: [
      'General ledger and chart of accounts',
      'Accounts payable and receivable',
      'Bank reconciliation automation',
      'Multi-currency support',
      'Financial reporting and analytics',
    ],
  },
  {
    icon: Users,
    title: 'Human Resources',
    description: 'Streamline HR operations from recruitment to retirement.',
    features: [
      'Employee database management',
      'Payroll processing and compliance',
      'Attendance and leave management',
      'Performance evaluation tracking',
      'Recruitment and onboarding',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Sales & CRM',
    description: 'Manage customer relationships and boost sales performance.',
    features: [
      'Lead and opportunity tracking',
      'Customer database management',
      'Sales pipeline visualization',
      'Quote and order management',
      'Customer service ticketing',
    ],
  },
];

const additionalModules = [
  {
    icon: Truck,
    title: 'Supply Chain Management',
    description: 'End-to-end visibility and control over your supply chain.',
    features: [
      'Vendor management and evaluation',
      'Purchase order automation',
      'Logistics and shipping tracking',
      'Demand forecasting',
    ],
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Optimize production with complete shop floor control.',
    features: [
      'Bill of materials management',
      'Production planning and scheduling',
      'Quality control and testing',
      'Work order management',
    ],
  },
  {
    icon: FileText,
    title: 'Document Management',
    description: 'Centralized document storage with version control.',
    features: [
      'Document upload and storage',
      'Version history tracking',
      'Access control and permissions',
      'Search and retrieval',
    ],
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Data-driven insights for informed decision making.',
    features: [
      'Customizable dashboards',
      'Real-time reporting',
      'KPI tracking',
      'Data visualization',
    ],
  },
  {
    icon: Calendar,
    title: 'Project Management',
    description: 'Plan, execute, and monitor projects effectively.',
    features: [
      'Task and milestone tracking',
      'Resource allocation',
      'Time tracking',
      'Project budgeting',
    ],
  },
  {
    icon: CreditCard,
    title: 'Point of Sale',
    description: 'Seamless retail operations with integrated POS.',
    features: [
      'Multi-terminal support',
      'Payment processing',
      'Customer loyalty programs',
      'Sales reporting',
    ],
  },
];

export default function SavioERP() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-muted/30">
        <div className="container-custom">
          <SectionHeading
            badge="Savio ERP"
            title="Complete ERP Solution for Modern Enterprises"
            description="A comprehensive suite of integrated modules designed to streamline every aspect of your business operations."
          />

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              20+ Modules
            </div>
            <div className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              Cloud Ready
            </div>
            <div className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              Fully Customizable
            </div>
            <div className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              Real-time Analytics
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Core Modules"
            title="Essential Business Modules"
            description="The foundation of your ERP system with the most critical business functions."
            align="left"
          />

          <div className="grid lg:grid-cols-2 gap-6 mt-12">
            {coreModules.map((module) => (
              <div
                key={module.title}
                className="p-6 bg-card rounded-xl border-2 border-primary/20 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shrink-0">
                    <module.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{module.title}</h3>
                    <p className="text-muted-foreground mb-4">{module.description}</p>
                    <ul className="space-y-2">
                      {module.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Modules - Accordion */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeading
            badge="More Modules"
            title="Extended Module Suite"
            description="Additional modules to enhance your ERP capabilities."
          />

          <div className="max-w-4xl mx-auto mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {additionalModules.map((module, index) => (
                <AccordionItem
                  key={module.title}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <module.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-foreground">{module.title}</div>
                        <div className="text-sm text-muted-foreground">{module.description}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <ul className="grid sm:grid-cols-2 gap-3 pl-14">
                      {module.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              See Savio ERP in Action
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Schedule a personalized demo to see how Savio ERP can transform your business operations.
            </p>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl" className="bg-white text-primary hover:bg-white/90">
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

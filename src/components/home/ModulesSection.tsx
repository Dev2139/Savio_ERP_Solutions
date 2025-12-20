import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/ui/FeatureCard';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Package,
  ShoppingBag,
  TrendingUp,
  Users,
  Factory,
  DollarSign,
  Megaphone,
  UserCheck,
  Briefcase,
} from 'lucide-react';

const inventoryFeatures = [
  'Material Receipt',
  'Landed Cost Calculation',
  'Basic Rate and Freight Comparison',
  'Supplier Returns',
  'Stock Allocation and De-Allocation',
  'Material Issues',
  'Material Returns',
  'Job work Issues',
  'Job work Returns',
  'Repairing Issues',
  'Repairing Returns',
  'Stock Reservation at Material Requisition Transaction',
  'Automatic Material Requisition',
  'Stock Valuation',
  'Stock Adjustment',
  'Physical Stock Take',
  'Stock Reports',
  'RG-1 Stock Register (Daily Stock Register)',
];

const purchaseFeatures = [
  'Material Requisitions',
  'Purchase Requisitions',
  'Enquiries to Supplier',
  'Purchase Order with Purchase Requisition reference',
  'Purchase Order Direct',
  'Goods Receipt Note',
  'Goods Quality Checking',
  'Purchase Challan Entry',
  'Approval of Freight Payment to Transporter',
  'Purchase Invoice Entry',
  'Pending Purchase Invoice Report',
  'Purchase Register',
  'Basic Rate and Freight Comparison',
  'Supplier wise Rate Comparison with Chart',
  'Transporter wise Freight Comparison with Chart',
  'Item wise Purchase Reports',
  'Date wise Purchase Reports',
  'Purchase Reports with Average Rate and Average Landing Cost',
];

const salesFeatures = [
  'Quotations',
  'Sales Orders',
  'Delivery Schedule',
  'Order Due dates allocation',
  'Sales Order Approval (Commercial Department for Payment)',
  'Sales Order Approval (Development Depart. for Sample & Catalogues)',
  'Checking of Stock for Sales Order',
  'Dispatch Order',
  'Dispatch Order Approval after Material Loading',
  'Sales Invoicing',
  'Sales Register',
  'Automatic Calculation of MRP and Price from Price List',
  'Sales Returns Entry',
  'Basic Sale Rates Reports',
  'Salesman wise Sales Reports',
  'State, Area and City wise sales reports',
  'Vat Sales Register',
  'ER-1 Register',
  'Summery Reports with multiple unites (Box, Sq. Mt, SQ. FT etc.)',
  'Branch Transfer Reports',
  'Goods Receive at Branch Entry',
  'Salesman wise Projection and Achievement Reports',
  'Sample Requisition and sample dispatched',
];

const outsourceFeatures = [
  'Production at Job worker details',
  'Inventory at Job worker Godown',
  'Dispatch order to the Job worker',
  'Purchase Order to Job worker',
];

const productionFeatures = [
  'Production Requisition',
  'Production Planning',
  'Production Details',
  'Stage-wise Production Stock – Semi finish goods - WIP Reports',
  'Production Loss and Breakage Analysis',
  'Whole Production Process Mapping From (Weighing Scale – Ball Mill – Final Tank – Silo – Spray Dryer – Press – Glaze Line - Printing – Kiln –Squaring - Polishing)',
  'Stage-wise parameterized quality assurance',
  'Production Process Analysis',
  'Production Slip',
];

const financeFeatures = [
  'Freight Payment to transporter by purchase challan reference',
  'Purchase Payment Reminder by due days for payment',
  'Purchase payment to supplier',
  'PDC Cheque Management',
  'Receipt Entry by Marketing & Debtors information',
  'Bank Statement Entry',
  'Automation Receipt Confirmation between bank statement and receipt information of sales & marketing department',
  'Receipt Confirmation Statement by Confirmation Date and Receipt Date',
  'Credit note Direct',
  'Credit note by Sales Reference',
  'Credit note by complain reference',
  'Credit note approval systems with multiple stages Commercial department approval CEO department Approval Account department Approval',
  'Credit note reports (Branch wise and reason wise)',
  'Debit note Entry',
  'Debit note reports (Branch wise and reason wise)',
  'Item wise Profitability',
  'Profit and Loss Account',
  'Balance Sheet',
];

const marketingFeatures = [
  'Stock Availability Report by: A = At Go down Stock B = Confirmed order Stock C = At Loading Stock Available stock (A-B-C)',
  'Sales Orders Evaluation',
  'Sample Requisition Reports',
  'State, Area, party wise Sales',
  'State, Area, party wise Sample Distribution',
  'Party Price list and Area wise MRP list Available',
  'Landing cost calculation',
];

const crmFeatures = [
  'Single window solutions',
  'Sales order status by sales order no.',
  'Dispatch order status by dispatch order no',
  'Sales invoice status by sales invoice no.',
  'Credit note status by credit note no.',
  'Payment details',
  'Complain Entry',
  'Complain status by complain No.',
];

const hrFeatures = [
  'Employee Salary with Auto Calculation, Salary Slip',
  'TDS, PF direct Deduction',
  'Employee Expense management',
  'Employee Attendance System',
  'Employee Recruitment System',
  'Leave Management System',
  'Appraisal Analysis system',
  'Employee Work Performance Report',
];

const modules = [
  {
    icon: Package,
    title: 'Inventory Module',
    description: 'Real-time stock tracking, automated reordering, and warehouse optimization for seamless inventory control.',
    hasDetails: true,
    features: inventoryFeatures,
  },
  {
    icon: ShoppingBag,
    title: 'Purchase Module',
    description: 'Streamlined procurement processes with vendor management, purchase orders, and cost optimization.',
    hasDetails: true,
    features: purchaseFeatures,
  },
  {
    icon: TrendingUp,
    title: 'Sales Module (Supply Chain Management)',
    description: 'Comprehensive sales management with supply chain integration, order tracking, and customer analytics.',
    hasDetails: true,
    features: salesFeatures,
  },
  {
    icon: Briefcase,
    title: 'Outsource and Job Work Module',
    description: 'Manage outsourcing operations, job work assignments, and subcontractor relationships efficiently.',
    hasDetails: true,
    features: outsourceFeatures,
  },
  {
    icon: Factory,
    title: 'Production Module',
    description: 'Production planning, quality control, and shop floor management for efficient manufacturing operations.',
    hasDetails: true,
    features: productionFeatures,
  },
  {
    icon: DollarSign,
    title: 'Finance Module',
    description: 'Complete financial management with automated invoicing, expense tracking, and comprehensive reporting.',
    hasDetails: true,
    features: financeFeatures,
  },
  {
    icon: Megaphone,
    title: 'Marketing Module',
    description: 'Marketing campaign management, lead generation, and customer engagement tools.',
    hasDetails: true,
    features: marketingFeatures,
  },
  {
    icon: UserCheck,
    title: 'CRM Module',
    description: 'Customer relationship management with lead tracking, contact management, and sales pipeline optimization.',
    hasDetails: true,
    features: crmFeatures,
  },
  {
    icon: Users,
    title: 'HR & Payroll Module',
    description: 'Streamline HR operations with payroll, attendance, recruitment, and employee self-service portals.',
    hasDetails: true,
    features: hrFeatures,
  },
];

export function ModulesSection() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const handleModuleClick = (moduleTitle: string) => {
    setSelectedModule(moduleTitle);
  };

  const handleDialogClose = () => {
    setSelectedModule(null);
  };

  const getModuleFeatures = (moduleTitle: string) => {
    const module = modules.find(m => m.title === moduleTitle);
    return module?.features || [];
  };

  const getModuleIcon = (moduleTitle: string) => {
    const module = modules.find(m => m.title === moduleTitle);
    return module?.icon || Package;
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeading
          badge="Core Modules"
          title="Comprehensive ERP Solutions"
          description="Everything you need to manage your business operations efficiently, all in one integrated platform."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {modules.map((module, index) => (
            <div key={module.title}>
              {module.hasDetails ? (
                <div
                  className="cursor-pointer"
                  onClick={() => handleModuleClick(module.title)}
                >
                  <FeatureCard
                    icon={module.icon}
                    title={module.title}
                    description={module.description}
                    className="animate-slide-up hover:shadow-lg transition-shadow"
                    style={{ animationDelay: `${index * 50}ms` }}
                  />
                </div>
              ) : (
                <FeatureCard
                  icon={module.icon}
                  title={module.title}
                  description={module.description}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Module Details Dialog */}
        <Dialog open={!!selectedModule} onOpenChange={handleDialogClose}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {selectedModule && (
                  <>
                    {React.createElement(getModuleIcon(selectedModule), { className: "w-6 h-6" })}
                    {selectedModule} Features
                  </>
                )}
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {selectedModule && getModuleFeatures(selectedModule).map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

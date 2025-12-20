import { Button } from '@/components/ui/button';
import { ArrowRight, Download, BarChart3, Users, Package, DollarSign, Settings, TrendingUp } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-16 lg:py-24">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Trusted by 500+ Enterprises
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Transform Your Business with{' '}
              <span className="text-gradient bg-gradient-to-r from-primary to-primary-light">
                Intelligent ERP
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Streamline operations, boost productivity, and drive growth with Savio ERP's comprehensive suite of integrated business modules designed for modern enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl">
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                <Download className="w-5 h-5" />
                Download Brochure
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">20+</div>
                <div className="text-sm text-muted-foreground">ERP Modules</div>
              </div>
            </div>
          </div>

          {/* Right Content - ERP Illustration */}
          <div className="relative lg:pl-8 animate-slide-in-right">
            <div className="relative bg-card rounded-2xl shadow-xl border border-border p-6 lg:p-8">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Savio Dashboard</div>
                    <div className="text-xs text-muted-foreground">Real-time Analytics</div>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Module Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Package, label: 'Inventory', value: '2,847', color: 'bg-blue-500' },
                  { icon: DollarSign, label: 'Finance', value: '$1.2M', color: 'bg-green-500' },
                  { icon: Users, label: 'HR', value: '156', color: 'bg-purple-500' },
                  { icon: TrendingUp, label: 'Sales', value: '+24%', color: 'bg-orange-500' },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-xl bg-muted/50 border border-border/50 hover:shadow-md transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center mb-3`}>
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    <div className="text-lg font-bold text-foreground">{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-foreground">Revenue Growth</span>
                  <span className="text-xs text-primary font-semibold">+32% YoY</span>
                </div>
                <div className="flex items-end gap-1 h-16">
                  {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-primary/60 hover:bg-primary transition-colors"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 p-3 bg-card rounded-xl shadow-lg border border-border animate-bounce" style={{ animationDuration: '3s' }}>
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-accent text-accent-foreground rounded-lg shadow-lg text-sm font-medium">
              Live Updates ✓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

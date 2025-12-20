import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { CSSProperties } from 'react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  style?: CSSProperties;
}

export function FeatureCard({ icon: Icon, title, description, className, style }: FeatureCardProps) {
  return (
    <div
      className={cn(
        'group p-6 bg-card rounded-xl border border-border shadow-sm transition-all duration-300 hover:shadow-card hover:-translate-y-1',
        className
      )}
      style={style}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}

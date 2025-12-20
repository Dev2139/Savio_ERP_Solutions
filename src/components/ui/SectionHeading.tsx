import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  variant?: 'default' | 'light';
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  variant = 'default',
  className,
}: SectionHeadingProps) {
  const isLight = variant === 'light';
  
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {badge && (
        <span className={cn(
          "inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full",
          isLight 
            ? "bg-white/20 text-white" 
            : "bg-primary/10 text-primary"
        )}>
          {badge}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight",
        isLight ? "text-white" : "text-foreground"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "mt-4 text-lg leading-relaxed",
          isLight ? "text-white/90" : "text-muted-foreground"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}

import React from 'react';
import { cn } from '@/lib/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const baseClasses = cn(
      // Base button styles
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      
      // Variant styles based on InnorMost design
      variant === 'primary' && [
        'bg-brand-500 text-white shadow-sm',
        'hover:bg-brand-600 hover:shadow-md',
        'active:bg-brand-700 active:scale-95',
        'focus:ring-brand-500',
      ],
      variant === 'secondary' && [
        'bg-white text-brand-500 border-2 border-brand-500',
        'hover:bg-brand-50 hover:border-brand-600',
        'active:bg-brand-100 active:scale-95',
        'focus:ring-brand-500',
      ],
      variant === 'ghost' && [
        'bg-transparent text-brand-500',
        'hover:bg-brand-50 hover:text-brand-600',
        'active:bg-brand-100 active:scale-95',
        'focus:ring-brand-500',
      ],
      variant === 'destructive' && [
        'bg-red-500 text-white shadow-sm',
        'hover:bg-red-600 hover:shadow-md',
        'active:bg-red-700 active:scale-95',
        'focus:ring-red-500',
      ],
      
      // Size styles
      size === 'sm' && 'h-8 px-3 text-sm',
      size === 'md' && 'h-10 px-6 py-2 text-base',
      size === 'lg' && 'h-12 px-8 text-lg',
      
      className
    );

    if (href) {
      return (
        <a
          href={href}
          className={baseClasses}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    
    return (
      <button
        className={baseClasses}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, type ButtonProps };
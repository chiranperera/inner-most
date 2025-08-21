import React from 'react';
import { cn } from '@/lib/utils/cn';
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, href, children, ...props }, ref) => {
    const Comp = asChild ? Slot : href ? 'a' : 'button';
    
    return (
      <Comp
        className={cn(
          // Base button styles
          'inline-flex items-center justify-center rounded-button font-button-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          
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
            'bg-error-500 text-white shadow-sm',
            'hover:bg-error-600 hover:shadow-md',
            'active:bg-error-700 active:scale-95',
            'focus:ring-error-500',
          ],
          
          // Size styles
          size === 'sm' && 'h-8 px-3 text-button-sm',
          size === 'md' && 'h-10 px-button-padding-x py-button-padding-y text-button-md',
          size === 'lg' && 'h-12 px-6 text-button-lg',
          
          className
        )}
        ref={ref}
        href={href}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, type ButtonProps };
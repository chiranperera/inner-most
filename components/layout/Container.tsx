import React from 'react';
import { cn } from '@/lib/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'xl',
  padding = 'md',
  className,
}) => {
  return (
    <div
      className={cn(
        // Base container styles
        'mx-auto w-full',
        
        // Size variants based on InnorMost design requirements
        size === 'sm' && 'max-w-2xl',         // 672px
        size === 'md' && 'max-w-4xl',         // 896px
        size === 'lg' && 'max-w-6xl',         // 1152px  
        size === 'xl' && 'max-w-7xl',         // 1280px
        size === 'full' && 'max-w-none',
        
        // Padding variants
        padding === 'none' && 'px-0',
        padding === 'sm' && 'px-4 sm:px-6',
        padding === 'md' && 'px-4 sm:px-6 lg:px-8',
        padding === 'lg' && 'px-6 sm:px-8 lg:px-12',
        
        className
      )}
    >
      {children}
    </div>
  );
};
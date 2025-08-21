'use client';

import React, { useState } from 'react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface NavigationItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logo?: string;
  logoText?: string;
  navigation?: NavigationItem[];
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  logoText = 'InnorMost',
  navigation = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Features', href: '/features' },
    { label: 'Contact', href: '/contact' },
  ],
  ctaText = 'Get Started',
  ctaHref = '/signup',
  className,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={cn('sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200', className)}>
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            {logo ? (
              <img src={logo} alt={logoText} className="h-8 w-auto" />
            ) : (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">I</span>
                </div>
                <span className="text-heading-lg font-semibold text-neutral-900">
                  {logoText}
                </span>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-body-md font-medium text-neutral-700 hover:text-brand-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button href={ctaHref} size="md">
              {ctaText}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-neutral-700 hover:text-brand-500 hover:bg-neutral-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-body-md font-medium text-neutral-700 hover:text-brand-500 transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-neutral-200">
                <Button href={ctaHref} className="w-full" size="md">
                  {ctaText}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};
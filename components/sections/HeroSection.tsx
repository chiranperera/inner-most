import React from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { ProfileGrid } from '../ui/ProfileCard';
import { cn } from '@/lib/utils/cn';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCTAText?: string;
  secondaryCTAHref?: string;
  backgroundGradient?: boolean;
  featuredProfiles?: Array<{
    id: string;
    name: string;
    age: number;
    image: string;
    description?: string;
    interests?: string[];
    location?: string;
  }>;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Don't worry, let happen!",
  subtitle = "Discover meaningful connections with people who share your interests and values. Join thousands of users who have found their perfect match.",
  ctaText = 'Get Started',
  ctaHref = '/signup',
  secondaryCTAText = 'Learn More',
  secondaryCTAHref = '/about',
  backgroundGradient = true,
  featuredProfiles = [],
  className,
}) => {
  return (
    <section
      className={cn(
        'relative py-16 sm:py-20 lg:py-24',
        backgroundGradient && 'bg-gradient-to-br from-brand-50 via-white to-neutral-50',
        !backgroundGradient && 'bg-white',
        className
      )}
    >
      <Container size="xl">
        {/* Main Hero Content */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-display-xl sm:text-display-lg lg:text-display-xl font-semibold text-neutral-900 mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-3xl mx-auto mb-8 animate-slide-up">
            {subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              href={ctaHref}
              size="lg"
              className="min-w-[160px] shadow-brand"
            >
              {ctaText}
            </Button>
            <Button
              href={secondaryCTAHref}
              variant="secondary"
              size="lg"
              className="min-w-[160px]"
            >
              {secondaryCTAText}
            </Button>
          </div>
        </div>

        {/* Featured Profiles Preview */}
        {featuredProfiles.length > 0 && (
          <div className="animate-slide-up">
            <div className="text-center mb-8">
              <h2 className="text-heading-xl font-semibold text-neutral-900 mb-2">
                Meet your people
              </h2>
              <p className="text-body-md text-neutral-600">
                See who's already connecting on InnorMost
              </p>
            </div>
            
            {/* Profile Grid */}
            <ProfileGrid
              profiles={featuredProfiles}
              columns={{ mobile: 2, tablet: 3, desktop: 4 }}
            />
            
            {/* View More Link */}
            <div className="text-center mt-8">
              <Button variant="ghost" href="/profiles">
                View all profiles →
              </Button>
            </div>
          </div>
        )}

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-brand-100 rounded-full opacity-50 blur-xl animate-bounce-gentle"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-200 rounded-full opacity-30 blur-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      </Container>
    </section>
  );
};
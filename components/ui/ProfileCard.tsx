import React from 'react';
import Image from 'next/image';
import { Card } from './Card';
import { cn } from '@/lib/utils/cn';

interface ProfileCardProps {
  id: string;
  name: string;
  age: number;
  image: string;
  description?: string;
  interests?: string[];
  location?: string;
  className?: string;
  onClick?: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  id,
  name,
  age,
  image,
  description,
  interests,
  location,
  className,
  onClick,
}) => {
  return (
    <Card
      variant="profile"
      hover={!!onClick}
      className={cn('w-full max-w-sm mx-auto', className)}
      onClick={onClick}
    >
      {/* Profile Image */}
      <div className="relative w-full aspect-[4/5] mb-4">
        <Image
          src={image}
          alt={`${name}'s profile`}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Age Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className="text-body-sm font-medium text-neutral-900">{age}</span>
        </div>
      </div>

      {/* Profile Info */}
      <div className="space-y-3">
        {/* Name and Location */}
        <div>
          <h3 className="text-heading-lg font-semibold text-neutral-900">
            {name}
          </h3>
          {location && (
            <p className="text-body-sm text-neutral-600">{location}</p>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-body-sm text-neutral-700 line-clamp-2">
            {description}
          </p>
        )}

        {/* Interests Tags */}
        {interests && interests.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {interests.slice(0, 3).map((interest, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full bg-brand-50 text-brand-600 text-body-xs font-medium"
              >
                {interest}
              </span>
            ))}
            {interests.length > 3 && (
              <span className="text-body-xs text-neutral-500">
                +{interests.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

// Profile Grid Component
interface ProfileGridProps {
  profiles: ProfileCardProps[];
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  onProfileClick?: (profileId: string) => void;
}

export const ProfileGrid: React.FC<ProfileGridProps> = ({
  profiles,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  onProfileClick,
}) => {
  return (
    <div
      className={cn(
        'grid gap-grid-gap',
        // Responsive grid based on InnorMost design
        `grid-cols-${columns.mobile}`,
        `md:grid-cols-${columns.tablet}`,
        `lg:grid-cols-${columns.desktop}`,
        'xl:grid-cols-4' // Extra large screens show 4 columns
      )}
    >
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          {...profile}
          onClick={onProfileClick ? () => onProfileClick(profile.id) : undefined}
        />
      ))}
    </div>
  );
};
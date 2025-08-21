import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { Container } from '@/components/layout/Container';
import { ProfileGrid } from '@/components/ui/ProfileCard';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Image from 'next/image';

// Sample data - in real implementation, this would come from your CMS
const featuredProfiles = [
  {
    id: '1',
    name: 'Sarah',
    age: 28,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b012d678?w=400&h=500&fit=crop&crop=face',
    description: 'Love hiking, photography, and good coffee. Looking for someone to explore the city with.',
    interests: ['Photography', 'Hiking', 'Coffee'],
    location: 'San Francisco, CA',
  },
  {
    id: '2',
    name: 'Michael',
    age: 32,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
    description: 'Tech entrepreneur who loves cooking and traveling. Always up for new adventures.',
    interests: ['Technology', 'Cooking', 'Travel'],
    location: 'New York, NY',
  },
  {
    id: '3',
    name: 'Emily',
    age: 26,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face',
    description: 'Artist and yoga instructor seeking meaningful connections and shared experiences.',
    interests: ['Art', 'Yoga', 'Meditation'],
    location: 'Los Angeles, CA',
  },
  {
    id: '4',
    name: 'David',
    age: 30,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
    description: 'Musician and fitness enthusiast. Love live music and staying active.',
    interests: ['Music', 'Fitness', 'Concerts'],
    location: 'Austin, TX',
  },
];

const appFeatures = [
  {
    title: 'Smart Matching',
    description: 'Our advanced algorithm connects you with people who truly complement your lifestyle and interests.',
    icon: '🎯',
  },
  {
    title: 'Verified Profiles',
    description: 'Every profile is verified to ensure authentic connections and a safe dating environment.',
    icon: '✅',
  },
  {
    title: 'Interest-Based Discovery',
    description: 'Find people through shared hobbies, values, and life goals that matter to you.',
    icon: '💡',
  },
  {
    title: 'Safe & Secure',
    description: 'Your privacy and safety are our top priorities with end-to-end encryption and safety tools.',
    icon: '🔒',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection
        featuredProfiles={featuredProfiles.slice(0, 4)}
      />

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-surface-secondary">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-display-md font-semibold text-neutral-900 mb-4">
              Why choose InnorMost?
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              We've reimagined online dating to focus on genuine connections and meaningful relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appFeatures.map((feature, index) => (
              <Card key={index} variant="elevated" className="text-center">
                <CardContent className="pt-8">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-body-sm text-neutral-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* App Screenshots Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-display-md font-semibold text-neutral-900 mb-6">
                Take connections with you
              </h2>
              <p className="text-body-lg text-neutral-600 mb-8">
                Download our mobile app and never miss a connection. Chat, meet, and build relationships on the go with our intuitive mobile experience.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Instant messaging',
                    description: 'Real-time chat with video and voice calling features.',
                  },
                  {
                    title: 'Location-based discovery',
                    description: 'Find people near you or expand your search worldwide.',
                  },
                  {
                    title: 'Smart notifications',
                    description: 'Get notified about new matches and messages without being overwhelmed.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-heading-sm font-semibold text-neutral-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-body-sm text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="flex items-center space-x-2">
                  <span>Download for iOS</span>
                </Button>
                <Button variant="secondary" size="lg" className="flex items-center space-x-2">
                  <span>Download for Android</span>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-64 h-96">
                {/* Phone mockup placeholder */}
                <div className="absolute inset-0 bg-neutral-900 rounded-[2rem] p-2">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                    <div className="p-4 space-y-4">
                      <div className="h-4 bg-neutral-200 rounded"></div>
                      <div className="space-y-2">
                        <div className="h-16 bg-brand-100 rounded-lg"></div>
                        <div className="h-16 bg-neutral-100 rounded-lg"></div>
                        <div className="h-16 bg-brand-50 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-brand-500 to-brand-600">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-display-md font-semibold mb-4">
              Ready to find your perfect match?
            </h2>
            <p className="text-body-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of people who have found meaningful relationships on InnorMost. Your journey to love starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-brand-600 hover:bg-neutral-50">
                Start Your Journey
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">I</span>
                </div>
                <span className="text-heading-lg font-semibold">InnorMost</span>
              </div>
              <p className="text-body-sm text-neutral-400">
                Connecting hearts, creating meaningful relationships.
              </p>
            </div>

            <div>
              <h4 className="text-heading-sm font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-body-sm text-neutral-400">
                <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/safety" className="hover:text-white transition-colors">Safety</a></li>
                <li><a href="/download" className="hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-heading-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-body-sm text-neutral-400">
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="/press" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-heading-sm font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-body-sm text-neutral-400">
                <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="/community" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-body-sm text-neutral-400">
              © 2024 InnorMost. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
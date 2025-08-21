# InnorMost Website

A modern, responsive social networking/dating platform built with Next.js 14, Tailwind CSS, and Payload CMS. This implementation follows advanced Figma-to-web development templates for pixel-perfect design translation and client-friendly content management.

## 🎯 Features

- **🎨 Pixel-Perfect Design**: Faithful implementation of the InnorMost Figma design
- **📱 Fully Responsive**: Mobile-first design with breakpoints for all devices  
- **⚡ High Performance**: Optimized for Core Web Vitals and SEO
- **♿ Accessible**: WCAG 2.1 AA compliant with comprehensive accessibility features
- **🛠️ CMS Integration**: Full content management with Payload CMS
- **👥 Profile Management**: Complete user profile system with photo uploads
- **📝 Blog System**: Built-in blog with categories and rich content editing
- **🔧 Admin Dashboard**: Client-friendly admin interface for content management

## 🏗️ Tech Stack

### Core Framework
- **Next.js 14** with App Router
- **React 18** with TypeScript
- **Tailwind CSS** with custom design system

### Content Management
- **Payload CMS** for headless content management
- **MongoDB** for data storage
- **Cloudinary** for media management

### UI Components  
- **Radix UI** primitives for accessible components
- **Framer Motion** for smooth animations
- **Lucide React** for consistent iconography

### Development & Quality
- **TypeScript** for type safety
- **ESLint** for code quality
- **Playwright** for automated testing
- **Git hooks** for pre-commit validation

## 🚀 Quick Start

### Prerequisites

```bash
Node.js 18+
MongoDB (local or cloud)
Git
```

### Installation

1. **Clone and install dependencies**:
```bash
git clone <repository-url>
cd innermost-project
npm install
```

2. **Set up environment variables**:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

3. **Start MongoDB** (if running locally):
```bash
mongod
```

4. **Run the development server**:
```bash
npm run dev
```

5. **Access the application**:
- Website: http://localhost:3000
- Admin Panel: http://localhost:3000/admin

## 📁 Project Structure

```
innermost-project/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── admin/             # Admin routes
├── components/            # React components
│   ├── ui/                # Base UI components
│   ├── layout/            # Layout components  
│   └── sections/          # Page sections
├── lib/                   # Utilities and configurations
│   └── utils/             # Helper functions
├── payload.config.ts      # Payload CMS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Design System

The project implements a comprehensive design system extracted from the InnorMost Figma design:

### Colors
- **Brand Primary**: `#FF6B35` (Orange)
- **Neutral Scale**: 10-step gray scale from white to near-black
- **Semantic Colors**: Success, warning, error, and info variants

### Typography
- **Font Family**: Inter (system fallback)
- **Scale**: Display, heading, body, and UI text sizes
- **Weights**: 400-700 for different emphasis levels

### Spacing
- **Base Unit**: 8px
- **Scale**: Consistent spacing from 4px to 128px
- **Components**: Predefined padding and margins

## 📝 Content Management

### Admin Access
1. Navigate to `/admin`
2. Create admin user on first visit
3. Login with your credentials

### Content Types
- **Profiles**: User profiles with photos and details
- **Pages**: Static pages with flexible block content
- **Posts**: Blog posts with rich content editing
- **Media**: Image and file management

### Block Types
- **Hero Section**: Main page headers with CTAs
- **Profile Grid**: Display user profiles in responsive grids
- **Features**: Feature lists with icons and descriptions
- **Call to Action**: Conversion-focused sections

## 🔧 Development Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server

# Quality Assurance
npm run lint             # Run ESLint
npm run type-check       # TypeScript validation
npm run qa:visual        # Visual regression testing
npm run qa:accessibility # Accessibility testing

# Testing
npm run test:unit        # Unit tests
npm run test:e2e         # End-to-end tests
```

## 🎯 Performance Optimizations

- **Image Optimization**: Next.js Image component with Cloudinary
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Caching**: Optimized caching headers and strategies
- **Core Web Vitals**: Monitored and optimized metrics

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: WCAG AA compliant color combinations
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects user motion preferences

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel --prod
```

3. **Set environment variables** in Vercel dashboard

### Other Platforms
- **Netlify**: Static export with serverless functions
- **AWS**: CloudFormation templates included
- **Docker**: Dockerfile and compose configuration available

## 📊 Monitoring & Analytics

- **Performance**: Core Web Vitals monitoring
- **Errors**: Sentry integration for error tracking
- **Analytics**: Google Analytics 4 setup
- **Uptime**: Health check endpoints

## 🔒 Security Features

- **Input Validation**: Comprehensive form validation
- **CSRF Protection**: Built-in CSRF tokens
- **Rate Limiting**: API rate limiting
- **Headers**: Security headers configuration
- **Authentication**: Secure user authentication

## 📚 Documentation

- `/docs/development.md` - Development guidelines
- `/docs/deployment.md` - Deployment instructions
- `/docs/cms-guide.md` - CMS user guide
- `/docs/components.md` - Component documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes following the coding standards
4. Run quality checks
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Documentation**: Check `/docs` folder
- **Issues**: GitHub Issues for bug reports
- **Email**: support@innermost.com
- **Community**: Discord community link

---

Built with ❤️ using advanced Figma-to-web development templates
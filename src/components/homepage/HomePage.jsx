import React, { useState, useEffect } from 'react';
import { Button, Card, Badge } from 'antd';
import { 
  MenuOutlined, 
  CloseOutlined, 
  CheckCircleOutlined,
  SafetyOutlined,
  MobileOutlined,
  BellOutlined,
  TeamOutlined,
  CalendarOutlined,
  VideoCameraOutlined,
  RightOutlined,
  PlayCircleOutlined,
  StarFilled
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigate = useNavigate();
  const features = [
    {
      icon: '📹',
      title: 'AI-Powered CCTV',
      description: 'Real-time monitoring with facial recognition and anti-spoofing technology'
    },
    {
      icon: '📱',
      title: 'Mobile-First Platform',
      description: 'Manage everything from booking to attendance on your smartphone'
    },
    {
      icon: '🔔',
      title: 'Instant Notifications',
      description: 'Stay updated with real-time alerts about your child\'s activities'
    },
    {
      icon: '📊',
      title: 'Activity Tracking',
      description: 'Detailed logs of meals, naps, learning activities, and milestones'
    },
    {
      icon: '👥',
      title: 'Parent-Caregiver Chat',
      description: 'Direct communication channel for updates and queries'
    },
    {
      icon: '📅',
      title: 'Smart Scheduling',
      description: 'Easy slot booking with automated reminders and confirmations'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Parent, Kathmandu',
      image: '👩',
      rating: 5,
      text: 'FuchheyCare has completely changed how I stay connected with my daughter\'s daycare. The real-time updates give me peace of mind while at work.'
    },
    {
      name: 'Rajesh Thapa',
      role: 'Daycare Administrator',
      image: '👨‍💼',
      rating: 5,
      text: 'Managing attendance and communication has become so much easier. Parents love the transparency, and we\'ve seen a 40% reduction in administrative work.'
    },
    {
      name: 'Sunita Rai',
      role: 'Working Mother, Lalitpur',
      image: '👩‍💻',
      rating: 5,
      text: 'As a working mother, knowing my son is safe and being able to see his activities throughout the day is invaluable. Highly recommend!'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Parents' },
    { number: '50+', label: 'Partner Daycares' },
    { number: '1000+', label: 'Children Monitored' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  const pricingPlans = [
    {
      name: 'For Parents',
      price: 'Free',
      features: [
        'Real-time child monitoring',
        'Activity logs & updates',
        'Direct caregiver messaging',
        'Attendance tracking',
        'Photo & video access',
        'Mobile app access'
      ],
      highlighted: false
    },
    {
      name: 'For Daycares',
      price: 'Custom',
      features: [
        'Complete admin dashboard',
        'AI-powered CCTV integration',
        'Staff management tools',
        'Automated attendance',
        'Parent communication hub',
        'Analytics & reporting',
        'Unlimited children profiles',
        'Priority support'
      ],
      highlighted: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">👶</span>
              </div>
              <h1 className="text-2xl font-bold gradient-text">FuchheyCare</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition">How It Works</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition">Testimonials</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition">Pricing</a>
              <Button size="large" className="rounded-lg" onClick={() => navigate('/login')}>Sign In</Button>
              <Button type="primary" size="large" className="rounded-lg bg-linear-to-r from-blue-600 to-purple-600 border-0">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <a href="#features" className="block text-gray-700 font-medium py-2">Features</a>
              <a href="#how-it-works" className="block text-gray-700 font-medium py-2">How It Works</a>
              <a href="#testimonials" className="block text-gray-700 font-medium py-2">Testimonials</a>
              <a href="#pricing" className="block text-gray-700 font-medium py-2">Pricing</a>
              <div className="flex flex-col gap-3 pt-4">
                <Button size="large" className="rounded-lg w-full">Sign In</Button>
                <Button type="primary" size="large" className="rounded-lg w-full bg-linear-to-r from-blue-600 to-purple-600 border-0">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge count="Nepal's First AI-Powered Childcare Platform" className="mb-6" style={{ backgroundColor: '#3b82f6' }} />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Safe, Transparent & Trusted Childcare for
                <span className="gradient-text"> Modern Families</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Empower your childcare center with AI monitoring, real-time updates, and seamless communication. 
                Give parents the peace of mind they deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  type="primary" 
                  size="large" 
                  className="h-14 px-8 text-lg rounded-xl bg-linear-to-r from-blue-600 to-purple-600 border-0"
                >
                  Start Free Trial <RightOutlined />
                </Button>
                <Button 
                  size="large" 
                  className="h-14 px-8 text-lg rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <PlayCircleOutlined /> Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white border-2 border-white">👤</div>
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white border-2 border-white">👤</div>
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white border-2 border-white">👤</div>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarFilled key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">500+ happy families trust us</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 lg:p-8">
                <div className="aspect-video bg-linear-to-br from-blue-100 to-purple-100 rounded-2xl mb-4 flex items-center justify-center">
                  <PlayCircleOutlined className="text-6xl text-blue-600" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                    <CheckCircleOutlined className="text-green-600 text-xl" />
                    <span className="text-sm font-medium text-gray-700">Real-time Activity Updates</span>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                    <SafetyOutlined className="text-blue-600 text-xl" />
                    <span className="text-sm font-medium text-gray-700">AI-Powered Safety Monitoring</span>
                  </div>
                  <div className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg">
                    <MobileOutlined className="text-purple-600 text-xl" />
                    <span className="text-sm font-medium text-gray-700">Mobile-First Experience</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for <span className="gradient-text">Modern Childcare</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed specifically for Nepal's childcare ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How <span className="gradient-text">FuchheyCare</span> Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              { step: '1', title: 'Sign Up', description: 'Create your account as a parent or daycare center in minutes', icon: '📝' },
              { step: '2', title: 'Connect', description: 'Link with your daycare center or add children profiles', icon: '🔗' },
              { step: '3', title: 'Monitor', description: 'Start receiving real-time updates and AI-powered insights', icon: '📊' }
            ].map((item, index) => (
              <div key={index} className="relative">
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-linear-to-r from-blue-600 to-purple-600 -z-10"></div>
                )}
                <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by <span className="gradient-text">Families Across Nepal</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what parents and daycare administrators have to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-2xl">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarFilled key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`border-0 rounded-2xl ${
                  plan.highlighted 
                    ? 'shadow-2xl ring-2 ring-blue-600 transform scale-105' 
                    : 'shadow-lg'
                }`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <Badge count="Most Popular" style={{ backgroundColor: '#3b82f6' }} />
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold gradient-text mb-4">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircleOutlined className="text-green-600 text-lg mt-1 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  type={plan.highlighted ? 'primary' : 'default'}
                  size="large"
                  className={`w-full h-12 rounded-lg ${
                    plan.highlighted 
                      ? 'bg-linear-to-r from-blue-600 to-purple-600 border-0' 
                      : ''
                  }`}
                >
                  {plan.price === 'Free' ? 'Get Started' : 'Contact Sales'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Childcare Experience?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join hundreds of families and daycare centers already using FuchheyCare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="large" 
              className="h-14 px-8 text-lg rounded-xl bg-white text-blue-600 border-0 hover:bg-gray-100"
            >
              Start Free Trial
            </Button>
            <Button 
              size="large" 
              className="h-14 px-8 text-lg rounded-xl border-2 border-white text-white hover:bg-white/10"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-xl">👶</span>
                </div>
                <h3 className="text-xl font-bold">FuchheyCare</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Nepal's first AI-powered childcare management platform
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 FuchheyCare. All rights reserved. Built with ❤️ in Nepal</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
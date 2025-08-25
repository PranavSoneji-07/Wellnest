import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, MapPin, Clock, Star, ArrowRight, Check } from 'lucide-react';
import family from '../components/assets/Family.jpg'
import old_man from '../components/assets/old_man.webp'
const LandingPage = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Instant Hospital Access',
      description: 'Find nearby hospitals with affiliated networks instantly, reducing wait time and streamlining emergency care.',
    },
    {
      icon: Clock,
      title: 'Live Appointment Updates',
      description: 'Book appointments with real-time waiting times. Get instant alerts if appointments are canceled.',
    },
    {
      icon: Shield,
      title: 'Affordable Insurance',
      description: 'Access marketplace with affordable insurance options, minimizing premiums and agent fees.',
    },
    {
      icon: FileText,
      title: 'Secure Health Vault',
      description: 'Store all medical records securely. Share with hospitals automatically during emergencies.',
    },
  ];

  const benefits = [
    'Emergency medical record sharing',
    '24/7 hospital network access',
    'Real-time appointment tracking',
    'Personalized insurance recommendations',
    'Secure data encryption',
    'Mobile-first design',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Your Health & 
                  <span className="text-blue-200"> Wealth</span>
                  <br />Companion
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Seamlessly integrate your health and insurance needs. In emergencies, access 
                  everything you need with just a few clicks.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/insurance"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 text-center group"
                >
                  Get Started
                  <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/hospitals"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-center"
                >
                  Find Hospitals
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={family}
                alt="Healthcare professional using digital technology"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wellnest brings together all aspects of your healthcare journey, 
              from insurance to emergency care, in one seamless experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-blue-50 transition-colors duration-300 group"
              >
                <div className="bg-blue-600 p-3 rounded-lg w-fit mb-6 group-hover:bg-blue-700 transition-colors">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={old_man}
                alt="Medical professional reviewing patient data"
                className="rounded-2xl shadow-xl"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Wellnest?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience healthcare management like never before with our 
                  comprehensive platform designed for modern healthcare needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link
                to="/health-vault"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium group"
              >
                Explore Health Vault
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600">
              See what our users have to say about their Wellnest experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Teacher',
                content: 'Wellnest saved me hours during my recent emergency. Having all my medical records instantly available made all the difference.',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Software Engineer',
                content: 'The insurance marketplace helped me find a plan that was 40% cheaper than what I had before. Excellent service!',
                rating: 5,
              },
              {
                name: 'Dr. Emily Rodriguez',
                role: 'Family Physician',
                content: 'As a doctor, I appreciate how Wellnest streamlines patient information. It makes consultations much more efficient.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of users who have already transformed their healthcare experience with Wellnest.
          </p>
          <Link
            to="/insurance"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-200 group"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
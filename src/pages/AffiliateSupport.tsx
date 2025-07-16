
import React from 'react';
import { ArrowLeft, Users, DollarSign, TrendingUp, Mail, Phone, Gift, BarChart, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import MarketingMaterials from '@/components/MarketingMaterials';

const AffiliateSupport = () => {
  const affiliateFeatures = [
    {
      title: "Real-Time Tracking",
      description: "Monitor your earnings and conversions in real-time with our advanced affiliate dashboard",
      icon: <BarChart className="w-8 h-8 text-green-400" />
    },
    {
      title: "Global Reach",
      description: "Promote to worldwide audiences with multi-language support and international payment processing",
      icon: <Globe className="w-8 h-8 text-green-400" />
    },
    {
      title: "Reliable Payments",
      description: "Get paid on time, every time, with multiple payment options and fraud protection",
      icon: <Shield className="w-8 h-8 text-green-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />  
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-green-400">Affiliate Support</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-green-400" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Join Our Elite Affiliate Program
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Earn generous commissions promoting the most advanced SEO psychological warfare manual ever created
          </p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 text-lg font-bold"
          >
            <Gift className="w-5 h-5 mr-2" />
            Become an Affiliate Partner
          </Button>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4 text-green-400">
            Generous Commission Structure
          </h3>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            We believe in rewarding our partners handsomely. The more you sell, the more you earn.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:border-green-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-center text-green-400">
                  <DollarSign className="w-8 h-8 mx-auto mb-2" />
                  Standard Rate
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-white mb-2">40%</div>
                <p className="text-gray-300 mb-2">Commission on every sale</p>
                <p className="text-sm text-gray-400 mb-4">€15.60 per €39 sale</p>
                <div className="bg-gray-700 p-3 rounded-lg">
                  <p className="text-xs text-gray-300">Perfect for getting started</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-green-400 transform scale-105">
              <CardHeader>
                <CardTitle className="text-center text-green-400">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                  High Volume
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50%</div>
                <p className="text-gray-300 mb-2">For 50+ sales/month</p>
                <p className="text-sm text-gray-400 mb-4">€19.50 per €39 sale</p>
                <div className="bg-green-900/30 p-3 rounded-lg border border-green-400/30">
                  <p className="text-xs text-green-300">Most Popular Tier</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-green-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-center text-green-400">
                  <Users className="w-8 h-8 mx-auto mb-2" />
                  VIP Partner
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-white mb-2">60%</div>
                <p className="text-gray-300 mb-2">For 100+ sales/month</p>
                <p className="text-sm text-gray-400 mb-4">€23.40 per €39 sale</p>
                <div className="bg-yellow-900/30 p-3 rounded-lg border border-yellow-400/30">
                  <p className="text-xs text-yellow-300">Elite Status</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Affiliate Features */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-green-400">
            Why Partner With Us?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {affiliateFeatures.map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Materials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <MarketingMaterials />
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-green-400">
            Earnings Calculator
          </h3>
          <Card className="bg-gray-800 border-green-400/30">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">10 Sales/Month</h4>
                  <div className="text-2xl font-bold text-green-400 mb-2">€156</div>
                  <p className="text-gray-400 text-sm">40% Commission</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">50 Sales/Month</h4>
                  <div className="text-2xl font-bold text-green-400 mb-2">€975</div>
                  <p className="text-gray-400 text-sm">50% Commission</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">100 Sales/Month</h4>
                  <div className="text-2xl font-bold text-green-400 mb-2">€2,340</div>
                  <p className="text-gray-400 text-sm">60% Commission</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Information */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-green-400">
            Dedicated Affiliate Support
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400">
                  <Mail className="w-6 h-6 mr-2 inline" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Get dedicated support for all your affiliate questions, marketing strategies, and technical issues
                </p>
                <p className="text-white font-semibold">support@fastseohub.com</p>
                <p className="text-gray-400 text-sm">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400">
                  <Phone className="w-6 h-6 mr-2 inline" />
                  Priority Phone Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Direct line for high-volume affiliates and urgent support needs
                </p>
                <p className="text-white font-semibold">0665121272</p>
                <p className="text-gray-400 text-sm">Mon-Fri, 9AM-6PM CET</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-green-400">
            Affiliate Success Stories
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 italic">
                  "I made €2,400 in my first month promoting Cognitive SEO Warfare. The conversion rate is incredible and the support team is fantastic!"
                </p>
                <p className="text-green-400 font-semibold">- Jennifer M., Digital Marketing Consultant</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 italic">
                  "This affiliate program has been a game-changer for my income. The marketing materials convert like crazy and commissions are paid on time every month."
                </p>
                <p className="text-green-400 font-semibold">- David K., Affiliate Marketer</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Start Earning Big Commissions?
          </h3>
          <p className="text-xl text-green-100 mb-8">
            Join hundreds of successful affiliates who are earning substantial income promoting Cognitive SEO Warfare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold"
            >
              Apply to Become an Affiliate
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-bold"
            >
              View Marketing Materials
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AffiliateSupport;

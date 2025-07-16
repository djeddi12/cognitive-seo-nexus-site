
import React from 'react';
import { ArrowLeft, Users, DollarSign, TrendingUp, Download, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const AffiliateSupport = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Join Our Affiliate Program
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Earn generous commissions promoting Cognitive SEO Warfare
          </p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 text-lg font-bold"
          >
            Become an Affiliate
          </Button>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-green-400">
            Commission Structure
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-center text-green-400">
                  <DollarSign className="w-8 h-8 mx-auto mb-2" />
                  Standard Rate
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-white mb-2">40%</div>
                <p className="text-gray-300">Commission on every sale</p>
                <p className="text-sm text-gray-400 mt-2">€15.60 per €39 sale</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-green-400">
              <CardHeader>
                <CardTitle className="text-center text-green-400">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                  High Volume
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50%</div>
                <p className="text-gray-300">For 50+ sales/month</p>
                <p className="text-sm text-gray-400 mt-2">€19.50 per €39 sale</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-center text-green-400">
                  <Users className="w-8 h-8 mx-auto mb-2" />
                  VIP Partner
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-white mb-2">60%</div>
                <p className="text-gray-300">For 100+ sales/month</p>
                <p className="text-sm text-gray-400 mt-2">€23.40 per €39 sale</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Marketing Materials */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-green-400">
            Marketing Materials
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'High-Converting Landing Pages',
              'Email Templates',
              'Social Media Graphics',
              'Banner Ads',
              'Video Sales Letters',
              'Product Images',
              'Sales Copy',
              'Bonus Materials'
            ].map((material, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-4 text-center">
                  <Download className="w-6 h-6 mx-auto mb-2 text-green-400" />
                  <p className="text-white text-sm">{material}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Information */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-green-400">
            Affiliate Support
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
                  Get dedicated support for all your affiliate questions
                </p>
                <p className="text-white font-semibold">support@fastseohub.com</p>
                <p className="text-gray-400 text-sm">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400">
                  <Phone className="w-6 h-6 mr-2 inline" />
                  Phone Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Direct line for high-volume affiliates
                </p>
                <p className="text-white font-semibold">0665121272</p>
                <p className="text-gray-400 text-sm">Mon-Fri, 9AM-6PM CET</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Start Earning?
          </h3>
          <p className="text-xl text-green-100 mb-8">
            Join hundreds of successful affiliates promoting Cognitive SEO Warfare
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold"
          >
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AffiliateSupport;

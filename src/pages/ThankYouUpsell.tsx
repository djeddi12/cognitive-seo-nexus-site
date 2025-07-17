
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Download, CheckCircle, Mail, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThankYouUpsell = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <CheckCircle className="w-20 h-20 text-yellow-400 mx-auto mb-8" />
          
          <h1 className="text-4xl font-bold text-yellow-400 mb-6">
            Thank You for Your Purchase!
          </h1>
          
          <p className="text-xl text-gray-300 mb-12">
            Your order has been processed successfully. Get ready to embark on your million dollar journey!
          </p>

          <Card className="bg-gray-800 border-yellow-400/20 mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-6">
                Instant Download Available
              </h2>
              
              <div className="bg-yellow-900/20 border border-yellow-400/30 rounded-lg p-6 mb-8">
                <p className="text-yellow-300 mb-4 font-semibold">
                  🎉 Your "The Million Dollar Journey" PDF is ready for download!
                </p>
                <p className="text-gray-300 mb-6">
                  This is a <span className="font-semibold text-yellow-400">digital product</span> - 
                  no physical shipping required. Download your copy now and start implementing 
                  these powerful wealth-building strategies immediately.
                </p>
                
                <Button 
                  size="lg" 
                  className="bg-yellow-600 hover:bg-yellow-500 text-white px-8 py-4 text-lg font-bold"
                  onClick={() => window.open('https://drive.google.com/file/d/1WmJyIl9ma-XBqpOOcwEVJgfk1oD6NOJU/view?usp=drive_link', '_blank')}
                >
                  <Download className="w-6 h-6 mr-3" />
                  Download Your Book Now
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <Mail className="w-8 h-8 text-yellow-400 mx-auto" />
                  <h3 className="font-semibold text-white">Check Your Email</h3>
                  <p className="text-sm text-gray-300">
                    Download link sent to your email address
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Download className="w-8 h-8 text-yellow-400 mx-auto" />
                  <h3 className="font-semibold text-white">Instant Access</h3>
                  <p className="text-sm text-gray-300">
                    PDF available for immediate download
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Shield className="w-8 h-8 text-yellow-400 mx-auto" />
                  <h3 className="font-semibold text-white">30-Day Guarantee</h3>
                  <p className="text-sm text-gray-300">
                    Full refund if not satisfied
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-yellow-400/20 mb-12">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                Payment Information
              </h3>
              <p className="text-gray-300 mb-2">
                <span className="font-semibold">Payment processed by:</span> Digistore24
              </p>
              <p className="text-gray-300 text-sm">
                The withdrawal from your account will be done by Digistore24
              </p>
            </CardContent>
          </Card>

          <div className="bg-gray-800/50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              What's Next?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-white mb-2">📖 Start Reading</h4>
                <p className="text-gray-300 text-sm">
                  Begin with Chapter 1 to understand the foundation of wealth building.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">🚀 Implement Immediately</h4>
                <p className="text-gray-300 text-sm">
                  Apply the first strategy to your financial portfolio today.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">📈 Track Results</h4>
                <p className="text-gray-300 text-sm">
                  Monitor your progress as you implement each wealth-building technique.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">💬 Get Support</h4>
                <p className="text-gray-300 text-sm">
                  Contact us at support@fastseohub.com if you need any assistance.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              Need help or have questions?
            </p>
            <a 
              href="/contact" 
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              Contact our support team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouUpsell;

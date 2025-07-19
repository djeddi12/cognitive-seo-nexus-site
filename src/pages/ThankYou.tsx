import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Download, CheckCircle, Mail, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-8" />
          
          <h1 className="text-4xl font-bold text-green-400 mb-6">
            Thank You for Your Purchase!
          </h1>
          
          <p className="text-xl text-gray-300 mb-12">
            Your order has been processed successfully. Get ready to transform your SEO approach!
          </p>

          {/* Transaction Information */}
          <Card className="bg-gray-800 border-green-400/20 mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-green-400 mb-4">
                Transaction Information
              </h2>
              <p className="text-gray-300 mb-2">
                The debit is made by Digistore24. The withdrawal from your account will be done by Digistore24.
              </p>
              <p className="text-gray-300 text-sm">
                The charge will appear as "DIGISTORE24*SEOFRAMEWORK" on your bank statement.
              </p>
            </CardContent>
          </Card>

          {/* Product Information */}
          <Card className="bg-gray-800 border-green-400/20 mb-8">
            <CardContent className="p-6">
              <div className="flex items-start gap-6">
                <div className="w-24 h-32 bg-green-900/20 border border-green-400/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-green-400 font-bold text-lg">SEO</div>
                    <div className="text-green-400 text-sm">WARFARE</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-green-400 mb-2">
                    Cognitive SEO Warfare
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Your complete guide to implementing advanced SEO strategies using cognitive manipulation techniques for maximum search engine domination.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-900/20 border border-green-400/30 rounded-lg">
                <p className="text-green-300 text-sm mb-2">
                  Please check your email inbox for a confirmation email with your download link. If you don't see it, please check your spam/junk folder.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Digital Product Access */}
          <Card className="bg-gray-800 border-green-400/20 mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">
                Your Digital Product - Instant Access
              </h3>
              
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 text-lg font-bold w-full mb-6"
                onClick={() => window.open('https://drive.google.com/file/d/1WmJyIl9ma-XBqpOOcwEVJgfk1oD6NOJU/view?usp=drive_link', '_blank')}
              >
                <Download className="w-6 h-6 mr-3" />
                Download Your Guide (PDF)
              </Button>

              <h4 className="text-lg font-semibold text-white mb-4">Next Steps:</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h5 className="font-semibold text-white">Read Your Guide</h5>
                    <p className="text-gray-300 text-sm">Start by reviewing your personalized SEO warfare guide.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h5 className="font-semibold text-white">Check Your Email</h5>
                    <p className="text-gray-300 text-sm">We've sent your receipt and additional resources to your email.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h5 className="font-semibold text-white">Start Your Plan</h5>
                    <p className="text-gray-300 text-sm">Begin implementing the cognitive SEO strategies immediately.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Money Back Guarantee */}
          <Card className="bg-gray-800 border-green-400/20 mb-12">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-green-400">
                  60-Day Money Back Guarantee
                </h3>
              </div>
              <p className="text-gray-300">
                If you're not completely satisfied with your purchase, contact us within 60 days for a full refund. No questions asked.
              </p>
            </CardContent>
          </Card>

          <div className="bg-gray-800/50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">
              What's Next?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-white mb-2">📖 Start Reading</h4>
                <p className="text-gray-300 text-sm">
                  Begin with Module 1 to understand the foundation of cognitive SEO manipulation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">🚀 Implement Immediately</h4>
                <p className="text-gray-300 text-sm">
                  Apply the Authority Mimicry Principle to your first piece of content.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">📈 Track Results</h4>
                <p className="text-gray-300 text-sm">
                  Monitor your rankings as you implement each cognitive warfare technique.
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
            <div className="space-y-2">
              <div>
                <a 
                  href="/contact" 
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  Contact our support team
                </a>
              </div>
              <div>
                <a 
                  href="/#legal" 
                  className="text-gray-400 hover:text-gray-300 transition-colors text-sm"
                >
                  Legal Information
                </a>
              </div>
            </div>
          </div>

          {/* Official Digistore24 Thank You Badge */}
          <div className="mt-8 flex justify-center">
            <div className="inline-block p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <p className="text-sm text-gray-300 font-medium">
                Payment processed by Digistore24
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

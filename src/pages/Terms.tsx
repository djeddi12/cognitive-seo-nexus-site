
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-400 mb-12 text-center">
            Terms of Service
          </h1>
          
          <Card className="bg-gray-800 border-green-400/20">
            <CardContent className="p-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Acceptance of Terms</h2>
                  <p className="text-gray-300">
                    By purchasing and using our products, you agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Product Description</h2>
                  <p className="text-gray-300 mb-4">
                    "Cognitive SEO Warfare" is a digital educational product delivered as a PDF download. 
                    The content is for educational purposes and results may vary based on implementation.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Payment and Refunds</h2>
                  <p className="text-gray-300 mb-4">
                    Payment processing is handled by Digistore24. The withdrawal from your account will be done by Digistore24.
                  </p>
                  <p className="text-gray-300">
                    We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, 
                    contact us within 30 days for a full refund.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Intellectual Property</h2>
                  <p className="text-gray-300 mb-4">
                    All content in this product is protected by copyright and is for personal use only. You may not:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Share, copy, or distribute the content</li>
                    <li>Resell or redistribute the material</li>
                    <li>Use the content for commercial purposes without permission</li>
                    <li>Reverse engineer or modify the content</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Disclaimer</h2>
                  <p className="text-gray-300">
                    The information provided is for educational purposes only. We make no guarantees about 
                    specific results or earnings. Success depends on individual effort, market conditions, 
                    and proper implementation of the strategies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Limitation of Liability</h2>
                  <p className="text-gray-300">
                    We shall not be liable for any indirect, incidental, special, or consequential damages 
                    resulting from the use of our products.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Contact Information</h2>
                  <p className="text-gray-300">
                    For questions about these terms, please contact us at support@fastseohub.com
                  </p>
                </section>

                <section>
                  <p className="text-gray-400 text-sm">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;

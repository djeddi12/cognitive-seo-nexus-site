
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-400 mb-12 text-center">
            Privacy Policy
          </h1>
          
          <Card className="bg-gray-800 border-green-400/20">
            <CardContent className="p-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Information We Collect</h2>
                  <p className="text-gray-300 mb-4">
                    We collect information you provide directly to us, such as when you purchase our products, 
                    create an account, or contact us for support.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Name and email address</li>
                    <li>Payment information (processed securely by Digistore24)</li>
                    <li>Communication preferences</li>
                    <li>Support inquiries and correspondence</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">How We Use Your Information</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>To process and fulfill your orders</li>
                    <li>To provide customer support</li>
                    <li>To send you product updates and important notices</li>
                    <li>To improve our products and services</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Data Sharing</h2>
                  <p className="text-gray-300 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties, 
                    except as described in this policy:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>With Digistore24 for payment processing</li>
                    <li>With service providers who assist in our operations</li>
                    <li>When required by law or to protect our rights</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Data Security</h2>
                  <p className="text-gray-300">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Your Rights</h2>
                  <p className="text-gray-300 mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Contact Us</h2>
                  <p className="text-gray-300">
                    If you have questions about this Privacy Policy, please contact us at support@fastseohub.com
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

export default PrivacyPolicy;

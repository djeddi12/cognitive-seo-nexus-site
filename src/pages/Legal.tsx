
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building, MapPin, Phone, Mail } from 'lucide-react';

const Legal = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-400 mb-12 text-center">
            Legal Information for COGNITIVE SEO WARFARE
          </h1>
          
          <Card className="bg-gray-800 border-green-400/20">
            <CardContent className="p-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-6">Company Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Building className="w-6 h-6 text-green-400 mt-1" />
                        <div>
                          <h3 className="font-semibold text-white mb-2">Business Owner</h3>
                          <p className="text-gray-300">Aimad Djeddi</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-green-400 mt-1" />
                        <div>
                          <h3 className="font-semibold text-white mb-2">Full Address</h3>
                          <p className="text-gray-300">
                            Aimad Djeddi<br />
                            1234 Ferphos Street<br />
                            Tebessa City, AC 12000<br />
                            Algeria
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-green-400 mt-1" />
                        <div>
                          <h3 className="font-semibold text-white mb-2">Phone</h3>
                          <p className="text-gray-300">0665121272</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-green-400 mt-1" />
                        <div>
                          <h3 className="font-semibold text-white mb-2">Email</h3>
                          <p className="text-gray-300">support@fastseohub.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Payment Processing</h2>
                  <div className="bg-gray-700 p-6 rounded-lg space-y-3">
                    <p className="text-gray-300">
                      All payments for COGNITIVE SEO WARFARE digital products are processed by Digistore24.
                    </p>
                    <p className="text-gray-300">
                      The debit is made by Digistore24, and the withdrawal from your account will be executed by Digistore24.
                    </p>
                    <p className="text-gray-300">
                      <span className="font-semibold text-green-400">The charge will appear as:</span> DIGISTORE24*SEOFRAMEWORK on your bank statement.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Product Information</h2>
                  <div className="bg-gray-700 p-6 rounded-lg space-y-3">
                    <p className="text-gray-300">
                      <span className="font-semibold text-green-400">COGNITIVE SEO WARFARE</span> is a digital product (PDF) delivered instantly after purchase.
                    </p>
                    <p className="text-gray-300">
                      You will receive an email with download instructions.
                    </p>
                    <p className="text-gray-300">
                      You can also access your download link directly on the thank-you page after completing your order.
                    </p>
                    <p className="text-gray-300">
                      <span className="font-semibold text-green-400">Price:</span> $39.00
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Refund Guarantee</h2>
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <p className="text-gray-300 mb-3">
                      All digital purchases come with a <span className="font-semibold text-green-400">60-day money-back guarantee</span>.
                    </p>
                    <p className="text-gray-300">
                      If you're not satisfied for any reason, simply contact our support team and request a full refund — no questions asked.
                    </p>
                  </div>
                </section>

                <section className="border-t border-gray-600 pt-6">
                  <p className="text-gray-400 text-sm">
                    This legal information is provided in compliance with applicable laws and regulations. 
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

export default Legal;

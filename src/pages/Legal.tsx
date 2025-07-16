
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building, MapPin, Phone, Mail } from 'lucide-react';

const Legal = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-400 mb-12 text-center">
            Legal Information
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
                          <h3 className="font-semibold text-white mb-2">Company Name</h3>
                          <p className="text-gray-300">FastSEOHub.com</p>
                          <p className="text-gray-300">Owner: Aimad Djeddi</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-green-400 mt-1" />
                        <div>
                          <h3 className="font-semibold text-white mb-2">Business Address</h3>
                          <p className="text-gray-300">
                            [Complete Business Address]<br />
                            [City, Postal Code]<br />
                            [Country]
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-green-400 mt-1" />
                        <div>
                          <h3 className="font-semibold text-white mb-2">Contact Phone</h3>
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
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Tax Information</h2>
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <p className="text-gray-300 mb-2">
                      <span className="font-semibold">VAT ID:</span> [Your VAT ID Number]
                    </p>
                    <p className="text-gray-300 mb-2">
                      <span className="font-semibold">Tax Number:</span> [Your Tax Number]
                    </p>
                    <p className="text-gray-300">
                      <span className="font-semibold">Business Registration:</span> [Registration Number]
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Payment Processing</h2>
                  <p className="text-gray-300 mb-4">
                    All payments are processed securely by Digistore24 GmbH.
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold">Important:</span> The withdrawal from your account will be done by Digistore24.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Product Delivery</h2>
                  <p className="text-gray-300 mb-4">
                    This is a <span className="font-semibold text-green-400">digital product</span> delivered via instant PDF download.
                  </p>
                  <p className="text-gray-300">
                    You will receive your download link immediately after successful payment completion. 
                    The product is delivered electronically - no physical shipping is involved.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-green-400 mb-4">Dispute Resolution</h2>
                  <p className="text-gray-300">
                    Any disputes arising from the purchase or use of our products should first be 
                    addressed through our customer support at support@fastseohub.com. We are 
                    committed to resolving any issues promptly and fairly.
                  </p>
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

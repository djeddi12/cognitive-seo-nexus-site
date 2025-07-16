
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What format is the book in?",
      answer: "The book is delivered as a PDF file that you can download immediately after purchase. You can read it on any device that supports PDF files."
    },
    {
      question: "How quickly will I receive the book?",
      answer: "You'll receive instant access to download the book immediately after your payment is processed. Check your email for the download link."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the book, contact us within 30 days for a full refund."
    },
    {
      question: "Can I share this book with others?",
      answer: "This book is for personal use only. Sharing, copying, or distributing the content is prohibited and violates our terms of service."
    },
    {
      question: "Do these SEO techniques really work?",
      answer: "The techniques in this book are based on psychological principles and search algorithm behavior. Results may vary depending on implementation and market conditions."
    },
    {
      question: "Is this suitable for beginners?",
      answer: "While the book contains advanced concepts, it's written to be accessible to both beginners and experienced SEO practitioners."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-400 mb-12 text-center">
            Frequently Asked Questions
          </h1>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gray-800 border-green-400/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-400 mb-3 flex items-center">
                    <ChevronDown className="w-5 h-5 mr-2" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              Still have questions? We're here to help.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

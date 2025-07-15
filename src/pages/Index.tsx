
import React, { useState } from 'react';
import { Brain, Zap, Eye, Shield, Target, Code, ChevronDown, Globe, Download, Star, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'de'>('en');

  const content = {
    en: {
      heroTitle: "COGNITIVE SEO WARFARE",
      heroSubtitle: "The Psychology-Based Framework to Hijack Search Algorithms",
      heroDescription: "A secret SEO training Google doesn't want you to read.",
      buyNow: "Buy Now",
      aboutTitle: "About the Book",
      aboutText: "Discover 60 pages of forbidden SEO tactics across 10 exclusive modules. This underground manual reveals advanced psychological strategies that exploit search algorithm weaknesses.",
      learnTitle: "What You'll Learn",
      features: [
        "Semantic Echo Hacking",
        "Authority Inflation Loops", 
        "Crawler Trapdoors",
        "Neural Web Shaping",
        "Intent Distortion Engine",
        "Omega Algorithm Mirror"
      ],
      previewTitle: "Book Preview",
      previewText: "Get a glimpse of the forbidden knowledge inside",
      viewSample: "View Sample Page",
      authorTitle: "About the Author",
      authorText: "Created by an underground SEO strategist with 10+ years of experience manipulating search algorithms and dominating competitive niches.",
      testimonialsTitle: "What Readers Say",
      testimonials: [
        {
          text: "This book completely changed how I approach SEO. The psychological tactics are brilliant!",
          author: "Marcus K., Digital Marketer"
        },
        {
          text: "Finally, someone reveals the real secrets. My rankings doubled in 3 months.",
          author: "Sarah M., SEO Consultant"
        },
        {
          text: "Dark hat techniques that actually work. This is pure gold for serious SEOs.",
          author: "Alex R., Growth Hacker"
        }
      ],
      pricingTitle: "Get Instant Access",
      pricingText: "Get it now for €39 – Instant PDF download",
      instantDownload: "Instant PDF Download",
      moneyBack: "30-Day Money Back Guarantee",
      securePayment: "Secure Payment via Digistore24",
      footer: {
        terms: "Terms & Conditions",
        privacy: "Privacy Policy", 
        contact: "Contact"
      }
    },
    de: {
      heroTitle: "KOGNITIVE SEO-KRIEGSFÜHRUNG",
      heroSubtitle: "Das psychologisch fundierte System, um Suchalgorithmen zu manipulieren",
      heroDescription: "Ein geheimes SEO-Training, das Google nicht will, dass Sie es lesen.",
      buyNow: "Jetzt kaufen",
      aboutTitle: "Über das Buch",
      aboutText: "Entdecken Sie 60 Seiten verbotener SEO-Taktiken in 10 exklusiven Modulen. Dieses Untergrund-Handbuch enthüllt fortgeschrittene psychologische Strategien, die Schwächen von Suchalgorithmen ausnutzen.",
      learnTitle: "Was du lernen wirst",
      features: [
        "Semantisches Echo-Hacking",
        "Autoritäts-Inflationsschleifen",
        "Crawler-Fallen", 
        "Neuronale Web-Formung",
        "Intentionsverzerrungsmaschine",
        "Omega-Algorithmus-Spiegel"
      ],
      previewTitle: "Buchvorschau",
      previewText: "Erhalten Sie einen Einblick in das verbotene Wissen",
      viewSample: "Beispielseite ansehen",
      authorTitle: "Über den Autor",
      authorText: "Geschrieben von einem Untergrund-SEO-Strategen mit über 10 Jahren Erfahrung in der Manipulation von Suchalgorithmen und der Dominierung konkurrenzfähiger Nischen.",
      testimonialsTitle: "Was Leser sagen",
      testimonials: [
        {
          text: "Dieses Buch hat meine SEO-Herangehensweise völlig verändert. Die psychologischen Taktiken sind brillant!",
          author: "Marcus K., Digital Marketer"
        },
        {
          text: "Endlich enthüllt jemand die wahren Geheimnisse. Meine Rankings haben sich in 3 Monaten verdoppelt.",
          author: "Sarah M., SEO Beraterin"
        },
        {
          text: "Dark Hat Techniken, die tatsächlich funktionieren. Das ist pures Gold für ernsthafte SEOs.",
          author: "Alex R., Growth Hacker"
        }
      ],
      pricingTitle: "Sofortigen Zugang erhalten",
      pricingText: "Jetzt für 39 € sichern – Sofortigen PDF-Download erhalten",
      instantDownload: "Sofortiger PDF-Download",
      moneyBack: "30-Tage Geld-zurück-Garantie",
      securePayment: "Sichere Zahlung über Digistore24",
      footer: {
        terms: "AGB",
        privacy: "Datenschutz",
        contact: "Kontakt"
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
          className="bg-gray-800 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 transition-all duration-300"
        >
          <Globe className="w-4 h-4 mr-2" />
          {language === 'en' ? 'DE' : 'EN'}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2322c55e" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="mb-8 animate-fade-in">
            <Brain className="w-20 h-20 mx-auto mb-6 text-green-400 animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent animate-fade-in">
            {currentContent.heroTitle}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            {currentContent.heroSubtitle}
          </h2>
          
          <p className="text-lg md:text-xl text-green-400 mb-8 font-medium animate-fade-in" style={{animationDelay: '0.4s'}}>
            "{currentContent.heroDescription}"
          </p>
          
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 text-lg font-bold rounded-lg transform hover:scale-105 transition-all duration-300 animate-fade-in shadow-lg shadow-green-600/25"
            style={{animationDelay: '0.6s'}}
          >
            <Download className="w-5 h-5 mr-2" />
            {currentContent.buyNow}
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-green-400">
            {currentContent.aboutTitle}
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {currentContent.aboutText}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-green-400">
            {currentContent.learnTitle}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.features.map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-green-400/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    {index === 0 && <Zap className="w-8 h-8 mx-auto text-green-400" />}
                    {index === 1 && <Target className="w-8 h-8 mx-auto text-green-400" />}
                    {index === 2 && <Shield className="w-8 h-8 mx-auto text-green-400" />}
                    {index === 3 && <Brain className="w-8 h-8 mx-auto text-green-400" />}
                    {index === 4 && <Eye className="w-8 h-8 mx-auto text-green-400" />}
                    {index === 5 && <Code className="w-8 h-8 mx-auto text-green-400" />}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{feature}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-green-400">
            {currentContent.previewTitle}
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            {currentContent.previewText}
          </p>
          
          <div className="mb-8">
            <img 
              src="/lovable-uploads/3ec06ccf-4e23-4d12-a3c7-78913ccc941c.png" 
              alt="Cognitive SEO Warfare Book Cover"
              className="max-w-md mx-auto rounded-lg shadow-2xl shadow-green-600/20 hover:transform hover:scale-105 transition-all duration-300"
            />
          </div>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 transition-all duration-300"
          >
            {currentContent.viewSample}
          </Button>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-green-400">
            {currentContent.authorTitle}
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {currentContent.authorText}
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-green-400">
            {currentContent.testimonialsTitle}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-green-400/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-green-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-green-400 font-semibold">- {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-green-400">
            {currentContent.pricingTitle}
          </h3>
          
          <Card className="bg-gray-800 border-green-400 max-w-md mx-auto mb-8">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-green-400 mb-4">€39</div>
              <p className="text-lg text-gray-300 mb-6">{currentContent.pricingText}</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-2" />
                  {currentContent.instantDownload}
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-2" />
                  {currentContent.moneyBack}
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-2" />
                  {currentContent.securePayment}
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-500 text-white py-4 text-lg font-bold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-600/25"
              >
                <Download className="w-5 h-5 mr-2" />
                {currentContent.buyNow}
              </Button>
            </CardContent>
          </Card>
          
          <div className="text-sm text-gray-400">
            Powered by Digistore24 • Secure Payment Processing
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              {currentContent.footer.terms}
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              {currentContent.footer.privacy}
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              {currentContent.footer.contact}
            </a>
          </div>
          
          <div className="text-gray-500 text-sm">
            © 2024 Cognitive SEO Warfare. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

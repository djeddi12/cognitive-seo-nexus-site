import React, { useState } from 'react';
import { Brain, Zap, Eye, Shield, Target, Code, ChevronDown, Globe, Download, Star, Check, Book, Lock, Search, Mail, Phone, MapPin, FileText, Scale, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'de'>('en');
  const [activeSection, setActiveSection] = useState<string>('');

  const content = {
    en: {
      heroTitle: "COGNITIVE SEO WARFARE",
      heroSubtitle: "The Psychology-Based Framework to Hijack Search Algorithms",
      heroDescription: "A secret SEO training Google doesn't want you to read.",
      buyNow: "Buy Now - Instant Download",
      downloadNow: "Download Your Copy Now",
      aboutTitle: "About the Book",
      aboutText: "Discover 60 pages of forbidden SEO tactics across 10 exclusive modules. This underground manual reveals advanced psychological strategies that exploit search algorithm weaknesses using cognitive science and neural manipulation techniques.",
      learnTitle: "What You'll Master",
      features: [
        "Semantic Echo Hacking",
        "Authority Inflation Loops", 
        "Crawler Trapdoors",
        "Neural Web Shaping",
        "Intent Distortion Engine",
        "Omega Algorithm Mirror"
      ],
      previewTitle: "Exclusive Book Excerpts",
      previewSubtitle: "Get a glimpse into the forbidden knowledge that will transform your SEO approach",
      viewSample: "View Full Sample Chapter",
      authorTitle: "About the Author",
      authorText: "Created by an underground SEO strategist with 10+ years of experience manipulating search algorithms and dominating competitive niches using advanced psychological warfare techniques.",
      testimonialsTitle: "What Readers Say",
      testimonials: [
        {
          text: "This book completely changed how I approach SEO. The psychological tactics are brilliant and actually work!",
          author: "Marcus K., Digital Marketer"
        },
        {
          text: "Finally, someone reveals the real secrets. My rankings doubled in 3 months using these cognitive techniques.",
          author: "Sarah M., SEO Consultant"
        },
        {
          text: "Dark hat techniques that actually work. This is pure gold for serious SEOs who want to dominate.",
          author: "Alex R., Growth Hacker"
        }
      ],
      pricingTitle: "Get Instant Access",
      pricingText: "Secure your copy now for €39 – Instant PDF download with bonus materials",
      instantDownload: "Instant PDF Download",
      moneyBack: "30-Day Money Back Guarantee",
      securePayment: "Secure Payment via Digistore24",
      bonusTitle: "Exclusive Bonuses Included",
      bonuses: [
        "Advanced Algorithm Manipulation Checklist",
        "Psychological Trigger Templates",
        "Case Study: How I Dominated a 50M Search Market"
      ],
      deliveryTitle: "Instant Delivery After Purchase",
      deliveryText: "Get immediate access to your digital copy plus all bonus materials",
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
      buyNow: "Jetzt kaufen - Sofortiger Download",
      downloadNow: "Laden Sie Ihre Kopie jetzt herunter",
      aboutTitle: "Über das Buch",
      aboutText: "Entdecken Sie 60 Seiten verbotener SEO-Taktiken in 10 exklusiven Modulen. Dieses Untergrund-Handbuch enthüllt fortgeschrittene psychologische Strategien, die Schwächen von Suchalgorithmen mit kognitiven Wissenschaften und neuraler Manipulation ausnutzen.",
      learnTitle: "Was Sie beherrschen werden",
      features: [
        "Semantisches Echo-Hacking",
        "Autoritäts-Inflationsschleifen",
        "Crawler-Fallen", 
        "Neuronale Web-Formung",
        "Intentionsverzerrungsmaschine",
        "Omega-Algorithmus-Spiegel"
      ],
      previewTitle: "Exklusive Buchauszüge",
      previewSubtitle: "Erhalten Sie einen Einblick in das verbotene Wissen, das Ihren SEO-Ansatz transformieren wird",
      viewSample: "Vollständiges Beispielkapitel ansehen",
      authorTitle: "Über den Autor",
      authorText: "Geschrieben von einem Untergrund-SEO-Strategen mit über 10 Jahren Erfahrung in der Manipulation von Suchalgorithmen und der Dominierung konkurrenzfähiger Nischen mit fortgeschrittenen psychologischen Kriegsführungstechniken.",
      testimonialsTitle: "Was Leser sagen",
      testimonials: [
        {
          text: "Dieses Buch hat meine SEO-Herangehensweise völlig verändert. Die psychologischen Taktiken sind brillant und funktionieren tatsächlich!",
          author: "Marcus K., Digital Marketer"
        },
        {
          text: "Endlich enthüllt jemand die wahren Geheimnisse. Meine Rankings haben sich in 3 Monaten mit diesen kognitiven Techniken verdoppelt.",
          author: "Sarah M., SEO Beraterin"
        },
        {
          text: "Dark Hat Techniken, die tatsächlich funktionieren. Das ist pures Gold für ernsthafte SEOs, die dominieren wollen.",
          author: "Alex R., Growth Hacker"
        }
      ],
      pricingTitle: "Sofortigen Zugang erhalten",
      pricingText: "Sichern Sie sich Ihre Kopie jetzt für 39 € – Sofortiger PDF-Download mit Bonusmaterialien",
      instantDownload: "Sofortiger PDF-Download",
      moneyBack: "30-Tage Geld-zurück-Garantie",
      securePayment: "Sichere Zahlung über Digistore24",
      bonusTitle: "Exklusive Boni enthalten",
      bonuses: [
        "Erweiterte Algorithmus-Manipulations-Checkliste",
        "Psychologische Trigger-Vorlagen",
        "Fallstudie: Wie ich einen 50M-Such-Markt dominiert habe"
      ],
      deliveryTitle: "Sofortige Lieferung nach dem Kauf",
      deliveryText: "Erhalten Sie sofortigen Zugang zu Ihrer digitalen Kopie plus alle Bonusmaterialien",
      footer: {
        terms: "AGB",
        privacy: "Datenschutz",
        contact: "Kontakt"
      }
    }
  };

  const currentContent = content[language];

  const excerpts = [
    {
      title: "Module 1: The Authority Mimicry Principle",
      text: "The algorithm doesn't just analyze your content – it analyzes the cognitive signatures of authority that humans have trained it to recognize. When you master this, you're not just building authority; you're hijacking the neurological pathways that determine expertise.",
      power: "This shows how your book goes beyond SEO tricks to psychological rewiring of search engines.",
      icon: <Brain className="w-6 h-6 text-green-400" />
    },
    {
      title: "Module 2: Semantic Entanglement Theory", 
      text: "Semantic entanglement is cognitive camouflage — your content becomes invisibly connected to high-authority topics without directly competing for them, hijacking their ranking strength.",
      power: "This communicates the book's depth in algorithmic manipulation through language psychology.",
      icon: <Zap className="w-6 h-6 text-green-400" />
    },
    {
      title: "Module 3: Cognitive Load Optimization",
      text: "Cognitive load isn't about content length – it's about neural engineering. When you design your message to match the brain's attention rhythms, you don't just inform. You embed.",
      power: "Perfect for showing that your strategy uses neuroscience to improve SEO performance.",
      icon: <Target className="w-6 h-6 text-green-400" />
    }
  ];

  const showSection = (section: string) => {
    setActiveSection(activeSection === section ? '' : section);
  };

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

      {/* Hero Section with Book Cover */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/20">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="text-center max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Book Cover */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <img 
                src="https://i.ibb.co/DH4m2KPh/cognitive-seo-warfare-book-cover.png" 
                alt="Cognitive SEO Warfare Book Cover"
                className="w-80 h-auto rounded-lg shadow-2xl shadow-green-600/30 hover:transform hover:scale-105 transition-all duration-300"
              />
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                NEW!
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 md:order-2 text-left">
            <div className="mb-8 animate-fade-in">
              <Brain className="w-16 h-16 mb-6 text-green-400 animate-pulse" />
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent animate-fade-in">
              {currentContent.heroTitle}
            </h1>
            
            <h2 className="text-lg md:text-xl text-gray-300 mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
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

      {/* Book Excerpts Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">
              {currentContent.previewTitle}
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {currentContent.previewSubtitle}
            </p>
          </div>
          
          <div className="grid gap-8">
            {excerpts.map((excerpt, index) => (
              <Card key={index} className="bg-gray-800 border-green-400/20 hover:border-green-400/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {excerpt.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                        <Search className="w-5 h-5 mr-2" />
                        Excerpt {index + 1} — {excerpt.title}
                      </h4>
                      <blockquote className="text-lg text-gray-300 italic mb-4 border-l-4 border-green-400 pl-4">
                        "{excerpt.text}"
                      </blockquote>
                      <div className="flex items-start space-x-2">
                        <Brain className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <p className="text-green-300 font-semibold">
                          <span className="text-green-400">Power:</span> {excerpt.power}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 transition-all duration-300"
              onClick={() => window.open('https://drive.google.com/file/d/1WmJyIl9ma-XBqpOOcwEVJgfk1oD6NOJU/view?usp=sharing', '_blank')}
            >
              <Book className="w-5 h-5 mr-2" />
              {currentContent.viewSample}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-800/50">
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

      {/* Bonus Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-green-400">
            {currentContent.bonusTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {currentContent.bonuses.map((bonus, index) => (
              <Card key={index} className="bg-gray-800 border-green-400/20">
                <CardContent className="p-6 text-center">
                  <Lock className="w-8 h-8 mx-auto mb-4 text-green-400" />
                  <p className="text-white font-semibold">{bonus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-800/50">
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
                className="w-full bg-green-600 hover:bg-green-500 text-white py-4 text-lg font-bold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-600/25 mb-4"
              >
                <Download className="w-5 h-5 mr-2" />
                {currentContent.downloadNow}
              </Button>
            </CardContent>
          </Card>
          
          <div className="bg-green-900/20 border border-green-400/30 rounded-lg p-6 max-w-md mx-auto mb-8">
            <h4 className="text-xl font-bold text-green-400 mb-4">
              {currentContent.deliveryTitle}
            </h4>
            <p className="text-gray-300">{currentContent.deliveryText}</p>
          </div>
          
          <div className="text-sm text-gray-400">
            Powered by Digistore24 • Secure Payment Processing
          </div>
        </div>
      </section>

      {/* Footer Pages Sections */}
      {activeSection && (
        <section className="py-20 px-4 bg-gray-800/70">
          <div className="max-w-4xl mx-auto">
            <Button 
              onClick={() => setActiveSection('')}
              className="mb-8 bg-gray-700 hover:bg-gray-600 text-white"
            >
              ← Back to Main Page
            </Button>
            
            {activeSection === 'faq' && (
              <div>
                <h2 className="text-4xl font-bold text-green-400 mb-12 text-center">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  <Card className="bg-gray-800 border-green-400/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-green-400 mb-3">
                        What format is the book delivered in?
                      </h3>
                      <p className="text-gray-300">
                        The book is delivered as a high-quality PDF file that you can download immediately after purchase. 
                        You'll also receive access to bonus materials and templates.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-800 border-green-400/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-green-400 mb-3">
                        Is there a money-back guarantee?
                      </h3>
                      <p className="text-gray-300">
                        Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the content, 
                        contact us within 30 days for a full refund.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-800 border-green-400/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-green-400 mb-3">
                        How quickly will I receive access?
                      </h3>
                      <p className="text-gray-300">
                        Access is instant! Once your payment is processed by Digistore24, you'll immediately 
                        receive download links via email and be redirected to the download page.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-800 border-green-400/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-green-400 mb-3">
                        Are these techniques safe to use?
                      </h3>
                      <p className="text-gray-300">
                        The techniques focus on understanding search psychology and user behavior. 
                        They emphasize creating genuinely valuable content that resonates with both users and algorithms.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
            
            {activeSection === 'contact' && (
              <div>
                <h2 className="text-4xl font-bold text-green-400 mb-12 text-center">
                  Contact Information
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-gray-800 border-green-400/20">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <Mail className="w-6 h-6 text-green-400 mr-3" />
                        <h3 className="text-xl font-semibold text-white">Email Support</h3>
                      </div>
                      <p className="text-gray-300 mb-2">
                        For product support and general inquiries:
                      </p>
                      <p className="text-green-400 font-semibold">
                        support@fastseohub.com
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-800 border-green-400/20">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <Phone className="w-6 h-6 text-green-400 mr-3" />
                        <h3 className="text-xl font-semibold text-white">Phone Support</h3>
                      </div>
                      <p className="text-gray-300 mb-2">
                        Direct contact for urgent matters:
                      </p>
                      <p className="text-green-400 font-semibold">
                        0665121272
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-800 border-green-400/20 md:col-span-2">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <Users className="w-6 h-6 text-green-400 mr-3" />
                        <h3 className="text-xl font-semibold text-white">About the Creator</h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        This product is created and maintained by Aimad Djeddi, an experienced SEO strategist 
                        with over 10 years in the industry. All customer support is handled personally to 
                        ensure the highest quality of service.
                      </p>
                      <p className="text-green-400 font-semibold">
                        Response time: Usually within 24 hours
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
            
            {activeSection === 'privacy' && (
              <div>
                <h2 className="text-4xl font-bold text-green-400 mb-12 text-center">
                  Privacy Policy
                </h2>
                <Card className="bg-gray-800 border-green-400/20">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      <section>
                        <h3 className="text-2xl font-semibold text-green-400 mb-4">Information We Collect</h3>
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
                        <h3 className="text-2xl font-semibold text-green-400 mb-4">How We Use Your Information</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                          <li>To process and fulfill your orders</li>
                          <li>To provide customer support</li>
                          <li>To send you product updates and important notices</li>
                          <li>To improve our products and services</li>
                          <li>To comply with legal obligations</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-2xl font-semibold text-green-400 mb-4">Data Sharing</h3>
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
                        <h3 className="text-2xl font-semibold text-green-400 mb-4">Contact Us</h3>
                        <p className="text-gray-300">
                          If you have questions about this Privacy Policy, please contact us at support@fastseohub.com
                        </p>
                      </section>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeSection === 'terms' && (
              <div>
                <h2 className="text-4xl font-bold text-green-400 mb-12 text-center">
                  Terms of Service
                </h2>
                <Card className="bg-gray-800 border-green-400/20">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      <section>
                        <h3 className="text-2xl font-semibold text-green-400 mb-4">Product Usage</h3>
                        <p className="text-gray-300 mb-4">
                          By purchasing "Cognitive SEO Warfare," you agree to use the content for lawful purposes only. 
                          The strategies presented are for educational purposes and should be implemented responsibly.
                        </p>
                      </section>

                      <section>
                        <h3 className="text-2xl font-semibold text-green-400 mb-4">Refund Policy</h3>
                        <p className="text-gray-300 mb-4">
                          We offer a 30-day money-back guarantee from the date of purchase. Refunds are processed 
                          through Digistore24 and may take 5-10 business days to appear in your account.
                        </p>
                      </section>

                      <section>
                        <h3 className="text-2xl font-semibold text-green-400 mb-4">Intellectual Property</h3>
                        <p className="text-gray-300 mb-4">
                          All content in this product is protected by copyright and is for personal use only. 
                          Redistribution, sharing, or reselling of the content is strictly prohibited.
                        </p>
                      </section>

                      <section>
                        <h3 className="text-2xl font-semibold text-green-400 mb-4">Disclaimer</h3>
                        <p className="text-gray-300 mb-4">
                          Results may vary based on implementation and market conditions. We make no guarantees 
                          about specific outcomes from using the strategies in this book.
                        </p>
                      </section>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeSection === 'legal' && (
              <div>
                <h2 className="text-4xl font-bold text-green-400 mb-12 text-center">
                  Legal Information
                </h2>
                <Card className="bg-gray-800 border-green-400/20">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      <section>
                        <h3 className="text-2xl font-semibold text-green-400 mb-4">Company Information</h3>
                        <div className="space-y-4 text-gray-300">
                          <div className="flex items-start space-x-3">
                            <Users className="w-5 h-5 text-green-400 mt-1" />
                            <div>
                              <p className="font-semibold">Business Owner:</p>
                              <p>Aimad Djeddi</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 text-green-400 mt-1" />
                            <div>
                              <p className="font-semibold">Business Address:</p>
                              <p>Available upon request for legal purposes</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <FileText className="w-5 h-5 text-green-400 mt-1" />
                            <div>
                              <p className="font-semibold">VAT ID:</p>
                              <p>Available upon request for business customers</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <Mail className="w-5 h-5 text-green-400 mt-1" />
                            <div>
                              <p className="font-semibold">Contact Email:</p>
                              <p>support@fastseohub.com</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <Phone className="w-5 h-5 text-green-400 mt-1" />
                            <div>
                              <p className="font-semibold">Phone:</p>
                              <p>0665121272</p>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h3 className="text-2xl font-semibold text-green-400 mb-4">Payment Processing</h3>
                        <div className="bg-gray-900/50 p-4 rounded-lg">
                          <p className="text-yellow-400 font-semibold mb-2">Important Notice:</p>
                          <p className="text-gray-300">
                            The withdrawal from your account will be done by Digistore24. 
                            All payments are processed securely through our payment partner Digistore24.
                          </p>
                        </div>
                      </section>

                      <section>
                        <h3 className="text-2xl font-semibold text-green-400 mb-4">Regulatory Compliance</h3>
                        <p className="text-gray-300 mb-4">
                          This business operates in compliance with applicable consumer protection laws and 
                          e-commerce regulations. All customer rights are protected according to local legislation.
                        </p>
                      </section>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-green-400 mb-4">FastSEOHub.com</h3>
              <p className="text-gray-400 text-sm mb-4">Created by Aimad Djeddi</p>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => showSection('faq')}
                    className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => showSection('contact')}
                    className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => showSection('privacy')}
                    className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => showSection('terms')}
                    className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => showSection('legal')}
                    className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                  >
                    Legal Information
                  </button>
                </li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Aimad Djeddi</p>
                <p>Phone: 0665121272</p>
                <p>Email: support@fastseohub.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center">
              <div className="text-gray-500 text-sm mb-2">
                © 2024 FastSEOHub.com - Cognitive SEO Warfare. All rights reserved.
              </div>
              <div className="text-sm text-gray-400">
                Powered by Digistore24 • Secure Payment Processing
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

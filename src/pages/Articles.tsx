
import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Brain, Target, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "The Psychology Behind Search Algorithm Manipulation",
      excerpt: "Discover how cognitive biases built into search algorithms can be exploited using advanced psychological techniques that most SEO experts don't know about.",
      author: "Aimad Djeddi",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Psychology",
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Authority Mimicry: How to Hijack Established Domain Power",
      excerpt: "Learn the forbidden technique of authority mimicry that allows new websites to borrow ranking signals from established domains without any backlinks.",
      author: "Aimad Djeddi", 
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Advanced SEO",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Semantic Entanglement: The Invisible Connection Strategy",
      excerpt: "Uncover how to create invisible semantic connections between your content and high-authority topics, hijacking their ranking strength without direct competition.",
      author: "Aimad Djeddi",
      date: "2024-01-10",
      readTime: "10 min read", 
      category: "Content Strategy",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 4,  
      title: "Neural Web Shaping: Programming Search Engine Behavior",
      excerpt: "Master the art of neural web shaping to program search engine behavior patterns, making algorithms favor your content through psychological conditioning.",
      author: "Aimad Djeddi",
      date: "2024-01-08",
      readTime: "15 min read",
      category: "Advanced Techniques",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Cognitive Load Optimization for Maximum Impact",
      excerpt: "Discover how to engineer your content to match brain attention rhythms, creating content that doesn't just inform but embeds itself in user memory.",
      author: "Aimad Djeddi",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Neuroscience SEO",
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: 6,
      title: "The Intent Distortion Engine: Redirecting Search Intent",
      excerpt: "Learn how to build an intent distortion engine that subtly redirects user search intent toward your content while maintaining natural search patterns.",
      author: "Aimad Djeddi",
      date: "2024-01-03",
      readTime: "11 min read",
      category: "Search Psychology",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const categories = ["All", "Psychology", "Advanced SEO", "Content Strategy", "Advanced Techniques", "Neuroscience SEO", "Search Psychology"];

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
              <h1 className="text-3xl font-bold text-green-400">SEO Warfare Articles</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <Brain className="w-16 h-16 mx-auto mb-6 text-green-400" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Advanced SEO Psychology
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Deep insights into the psychological manipulation of search algorithms and user behavior
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" 
                  ? "bg-green-600 hover:bg-green-500 text-white" 
                  : "border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="bg-gray-800 border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 text-green-400">
                      {article.icon}
                      <span className="text-sm font-semibold">{article.category}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white hover:text-green-400 transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button 
                      size="sm" 
                      className="w-full bg-green-600 hover:bg-green-500 text-white"
                    >
                      Read Full Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-green-400 mb-4">
            Get Advanced SEO Insights
          </h3>
          <p className="text-gray-300 mb-8">
            Subscribe to receive exclusive psychological SEO strategies and algorithm manipulation techniques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
            />
            <Button className="bg-green-600 hover:bg-green-500 text-white px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Want to Master These Techniques?
          </h3>
          <p className="text-xl text-green-100 mb-8">
            Get the complete Cognitive SEO Warfare manual with all advanced strategies
          </p>
          <Link to="/">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold"
            >
              Get the Complete Guide
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Articles;

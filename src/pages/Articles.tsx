
import React from 'react';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Advanced SEO Psychology: Understanding Search Intent",
      excerpt: "Dive deep into the psychological aspects of search behavior and how to optimize for user intent.",
      author: "Aimad Djeddi",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Psychology"
    },
    {
      id: 2,
      title: "Neural Network SEO: The Future of Search Optimization",
      excerpt: "Explore how machine learning and neural networks are reshaping SEO strategies.",
      author: "Aimad Djeddi",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Technology"
    },
    {
      id: 3,
      title: "Cognitive Biases in Search Algorithms",
      excerpt: "Learn how to leverage cognitive biases to improve your search rankings.",
      author: "Aimad Djeddi",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Strategy"
    },
    {
      id: 4,
      title: "The Dark Side of SEO: Ethical Considerations",
      excerpt: "Discussing the ethical implications of advanced SEO tactics and where to draw the line.",
      author: "Aimad Djeddi",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Ethics"
    }
  ];

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
              <h1 className="text-3xl font-bold text-green-400">SEO Articles</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Articles Grid */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="bg-gray-800 border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">
                  {article.title}
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                </div>
                <Button 
                  className="w-full mt-4 bg-green-600 hover:bg-green-500 text-white"
                  size="sm"
                >
                  Read Article
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900"
          >
            Load More Articles
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Articles;

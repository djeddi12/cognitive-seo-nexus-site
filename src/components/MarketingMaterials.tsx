
import React from 'react';
import { Download, FileText, Image, Video, Mail, Share2, Gift, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MarketingMaterials = () => {
  const materials = [
    {
      title: "High-Converting Landing Pages",
      description: "3 complete landing page templates with proven conversion rates of 15%+",
      files: [
        { name: "Landing Page Template 1.html", size: "45KB", type: "HTML" },
        { name: "Landing Page Template 2.html", size: "52KB", type: "HTML" },
        { name: "Landing Page Template 3.html", size: "38KB", type: "HTML" }
      ],
      icon: <FileText className="w-6 h-6 text-green-400" />,
      downloads: 1247
    },
    {
      title: "Email Templates & Sequences",
      description: "Complete 7-day email sequence + 15 promotional email templates",
      files: [
        { name: "Welcome Email Sequence.txt", size: "12KB", type: "TXT" },
        { name: "Promotional Email Templates.docx", size: "28KB", type: "DOCX" },
        { name: "Follow-up Sequences.txt", size: "15KB", type: "TXT" }
      ],
      icon: <Mail className="w-6 h-6 text-green-400" />,
      downloads: 892
    },
    {
      title: "Social Media Graphics & Posts",
      description: "Instagram, Facebook, Twitter graphics + caption templates",
      files: [
        { name: "Instagram Posts Bundle.zip", size: "125MB", type: "ZIP" },
        { name: "Facebook Ad Graphics.zip", size: "89MB", type: "ZIP" },
        { name: "Social Media Captions.txt", size: "8KB", type: "TXT" }
      ],
      icon: <Share2 className="w-6 h-6 text-green-400" />,
      downloads: 1456
    },
    {
      title: "Banner Ads (Multiple Sizes)",
      description: "Display banners in all standard sizes (728x90, 300x250, 160x600)",
      files: [
        { name: "Leaderboard Banners 728x90.zip", size: "45MB", type: "ZIP" },
        { name: "Rectangle Banners 300x250.zip", size: "32MB", type: "ZIP" },
        { name: "Skyscraper Banners 160x600.zip", size: "28MB", type: "ZIP" }
      ],
      icon: <Image className="w-6 h-6 text-green-400" />,
      downloads: 734
    },
    {
      title: "Video Sales Letters",
      description: "2 complete VSL scripts + video templates for maximum conversion",
      files: [
        { name: "VSL Script Template 1.pdf", size: "2.1MB", type: "PDF" },
        { name: "VSL Script Template 2.pdf", size: "1.8MB", type: "PDF" },
        { name: "Video Assets Bundle.zip", size: "156MB", type: "ZIP" }
      ],
      icon: <Video className="w-6 h-6 text-green-400" />,
      downloads: 567
    },
    {
      title: "Product Images & Screenshots",
      description: "High-resolution product mockups, book covers, and feature screenshots",
      files: [
        { name: "Book Cover High-Res.zip", size: "78MB", type: "ZIP" },
        { name: "Product Mockups.zip", size: "234MB", type: "ZIP" },
        { name: "Feature Screenshots.zip", size: "45MB", type: "ZIP" }
      ],
      icon: <Image className="w-6 h-6 text-green-400" />,
      downloads: 1123
    },
    {
      title: "Proven Sales Copy Templates",
      description: "Battle-tested sales copy variations with conversion data",
      files: [
        { name: "Short Form Sales Copy.txt", size: "18KB", type: "TXT" },
        { name: "Long Form Sales Copy.txt", size: "35KB", type: "TXT" },
        { name: "Headline Variations.txt", size: "12KB", type: "TXT" }
      ],
      icon: <Copy className="w-6 h-6 text-green-400" />,
      downloads: 945
    },
    {
      title: "Bonus Materials & Lead Magnets",
      description: "Free reports, checklists, and bonuses to boost your conversions",
      files: [
        { name: "SEO Quick Start Checklist.pdf", size: "1.2MB", type: "PDF" },
        { name: "Keyword Research Template.xlsx", size: "45KB", type: "XLSX" },
        { name: "Bonus Report - Algorithm Secrets.pdf", size: "3.4MB", type: "PDF" }
      ],
      icon: <Gift className="w-6 h-6 text-green-400" />,
      downloads: 1678
    }
  ];

  const handleDownload = (fileName: string) => {
    // In a real implementation, this would download the actual file
    console.log(`Downloading: ${fileName}`);
    // For demo purposes, we'll just show an alert
    alert(`Downloading ${fileName}... (Demo mode - file would download in production)`);
  };

  const handleDownloadAll = (materialTitle: string) => {
    console.log(`Downloading all files for: ${materialTitle}`);
    alert(`Downloading all ${materialTitle} files... (Demo mode)`);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-green-400 mb-2">
          Complete Marketing Arsenal
        </h3>
        <p className="text-gray-300">
          Professional marketing materials tested and optimized for maximum conversions
        </p>
      </div>

      <div className="grid gap-6">
        {materials.map((material, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {material.icon}
                  <div>
                    <h4 className="text-white text-lg">{material.title}</h4>
                    <p className="text-gray-400 text-sm font-normal">{material.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 text-sm font-semibold">
                    {material.downloads.toLocaleString()} downloads
                  </div>
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-500 text-white mt-2"
                    onClick={() => handleDownloadAll(material.title)}
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download All
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {material.files.map((file, fileIndex) => (
                  <div
                    key={fileIndex}
                    className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-600/20 p-2 rounded">
                        <FileText className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{file.name}</p>
                        <p className="text-gray-400 text-xs">{file.type} • {file.size}</p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-green-400 hover:text-white hover:bg-green-600"
                      onClick={() => handleDownload(file.name)}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8 p-6 bg-gray-800/50 rounded-lg border border-green-400/30">
        <h4 className="text-xl font-bold text-green-400 mb-2">
          Need Custom Materials?
        </h4>
        <p className="text-gray-300 mb-4">
          Contact our affiliate support team for custom banners, landing pages, or promotional materials
        </p>
        <Button className="bg-green-600 hover:bg-green-500 text-white">
          <Mail className="w-4 h-4 mr-2" />
          Request Custom Materials
        </Button>
      </div>
    </div>
  );
};

export default MarketingMaterials;

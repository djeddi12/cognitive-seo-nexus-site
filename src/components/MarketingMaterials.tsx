
import React from 'react';
import { Brain, Zap, Target, Mail, Share2, Gift, Copy, Eye, Lightbulb, Palette, Video, Camera, Edit3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MarketingMaterials = () => {
  const guides = [
    {
      title: "High-Converting Landing Pages",
      description: "Master the art of creating landing pages that convert visitors into customers",
      icon: <Brain className="w-6 h-6 text-green-400" />,
      content: (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-green-400">Structure That Converts:</h4>
          
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">1. Emotional Headline Formula</h5>
            <p className="text-gray-300 text-sm mb-2">Use this proven structure:</p>
            <p className="text-green-300 italic">"Achieve [DESIRED OUTCOME] in [TIME FRAME] with [YOUR METHOD]"</p>
            <p className="text-gray-300 text-sm mt-2">Example: "Rank #1 on Google in 90 Days with Cognitive SEO Warfare"</p>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">2. Call-to-Action Placement</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Above the fold (visible without scrolling)</li>
              <li>• After each benefit section</li>
              <li>• At the end of testimonials</li>
              <li>• Use action words: "Get Instant Access", "Start Now", "Download Today"</li>
            </ul>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">3. Color Psychology & Layout</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Use green for "positive" actions (buy, download)</li>
              <li>• Orange/red for urgency and scarcity</li>
              <li>• Blue for trust and security</li>
              <li>• Keep 70% neutral, 20% secondary, 10% accent colors</li>
            </ul>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">4. Mobile Optimization</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Single column layout</li>
              <li>• Buttons at least 44px high</li>
              <li>• Large, readable fonts (16px minimum)</li>
              <li>• Test on actual mobile devices</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Email Templates & Sequences",
      description: "Create compelling email campaigns that nurture leads and drive sales",
      icon: <Mail className="w-6 h-6 text-green-400" />,
      content: (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-green-400">7-Day Welcome Email Sequence:</h4>
          
          <div className="space-y-3">
            {[
              { day: 1, subject: "Welcome - Here's what happens next", content: "Introduce yourself, thank them, set expectations. Share your story briefly." },
              { day: 2, subject: "The #1 mistake [topic] beginners make", content: "Identify a common problem, agitate it gently, then provide the solution." },
              { day: 3, subject: "Quick win: Try this today", content: "Give them an actionable tip they can implement immediately." },
              { day: 4, subject: "My embarrassing failure story", content: "Share a personal failure story and what you learned from it." },
              { day: 5, subject: "Free resource inside", content: "Provide genuine value - checklist, template, or mini-guide." },
              { day: 6, subject: "Social proof: What others are saying", content: "Share testimonials, case studies, or success stories." },
              { day: 7, subject: "Special offer (expires tomorrow)", content: "Make your pitch with urgency and scarcity." }
            ].map((email, index) => (
              <div key={index} className="bg-gray-700/50 p-4 rounded-lg">
                <h5 className="font-semibold text-white mb-1">Day {email.day}: {email.subject}</h5>
                <p className="text-gray-300 text-sm">{email.content}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Subject Line Formulas:</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• "Quick question about [topic]"</li>
              <li>• "[Name], this might surprise you"</li>
              <li>• "3 ways to [achieve goal]"</li>
              <li>• "Don't make this [topic] mistake"</li>
              <li>• "Last chance: [offer] ends tonight"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Social Media Graphics & Posts",
      description: "Design engaging visuals and write compelling captions using free tools",
      icon: <Share2 className="w-6 h-6 text-green-400" />,
      content: (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-green-400">Creating Graphics with Canva:</h4>
          
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Standard Dimensions:</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Instagram Post: 1080x1080px (square)</li>
              <li>• Instagram Story: 1080x1920px (vertical)</li>
              <li>• Facebook Post: 1200x630px (landscape)</li>
              <li>• Twitter/X Post: 1200x675px (landscape)</li>
              <li>• LinkedIn Post: 1200x627px (landscape)</li>
            </ul>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Caption Structure (Hook > Value > CTA):</h5>
            <div className="text-gray-300 text-sm space-y-2">
              <p><span className="text-green-400">Hook:</span> "Most people fail at SEO because..."</p>
              <p><span className="text-green-400">Value:</span> "Here are 3 psychological triggers that actually work: 1) Authority mimicry 2) Semantic entanglement 3) Cognitive load optimization"</p>
              <p><span className="text-green-400">CTA:</span> "Want the full strategy? Link in bio 👆"</p>
            </div>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Carousel Post Template:</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Slide 1: Hook question + preview of tips</li>
              <li>• Slides 2-6: One tip per slide with explanation</li>
              <li>• Slide 7: Summary + CTA to your product</li>
              <li>• Use consistent colors and fonts throughout</li>
            </ul>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Quick Canva Process:</h5>
            <ol className="text-gray-300 text-sm space-y-1">
              <li>1. Choose "Instagram Post" template</li>
              <li>2. Add your product image as background</li>
              <li>3. Overlay bold text with benefit claim</li>
              <li>4. Add simple CTA at bottom</li>
              <li>5. Export as PNG/JPG</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: "Banner Ads (Multiple Sizes)",
      description: "Design attention-grabbing banner ads for different platforms and placements",
      icon: <Palette className="w-6 h-6 text-green-400" />,
      content: (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-green-400">Standard Banner Sizes & Placements:</h4>
          
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Common Banner Dimensions:</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Leaderboard: 728x90px (top of websites)</li>
              <li>• Medium Rectangle: 300x250px (sidebar, in-content)</li>
              <li>• Skyscraper: 160x600px (sidebar)</li>
              <li>• Large Rectangle: 336x280px (in-content)</li>
              <li>• Mobile Banner: 320x50px (mobile apps/sites)</li>
            </ul>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Design Tools to Use:</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <span className="text-green-400">Canva:</span> Pre-made templates, easy drag-and-drop</li>
              <li>• <span className="text-green-400">Adobe Express:</span> Professional templates, free tier</li>
              <li>• <span className="text-green-400">Photopea:</span> Free Photoshop alternative, browser-based</li>
              <li>• <span className="text-green-400">GIMP:</span> Open-source, powerful editing</li>
            </ul>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">High-Converting Banner Formula:</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <span className="text-green-400">Bright colors:</span> Use contrasting colors that stand out</li>
              <li>• <span className="text-green-400">Benefit headline:</span> "Get 3x More Traffic in 30 Days"</li>
              <li>• <span className="text-green-400">Product visual:</span> Show your book/product clearly</li>
              <li>• <span className="text-green-400">Minimal text:</span> Keep it under 10 words total</li>
              <li>• <span className="text-green-400">Clear CTA:</span> "Learn More" or "Get Started"</li>
            </ul>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Step-by-Step Process:</h5>
            <ol className="text-gray-300 text-sm space-y-1">
              <li>1. Open Canva and create custom dimensions</li>
              <li>2. Choose eye-catching background color</li>
              <li>3. Add your product image on one side</li>
              <li>4. Write benefit-focused headline</li>
              <li>5. Add button-style CTA element</li>
              <li>6. Export as PNG with transparent background</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: "Video Sales Letters (VSLs)",
      description: "Create compelling video sales scripts using proven psychological formulas",
      icon: <Video className="w-6 h-6 text-green-400" />,
      content: (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-green-400">VSL Script Formulas:</h4>
          
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">PAS Formula (Problem-Agitate-Solve):</h5>
            <ol className="text-gray-300 text-sm space-y-2">
              <li><span className="text-green-400">1. Problem:</span> "Are you struggling to rank on Google despite following all the 'best practices'?"</li>
              <li><span className="text-green-400">2. Agitate:</span> "While you're stuck on page 2, your competitors are stealing your customers using tactics Google doesn't want you to know..."</li>
              <li><span className="text-green-400">3. Solve:</span> "That's why I created Cognitive SEO Warfare - the psychology-based framework that..."</li>
            </ol>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">AIDA Formula (Attention-Interest-Desire-Action):</h5>
            <ol className="text-gray-300 text-sm space-y-2">
              <li><span className="text-green-400">1. Attention:</span> "STOP! If you're tired of SEO tactics that don't work..."</li>
              <li><span className="text-green-400">2. Interest:</span> "I'm about to reveal the psychological triggers that search engines can't resist..."</li>
              <li><span className="text-green-400">3. Desire:</span> "Imagine ranking #1 for your target keywords within 90 days..."</li>
              <li><span className="text-green-400">4. Action:</span> "Click the button below to get instant access..."</li>
            </ol>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Complete VSL Outline (10-15 minutes):</h5>
            <ol className="text-gray-300 text-sm space-y-1">
              <li>1. <span className="text-green-400">Hook (0-30s):</span> Attention-grabbing problem statement</li>
              <li>2. <span className="text-green-400">Story (30s-3min):</span> Your origin story or case study</li>
              <li>3. <span className="text-green-400">Problem (3-5min):</span> Agitate the pain points</li>
              <li>4. <span className="text-green-400">Solution (5-8min):</span> Present your method/product</li>
              <li>5. <span className="text-green-400">Proof (8-10min):</span> Testimonials and results</li>
              <li>6. <span className="text-green-400">Offer (10-12min):</span> Present your price and bonuses</li>
              <li>7. <span className="text-green-400">Urgency (12-14min):</span> Limited time or quantity</li>
              <li>8. <span className="text-green-400">CTA (14-15min):</span> Clear next steps</li>
            </ol>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Recording Tools & Setup:</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <span className="text-green-400">Loom:</span> Screen recording with webcam overlay</li>
              <li>• <span className="text-green-400">OBS Studio:</span> Free, professional recording software</li>
              <li>• <span className="text-green-400">PowerPoint + voiceover:</span> Create slides, record narration</li>
              <li>• Use good lighting and clear audio (invest in a decent microphone)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Product Images & Screenshots",
      description: "Create professional mockups and high-quality product visuals",
      icon: <Camera className="w-6 h-6 text-green-400" />,
      content: (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-green-400">Creating Professional Mockups:</h4>
          
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Free Mockup Tools:</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <span className="text-green-400">SmartMockups:</span> 3D book covers, device mockups</li>
              <li>• <span className="text-green-400">Canva:</span> Book mockup templates</li>
              <li>• <span className="text-green-400">Placeit:</span> Product mockups and videos</li>
              <li>• <span className="text-green-400">MockupWorld:</span> Free PSD templates</li>
            </ul>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Screenshot Best Practices:</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Use high resolution (at least 1920x1080)</li>
              <li>• Capture clean interfaces without personal data</li>
              <li>• Add annotations with arrows or highlights</li>
              <li>• Show before/after comparisons when possible</li>
              <li>• Export as PNG for crisp quality</li>
            </ul>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Enhancement Techniques:</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <span className="text-green-400">Add shadows:</span> Creates depth and professionalism</li>
              <li>• <span className="text-green-400">Device frames:</span> Show eBooks in tablet/phone mockups</li>
              <li>• <span className="text-green-400">Background replacement:</span> Use gradient or solid colors</li>
              <li>• <span className="text-green-400">Badge overlays:</span> "NEW", "BESTSELLER", "LIMITED TIME"</li>
            </ul>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Step-by-Step Process:</h5>
            <ol className="text-gray-300 text-sm space-y-1">
              <li>1. Create your book cover in Canva (1600x2400px)</li>
              <li>2. Go to SmartMockups and choose "3D Book" template</li>
              <li>3. Upload your cover design</li>
              <li>4. Adjust angle and lighting</li>
              <li>5. Add background or keep transparent</li>
              <li>6. Download in high resolution (PNG)</li>
              <li>7. Optional: Add shadow in Canva for extra polish</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: "Proven Sales Copy Templates",
      description: "Master the psychology of persuasive writing with tested formulas",
      icon: <Copy className="w-6 h-6 text-green-400" />,
      content: (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-green-400">Sales Copy Structures:</h4>
          
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Short-Form Template (500-1000 words):</h5>
            <ol className="text-gray-300 text-sm space-y-2">
              <li><span className="text-green-400">1. Attention-grabbing headline:</span> "The Secret SEO Tactic Google Doesn't Want You to Know"</li>
              <li><span className="text-green-400">2. Problem identification:</span> "Are you tired of following SEO advice that doesn't work?"</li>
              <li><span className="text-green-400">3. Solution preview:</span> "I discovered a psychology-based approach that..."</li>
              <li><span className="text-green-400">4. Benefits (3-5 bullet points):</span> What they'll achieve</li>
              <li><span className="text-green-400">5. Social proof:</span> One strong testimonial</li>
              <li><span className="text-green-400">6. Offer:</span> Price and what's included</li>
              <li><span className="text-green-400">7. Urgency:</span> Limited time or quantity</li>
              <li><span className="text-green-400">8. Strong CTA:</span> "Get Instant Access Now"</li>
            </ol>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Long-Form Template (2000+ words):</h5>
            <div className="text-gray-300 text-sm space-y-1">
              <p>• Expanded story section (personal struggle)</p>
              <p>• Detailed problem agitation (cost of inaction)</p>
              <p>• Complete solution explanation</p>
              <p>• Multiple testimonials and case studies</p>
              <p>• FAQ section addressing objections</p>
              <p>• Guarantee and risk reversal</p>
              <p>• Multiple CTAs throughout</p>
            </div>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Headline Formulas:</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <span className="text-green-400">Curiosity:</span> "The [X] Secret That [Desired Outcome]"</li>
              <li>• <span className="text-green-400">Benefit:</span> "How to [Achieve Goal] in [Time Frame]"</li>
              <li>• <span className="text-green-400">Question:</span> "What if [Desired Outcome] Was Easier Than You Think?"</li>
              <li>• <span className="text-green-400">Warning:</span> "Warning: Don't [Do Action] Until You Read This"</li>
            </ul>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Fill-in-the-Blank Template:</h5>
            <div className="text-gray-300 text-sm space-y-2">
              <p>"Finally! A [Product Type] That [Main Benefit] Without [Common Problem]"</p>
              <p>"Discover the [X] secrets to [Desired Outcome] that [Authority Figure] don't want you to know..."</p>
              <p>"Transform your [Area of Life] in just [Time Frame] using this [Method Type] approach."</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Bonus Materials & Lead Magnets",
      description: "Create valuable free resources that build trust and capture leads",
      icon: <Gift className="w-6 h-6 text-green-400" />,
      content: (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-green-400">Creating Powerful Lead Magnets:</h4>
          
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Checklist Template:</h5>
            <div className="text-gray-300 text-sm space-y-2">
              <p><span className="text-green-400">Title:</span> "Complete SEO Audit Checklist: 25 Points to Check"</p>
              <p><span className="text-green-400">Format:</span> Simple checkboxes with actionable items</p>
              <p><span className="text-green-400">Structure:</span></p>
              <ul className="ml-4 space-y-1">
                <li>□ Check page loading speed (under 3 seconds)</li>
                <li>□ Optimize title tags (50-60 characters)</li>
                <li>□ Write compelling meta descriptions</li>
                <li>□ Add internal links (3-5 per page)</li>
                <li>□ Include target keywords naturally</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Creating with Google Docs:</h5>
            <ol className="text-gray-300 text-sm space-y-1">
              <li>1. Create new Google Doc</li>
              <li>2. Use clear, bold headings</li>
              <li>3. Keep it scannable with bullet points</li>
              <li>4. Add your logo/branding at top</li>
              <li>5. Include CTA at the bottom</li>
              <li>6. File → Download → PDF Format</li>
            </ol>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Canva Alternative Method:</h5>
            <ol className="text-gray-300 text-sm space-y-1">
              <li>1. Choose "Document" template in Canva</li>
              <li>2. Use consistent fonts and colors</li>
              <li>3. Add icons for visual appeal</li>
              <li>4. Include checkbox symbols (☐)</li>
              <li>5. Add footer with your contact info</li>
              <li>6. Download as PDF</li>
            </ol>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Quick Win Ideas:</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <span className="text-green-400">Cheat Sheets:</span> "10 Psychological Triggers for Headlines"</li>
              <li>• <span className="text-green-400">Templates:</span> "Email Subject Line Swipe File"</li>
              <li>• <span className="text-green-400">Worksheets:</span> "Keyword Research Planning Sheet"</li>
              <li>• <span className="text-green-400">Mini-Guides:</span> "5-Step Content Optimization Process"</li>
            </ul>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h5 className="font-semibold text-white mb-2">Example: SEO Checklist Structure</h5>
            <div className="text-gray-300 text-sm space-y-1">
              <p><span className="text-green-400">Page 1:</span> Title + Introduction (why this matters)</p>
              <p><span className="text-green-400">Page 2-3:</span> 15-20 checkboxes with quick explanations</p>
              <p><span className="text-green-400">Page 4:</span> "Want more advanced strategies?" CTA to your main product</p>
              <p><span className="text-green-400">Footer:</span> Your name, website, contact info</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-green-400 mb-2">
          Complete Marketing Toolkit
        </h3>
        <p className="text-gray-300">
          Step-by-step guides to create professional marketing materials yourself
        </p>
      </div>

      <div className="grid gap-6">
        {guides.map((guide, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                {guide.icon}
                <div>
                  <h4 className="text-white text-lg">{guide.title}</h4>
                  <p className="text-gray-400 text-sm font-normal">{guide.description}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {guide.content}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8 p-6 bg-gray-800/50 rounded-lg border border-green-400/30">
        <h4 className="text-xl font-bold text-green-400 mb-2">
          Need Personal Guidance?
        </h4>
        <p className="text-gray-300 mb-4">
          These guides give you everything you need to create professional marketing materials. 
          Follow them step-by-step and you'll have a complete marketing arsenal.
        </p>
        <Button className="bg-green-600 hover:bg-green-500 text-white">
          <Mail className="w-4 h-4 mr-2" />
          Get Additional Support
        </Button>
      </div>
    </div>
  );
};

export default MarketingMaterials;

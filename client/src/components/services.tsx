import { TrendingUp, Megaphone, Search, Share2, Mail, BarChart3, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: TrendingUp,
    title: "Digital Strategy",
    description: "Comprehensive digital marketing strategies tailored to your business goals and target audience for maximum impact."
  },
  {
    icon: Megaphone,
    title: "Brand Development",
    description: "Build a powerful brand identity that resonates with your audience and differentiates you from competitors."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic with our proven SEO strategies and techniques."
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Engage your audience and build community through strategic social media management and content creation."
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and retain customers with personalized email campaigns that drive conversions and loyalty."
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Make data-driven decisions with comprehensive analytics and reporting that track your marketing performance."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Marketing Solutions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive marketing services designed to accelerate your business growth and maximize your return on investment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <CardContent className="p-8">
                <div className="bg-brand-blue rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                  <service.icon className="text-white text-xl w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-brand-blue font-semibold hover:text-brand-blue-dark transition-colors duration-200 flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

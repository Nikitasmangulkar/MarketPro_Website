import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Expert Team",
    description: "Certified marketing professionals with proven track records across industries."
  },
  {
    title: "Tailored Solutions",
    description: "Custom strategies designed specifically for your business goals and market."
  },
  {
    title: "Measurable Results",
    description: "Transparent reporting and clear ROI tracking for all marketing activities."
  },
  {
    title: "Ongoing Support",
    description: "Dedicated account management and continuous optimization of your campaigns."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Marketing strategy workspace" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Why Choose MarketPro?</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With over a decade of experience in digital marketing, we've helped hundreds of businesses transform their online presence and achieve sustainable growth. Our data-driven approach ensures every marketing dollar delivers maximum return.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-brand-blue rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h4>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-8 bg-brand-blue text-white hover:bg-brand-blue-dark px-8 py-4 font-semibold">
              Learn About Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

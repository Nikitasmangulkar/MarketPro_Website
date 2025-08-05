import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Business with{" "}
              <span className="text-brand-amber">Proven Marketing</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Drive growth, increase revenue, and build lasting customer relationships with our comprehensive marketing solutions designed for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-brand-amber text-slate-900 hover:bg-amber-400 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Start Your Growth Journey
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 text-lg font-semibold transition-all duration-200"
              >
                Watch Demo
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-amber">500+</div>
                <div className="text-blue-100">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-amber">150%</div>
                <div className="text-blue-100">Avg. ROI Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-amber">98%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional business team collaborating" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

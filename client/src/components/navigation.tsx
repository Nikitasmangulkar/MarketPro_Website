import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-brand-blue">MarketPro</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-brand-blue transition-colors duration-200 font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-brand-blue transition-colors duration-200 font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-brand-blue transition-colors duration-200 font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-slate-700 hover:text-brand-blue transition-colors duration-200 font-medium">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-brand-blue transition-colors duration-200 font-medium">
                Contact
              </button>
              <Button onClick={() => scrollToSection('contact')} className="bg-brand-blue text-white hover:bg-brand-blue-dark">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-500 hover:text-slate-700"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left px-3 py-2 text-slate-700 hover:text-brand-blue font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left px-3 py-2 text-slate-700 hover:text-brand-blue font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left px-3 py-2 text-slate-700 hover:text-brand-blue font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="block w-full text-left px-3 py-2 text-slate-700 hover:text-brand-blue font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left px-3 py-2 text-slate-700 hover:text-brand-blue font-medium"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="w-full mt-2 bg-brand-blue text-white hover:bg-brand-blue-dark">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

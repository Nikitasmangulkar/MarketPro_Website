import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-brand-amber">MarketPro</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Transforming businesses through innovative marketing strategies and data-driven growth solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-brand-amber transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-amber transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-amber transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-amber transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Digital Strategy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Brand Development</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">SEO Optimization</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Social Media</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Email Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Our Team</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Case Studies</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-brand-amber w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-300">123 Business Ave, Suite 100<br />San Francisco, CA 94105</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-brand-amber w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-slate-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-brand-amber w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-slate-300">hello@marketpro.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              © 2024 MarketPro. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

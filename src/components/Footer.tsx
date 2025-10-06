import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-medium text-lg">V</span>
              </div>
              <div>
                <h3 className="text-xl font-medium">Valeria Ursu-Carabet</h3>
                <p className="text-gray-300 text-sm">Senior Legal Analyst</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Specializing in anti-corruption law and compliance management with
              over 15 years of professional experience.
            </p>
          </div>

          {/* Contact Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:v@legalanalytics.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>v@legalanalytics.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
              <a
                href="https://linkedin.com/in/valeria"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Areas of Practice */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Areas of Practice</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Anti-Corruption Law</li>
              <li>Compliance Assessment</li>
              <li>Legal Research & Analysis</li>
              <li>Ethics Program Development</li>
              <li>International Regulatory Compliance</li>
              <li>Risk Management</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} Valeria Ursu-Carabet. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-300">
              <button className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="hover:text-white transition-colors">
                Professional Conduct
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

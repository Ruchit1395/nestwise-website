import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Shield, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary/10 text-neutral-800 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold">
              <img 
                src="/nestwise_logo_teal_cream_bg.png" 
                alt="NestWise LLC" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-2 text-sm font-semibold text-primary">
              Time is Money. We save you BOTH.
            </p>
            <p className="mt-4 text-gray-600 max-w-md">
              The REPS compliance tracking platform trusted by real estate investors like you.
            </p>
            <div className="mt-6 flex space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="w-4 h-4 mr-2" />
                Bank-Level Security
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                99.9% Uptime
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              {/* <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@nestwise.us" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  support@nestwise.us
                </a>
              </li>
              <li>
                <span className="text-gray-600">Response time: &lt; 4 hours</span>
              </li>

            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2025 NestWise LLC. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-600">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-primary">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
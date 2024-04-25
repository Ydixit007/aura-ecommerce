import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialIcons = [
    { icon: <FaFacebook />, href: 'https://www.facebook.com' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com' },
    { icon: <FaTwitter />, href: 'https://www.twitter.com' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com' },
  ];

  const companyLinks = ['About', 'Contact us', 'Support', 'Careers'];
  const quickLinks = ['Share Location', 'Orders Tracking', 'Size Guide', 'FAQs'];
  const legalLinks = ['Terms & Conditions', 'Privacy Policy'];

  return (
    <footer className="bg-neutral container-custom py-28 px-4 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className='col-span-2'>
          <h2 className="text-2xl font-bold">Aura</h2>
          <p className="mb-4 py-4 text-xs text-gray-400">Complete your style with awesome clothes from us.</p>
          <div className="flex space-x-4">
            {socialIcons.map((icon, index) => (
              <Link className='p-2 bg-secondary rounded-lg' key={index} to={icon.href} target="_blank" rel="noopener noreferrer">
                <span className="text-neutral">{icon.icon}</span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Company</h3>
          <ul>
            {companyLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <Link to="#" className="hover:text-secondary transition-colors text-gray-500">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Link</h3>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <Link to="#" className="hover:text-secondary transition-colors text-gray-500">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Legal</h3>
          <ul>
            {legalLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <Link to="#" className="hover:text-secondary transition-colors text-gray-500">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
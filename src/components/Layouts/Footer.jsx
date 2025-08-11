import React from "react";
import { Link } from "react-router";
import footerBg from "../../assets/footer-bg.png";
import footerLogo from "../../assets/footerLogo.png"; // Assuming you have a logo image

const Footer = () => {
  // Links data structure
  const footerData = {
    menu: {
      title: "Menu",
      links: [
        { name: "Coffee", path: "/coffee" },
        { name: "Espresso", path: "/espresso" },
        { name: "Latte", path: "/latte" },
        { name: "Cappuccino", path: "/cappuccino" },
        { name: "Cold Brew", path: "/cold-brew" },
      ],
    },
    about: {
      title: "About",
      links: [
        { name: "Our Story", path: "/our-story" },
        { name: "Locations", path: "/locations" },
        { name: "Careers", path: "/careers" },
        { name: "Press", path: "/press" },
        { name: "Blog", path: "/blog" },
      ],
    },
    support: {
      title: "Support",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "FAQ", path: "/faq" },
        { name: "Help Center", path: "/help" },
        { name: "Returns", path: "/returns" },
        { name: "Shipping", path: "/shipping" },
      ],
    },
  };

  const socialLinks = [
    {
      name: "Facebook",
      path: "https://facebook.com",
      icon: "M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z",
    },
    {
      name: "Twitter",
      path: "https://twitter.com",
      icon: "M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84",
    },
    {
      name: "Instagram",
      path: "https://instagram.com",
      icon: "M12.017 0C18.396 0 20.396 1.104 20.396 6.297v7.406c0 5.193-2 6.297-8.379 6.297H7.583c-6.379 0-8.379-1.104-8.379-6.297V6.297C-0.796 1.104 1.204 0 7.583 0h4.434zM10 5.297A4.703 4.703 0 105.297 10 4.703 4.703 0 0010 5.297zm0 2A2.703 2.703 0 107.297 10 2.703 2.703 0 0010 7.297zM15.75 5.09a1.13 1.13 0 11-2.26 0 1.13 1.13 0 012.26 0z",
    },
  ];

  const bottomLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
  ];

  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat rounded-lg mb-4"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 rounded-lg"></div>

      {/* Footer content */}
      <div className="relative z-10 text-white p-10">
        {/* Top row with 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* First column - Logo, description, social icons */}
          <div className="col-span-1">
            <div className="mb-4">
              <Link
                to="/"
                className="text-2xl font-bold mb-3 block hover:text-gray-300 transition-colors"
              >
                <img
                  src={footerLogo}
                  alt="CoffeeShop Logo"
                  className="h-[60px]"
                />
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed text-left">
                Premium coffee experience with the finest beans from around the
                world. Crafted with passion, served with love.
              </p>
            </div>
            {/* Social icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d={social.icon}
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Menu Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {footerData.menu.title}
            </h3>
            <ul className="space-y-2">
              {footerData.menu.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {footerData.about.title}
            </h3>
            <ul className="space-y-2">
              {footerData.about.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {footerData.support.title}
            </h3>
            <ul className="space-y-2">
              {footerData.support.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row with border top */}
        <div className="border-t border-gray-600 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright text on left */}
            <p className="text-gray-400 text-sm">
              © 2025 CoffeeShop. All rights reserved.
            </p>

            {/* Links on right */}
            <div className="flex space-x-6">
              {bottomLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

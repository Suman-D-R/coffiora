import {
  IconCoffee,
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className='bg-[#1A1A1A] dark:bg-[#0A0A0A] text-white'>
      <div className='max-w-7xl mx-auto px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <IconCoffee size={24} className='text-[#C97A1D]' />
              <span className='text-xl font-bold'>Coffiora</span>
            </div>
            <p className='text-gray-300 text-sm leading-relaxed'>
              Handcrafted premium coffee from the heart of Coorg. Experience the
              perfect brew with our carefully sourced and roasted beans.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-[#C97A1D] transition-colors'
              >
                <IconBrandFacebook size={20} />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-[#C97A1D] transition-colors'
              >
                <IconBrandInstagram size={20} />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-[#C97A1D] transition-colors'
              >
                <IconBrandTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-[#C97A1D]'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors text-sm'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors text-sm'
                >
                  Our Coffee
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors text-sm'
                >
                  Brewing Guide
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors text-sm'
                >
                  Coffee Blog
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors text-sm'
                >
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-[#C97A1D]'>Products</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors text-sm'
                >
                  Filter Coffee
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors text-sm'
                >
                  Espresso Blends
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors text-sm'
                >
                  Single Origin
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors text-sm'
                >
                  Coffee Accessories
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors text-sm'
                >
                  Gift Sets
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-[#C97A1D]'>Contact Us</h3>
            <div className='space-y-3'>
              <div className='flex items-center gap-3'>
                <IconMapPin size={16} className='text-[#C97A1D]' />
                <span className='text-gray-300 text-sm'>
                  Coorg, Karnataka, India
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <IconPhone size={16} className='text-[#C97A1D]' />
                <span className='text-gray-300 text-sm'>+91 98765 43210</span>
              </div>
              <div className='flex items-center gap-3'>
                <IconMail size={16} className='text-[#C97A1D]' />
                <span className='text-gray-300 text-sm'>
                  hello@coffiora.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-700 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-400 text-sm'>
              © 2024 Coffiora. All rights reserved.
            </p>
            <div className='flex space-x-6'>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors text-sm'
              >
                Privacy Policy
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors text-sm'
              >
                Terms of Service
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors text-sm'
              >
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

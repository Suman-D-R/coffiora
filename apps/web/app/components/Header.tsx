'use client';

import { IconCoffee, IconTruck, IconMenu2, IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'Menu',
    href: '#',
  },
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='flex z-50 items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-b border-black/5 dark:border-white/10'>
      <div className='flex items-center gap-2'>
        <IconCoffee size={24} className='sm:w-7 sm:h-7' />
        <span className='font-bold text-lg sm:text-xl tracking-tight font-sans'>
          COFFIORA
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex gap-8 text-base font-medium text-secondary'>
        {links.map((link) => (
          <Link href={link.href} key={link.label}>
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className='md:hidden p-2 text-secondary'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
      </button>

      {/* Desktop Order Button */}
      <button className='hidden sm:flex items-center gap-2 bg-[#C97A1D] text-white font-semibold px-4 sm:px-5 py-2 rounded-full shadow hover:bg-[#a05e16] transition text-sm sm:text-base'>
        <IconTruck size={18} className='sm:w-5 sm:h-5' /> Order Now
      </button>

      {/* Mobile Order Button */}
      <button className='sm:hidden flex items-center gap-1 bg-[#C97A1D] text-white font-semibold px-3 py-2 rounded-full shadow hover:bg-[#a05e16] transition text-sm'>
        <IconTruck size={16} /> Order
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='absolute top-full left-0 right-0 bg-white dark:bg-[#232323] border-b border-black/5 dark:border-white/10 md:hidden'>
          <nav className='flex flex-col px-4 py-4'>
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className='py-3 text-base font-medium text-secondary border-b border-black/5 dark:border-white/10 last:border-b-0'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

import * as React from 'react';
import Image from 'next/image';
import Logo from '@/images/logo.svg';
import Link from './Link';
export default function Navbar() {
  return (
    <header className=" md:px-0 px-5 h-[7.5rem] flex items-center sticky top-0 z-10">
      <nav className="w-full max-w-[75rem] mx-auto flex justify-between items-center">
        <div className="md:w-[9.875rem] w-[6rem]">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="flex gap-10 text-white/[.70] text-lg">
          <Link className="active hover:text-white" href="#service">
            Services
          </Link>
          <Link className="hover:text-white" href="#portofolio">
            Portofolio
          </Link>
          <Link className="hover:text-white" href="#contact">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

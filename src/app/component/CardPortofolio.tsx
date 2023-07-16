import * as React from 'react';
import Image from 'next/image';
import Dummy2 from '@/images/dummy2.jpeg';
export default function CardPortofolio() {
  return (
    <div className="flex flex-col hover:scale-[1.02] transition-all duration-200">
      <div className=" relative w-full aspect-[4/3] overflow-hidden rounded-t-xl">
        <Image src={Dummy2} alt="Dummy 2" fill style={{ objectFit: 'cover' }} />
      </div>
      <div className=" bg-third/30 backdrop-blur p-5 rounded-b-xl">
        <h3 className="mb-2 font-medium text-xl">VPN Mobile App</h3>
        <p className="text-lg text-secondary">Mobile app</p>
      </div>
    </div>
  );
}

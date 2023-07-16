import * as React from 'react';
import Image from 'next/image';
import Dummy1 from '@/images/dummy1.jpeg';
export default function CardService() {
  return (
    <div className="md:min-w-[40rem] w-full bg-secondary/80 p-8 border border-white/[12%] rounded-[6px] backdrop-blur flex flex-row items-center justify-between">
      <div className=" flex flex-row gap-8 items-center">
        <div className="relative w-[6.25rem] h-[6.25rem] rounded-[6px] overflow-hidden">
          <Image
            src={Dummy1}
            fill
            style={{ objectFit: 'contain' }}
            alt="Dummy 1"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Website Design</h3>
          <p className="text-xl text-secondary">80+ Project</p>
        </div>
      </div>
      <div>
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.4541 10.8716L37.5824 22L26.4541 33.1283"
            stroke="#F8E7A1"
            stroke-width="2.75"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.41699 22H37.272"
            stroke="#F8E7A1"
            stroke-width="2.75"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

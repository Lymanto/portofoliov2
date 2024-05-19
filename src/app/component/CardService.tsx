import * as React from 'react';
import Image from 'next/image';

type Category = {
  id: string;
  name: string;
  image: string;
  _count: Portofolios;
};
type Portofolios = {
  portofolios: number;
};

async function getCategory() {
  const res = await fetch('http://lymanto.vercel.app/api/category');
  const categories = await res.json();
  return categories;
}

export default async function CardService() {
  const categories = await getCategory();
  return (
    <>
      {categories.map((category: Category) => (
        <div
          className="md:min-w-[40rem] w-full bg-secondary/80 p-8 border border-white/[12%] rounded-[6px] backdrop-blur flex flex-row items-center justify-between"
          key={category.id}
        >
          <div className=" flex flex-row gap-8 items-center">
            <div className="relative w-[6.25rem] h-[6.25rem] rounded-[6px] overflow-hidden">
              <Image
                src={category.image}
                fill
                style={{ objectFit: 'cover' }}
                alt="Dummy 1"
              />
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
            </div>
          </div>
          {/* <div>
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
                strokeWidth="2.75"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.41699 22H37.272"
                stroke="#F8E7A1"
                strokeWidth="2.75"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div> */}
        </div>
      ))}
    </>
  );
}

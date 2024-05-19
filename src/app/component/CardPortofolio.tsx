import * as React from 'react';
import Image from 'next/image';
import Link from './Link';
type PortofolioType = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
};
async function getPortfolio() {
  const portofolio: PortofolioType[] = await fetch(
    'https://lymanto.vercel.app/api/portfolio',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json());
  return portofolio;
}

export default async function CardPortofolio() {
  const portfolios = await getPortfolio();
  return (
    <>
      {portfolios.map((portfolio: PortofolioType) => (
        <Link
          openInNewTab
          href={portfolio.slug}
          className="flex flex-col hover:scale-[1.02] transition-all duration-200"
          key={portfolio.id}
        >
          <div className=" relative w-full aspect-[4/3] overflow-hidden rounded-t-xl">
            <Image
              sizes="(max-width: 768px) 100vw, 33vw"
              src={portfolio.image}
              alt="Dummy 2"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className=" bg-third/30 backdrop-blur p-5 rounded-b-xl">
            <h3 className="mb-2 font-medium text-xl">{portfolio.name}</h3>
            <p className="text-lg text-secondary">{portfolio.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

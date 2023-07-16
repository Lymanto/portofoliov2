import * as React from 'react';
import Navbar from './component/navbar';
import Decoration1 from '@/images/decoration1.svg';
import Decoration2 from '@/images/decoration2.svg';
import Decoration3 from '@/images/decoration3.svg';
import TypewriterComponent from './component/typewriter';
import Image from 'next/image';
import CardService from './component/CardService';
import CardPortofolio from './component/CardPortofolio';
import Footer from './component/footer';
export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className=" relative overflow-hidden" id="home">
        <Navbar />
        <Image
          className="absolute -top-[5.625rem] -right-[6rem] z-0"
          src={Decoration1}
          alt="Decoration 1"
        />
        <div className="md:px-0 px-5 -mt-[2rem] md:mt-0 w-full min-h-main mx-auto md:max-w-[1200px] flex flex-row items-center justify-center md:justify-between ">
          <div>
            <h2 className="text-[2rem] text-secondary font-semibold mb-3">
              <TypewriterComponent />
            </h2>
            <h1 className="transition-all animate-text text-[3rem] font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#fee140] via-[#00e887] to-[#eb9db5]">
              Lymanto Hadibrata
            </h1>
            <div className="w-[11.25rem] h-[0.5rem] bg-divider mb-10"></div>
            <p className="text-xl leading-9 text-secondary font-normal  max-w-[34rem]">
              Through constant practice & learning, I produce aesthetic software
              to an extremely high standard.
            </p>
            <div className="flex flex-row gap-8 mt-3">
              <a
                className="flex items-center text-gray-300 hover:text-white font-medium text-base mb-[3.75rem]"
                href="/#contact"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="shrink-0  mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="96"
                    height="96"
                    x="96"
                    y="112"
                    fill="none"
                    rx="16"
                    ry="16"
                  ></rect>
                  <path d="M468 112h-52v304a32 32 0 0032 32 32 32 0 0032-32V124a12 12 0 00-12-12z"></path>
                  <path d="M431.15 477.75A64.11 64.11 0 01384 416V44a12 12 0 00-12-12H44a12 12 0 00-12 12v380a56 56 0 0056 56h342.85a1.14 1.14 0 00.3-2.25zM96 208v-96h96v96zm224 192H96v-32h224zm0-64H96v-32h224zm0-64H96v-32h224zm0-64h-96v-32h96zm0-64h-96v-32h96z"></path>
                </svg>
                Resume
              </a>
              <a
                className="flex items-center text-gray-300 hover:text-white text-base font-medium  mb-[3.75rem]"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Lymanto"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  className="shrink-0 mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
                Lymanto
              </a>
              <a
                className="flex items-center text-gray-300 hover:text-white text-base font-medium  mb-[3.75rem]"
                target="_blank"
                rel="noopener noreferrer"
                href="https://dribbble.com/Lymanto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  width="1em"
                  stroke="currentColor"
                  strokeWidth="0"
                  fill="currentColor"
                  className="shrink-0 mr-2"
                  viewBox="0 0 32 32"
                >
                  <rect width="32" height="32" fill="black" fill-opacity="0" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 0C7.16703 0 0 7.16703 0 16C0 24.833 7.16703 32 16 32C24.8156 32 32 24.833 32 16C32 7.16703 24.8156 0 16 0ZM26.5683 7.37527C28.4772 9.70065 29.6226 12.6681 29.6573 15.8785C29.2061 15.7918 24.6941 14.872 20.1475 15.4447C20.0434 15.2191 19.9566 14.9761 19.8525 14.7332C19.5748 14.0738 19.2625 13.397 18.9501 12.7549C23.9826 10.7072 26.2733 7.75705 26.5683 7.37527ZM16 2.36009C19.4707 2.36009 22.6464 3.66161 25.0586 5.7961C24.8156 6.14317 22.7505 8.90239 17.8915 10.7245C15.6529 6.61171 13.1714 3.24512 12.7896 2.72451C13.8134 2.48156 14.8894 2.36009 16 2.36009ZM10.1866 3.64425C10.551 4.13015 12.9805 7.5141 15.2538 11.5401C8.86768 13.2408 3.22777 13.2061 2.62039 13.2061C3.50542 8.9718 6.36876 5.44902 10.1866 3.64425ZM2.32538 16.0174C2.32538 15.8785 2.32538 15.7397 2.32538 15.6009C2.9154 15.6182 9.54447 15.705 16.3644 13.6573C16.7636 14.4208 17.128 15.2017 17.4751 15.9826C17.3015 16.0347 17.1106 16.0868 16.9371 16.1388C9.89154 18.4121 6.14317 24.6247 5.8308 25.1453C3.6616 22.7332 2.32538 19.5228 2.32538 16.0174ZM16 29.6746C12.8416 29.6746 9.92625 28.5987 7.61822 26.7939C7.86117 26.2907 10.6377 20.9458 18.3427 18.256C18.3774 18.2386 18.3948 18.2386 18.4295 18.2213C20.3557 23.2017 21.1367 27.3839 21.3449 28.5813C19.6963 29.2928 17.8915 29.6746 16 29.6746ZM23.6182 27.3319C23.4794 26.4989 22.7505 22.5076 20.9631 17.5965C25.2495 16.9197 28.9978 18.0304 29.4664 18.1866C28.8764 21.987 26.6898 25.2668 23.6182 27.3319Z"
                  />
                </svg>
                Lymanto
              </a>
            </div>
            <div className="flex flex-row gap-10">
              <a
                className="inline-block text-primary font-medium text-xl"
                href="/#contact"
              >
                Hire Me
                <svg
                  width="24"
                  height="24"
                  className="inline-block ml-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4302 5.92993L20.5002 11.9999L14.4302 18.0699"
                    stroke="#F8E7A1"
                    strokeWidth="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 12H20.33"
                    stroke="#F8E7A1"
                    strokeWidth="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[5.75rem] text-right md:text-[100%] text-[82%]">
            <div>
              <p className="font-medium text-secondary text-[1.5em]">
                Years of Experience
              </p>
              <p className="text-[3em]">3+</p>
            </div>
            <div>
              <p className="font-medium text-secondary text-[1.5em]">
                Complete Project
              </p>
              <p className="text-[3em]">220+</p>
            </div>
            <div>
              <p className="font-medium text-secondary text-[1.5em]">Client</p>
              <p className="text-[3em]">60+</p>
            </div>
          </div>
        </div>
        <a
          className="absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-10 cursor-pointer rounded-md  transition-colors hover:text-primary focus-visible:text-primary"
          href="#service"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="h-8 w-8 animate-bounce md:h-10 md:w-10"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="48"
              d="M112 268l144 144 144-144M256 392V100"
            ></path>
          </svg>
        </a>
      </section>
      <section id="service" className="relative">
        <Image
          src={Decoration2}
          className="absolute -top-[28rem] -z-[1] -left-[5.5rem]"
          alt="Decoration 2"
        />
        <div className="w-full mx-auto md:max-w-[1200px] py-[7rem] md:px-0 px-5 flex flex-col md:flex-row justify-between">
          <div className="mt-[2rem]">
            <h2 className="font-semibold text-6xl mb-6 leading-[5.75rem]">
              My Awesome Service
            </h2>
            <p className="text-xl text-secondary leading-9 max-w-[25rem]">
              Eget malesuada tortor ut sed. Tincidunt viverra malesuada nisl
              vehicula vestibulum. Ut blandit fermentum, cursus nulla. Imperdiet
              neque mi convallis quis interdum sagittis.
            </p>
          </div>
          <div className="flex flex-col gap-[1.75rem]">
            <CardService />
            <CardService />
            <CardService />
          </div>
        </div>
      </section>
      <section id="portofolio" className="relative ">
        <Image
          src={Decoration3}
          className="absolute -top-[28rem] -z-[1] md:-right-[5.5rem] -right-[1rem]"
          alt="Decoration 2"
        />
        <div className="w-full mx-auto md:max-w-[1200px] mb-[7rem] p-10 bg-secondary/60 rounded-[6px] backdrop-blur-sm flex flex-col">
          <div className="w-full flex justify-between items-center mb-8">
            <h2 className="text-4xl font-semibold">My Portofolio</h2>
            <a
              className="inline-block text-primary font-medium text-lg"
              href="#"
            >
              See All
              <svg
                width="24"
                height="24"
                className="inline-block ml-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4302 5.92993L20.5002 11.9999L14.4302 18.0699"
                  stroke="#F8E7A1"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 12H20.33"
                  stroke="#F8E7A1"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <CardPortofolio />
            <CardPortofolio />
            <CardPortofolio />
            <CardPortofolio />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

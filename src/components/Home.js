import React from 'react'

export default function Home() {
  return (
   
    <section
    className="flex flex-col-reverse py-15 md:grid md:gap-10 gap-10 md:grid-cols-2 
  md:place-items-center max-w-4xl lg:max-4xl lg:max-w-5xl 
  md:mx-auto "
  >
    <article className="text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0">
      <h1
        className="text-[#333] font-bold 
      text-3xl lg:text-6xl mb-5"
      >
        Make remote work
      </h1>

      <p className="mb-5">
        Get your team in sync, no matter your location. Streamline
        processes, create team rituals, and watch productivity soar.
      </p>
      <button
        className="bg-[#333] rounded-full shadow-sm text-white font-bold 
      hover:bg-[#726DEE] transition-all duration-100 pt-2 pb-2 px-6
      cursor-pointer"
      >
        Learn more
      </button>

      <ul className="grid grid-cols-4 gap-1 md:place-items-start mt-10 place-items-center">
        <li>
          <img src="./databiz.svg" className="w-17 pr-2" alt="" />
        </li>
        <li>
          <img src="./audiophile.svg" className="w-17" alt="" />
        </li>
        <li>
          <img src="./meet.svg" className="w-17" alt="" />
        </li>
        <li>
          <img src="./maker.svg" className="w-17" alt="" />
        </li>
      </ul>
    </article>

    <article>
      <picture>
        <source media="(min-width: 768px)" srcSet="./desktop.png" />
        <img src="./mobile.png" alt="" className="w-full" />
      </picture>
    </article>
  </section>
  )
}

'use client'
import Image from 'next/image'
import { redsearch } from '../../../public/icons'
import { useEffect, useState } from 'react'

const KanalMenu = () => {
  const [scrolled, setScrolled] = useState(false)
  const [inputSearch, setinputSearch] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrolled(scrollTop > 200)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`${
        scrolled && 'fixed top-0'
      } z-30 h-[62px] w-full bg-blue-primary`}
    >
      <div className="flex flex-row justify-between items-center max-w-6xl mx-auto h-full">
        <ul className="flex flex-row items-center gap-x-[25px] font-medium h-full text-white">
          <li className="text-[#ED1C24] uppercase h-full border-b-2 border-b-[#ED1C24] pt-5">
            Beranda
          </li>
          <li className="uppercase">Bola</li>
          <li className="uppercase">Balap</li>
          <li className="uppercase">Ragam</li>
          <li className="uppercase">Sportaiment</li>
          <li className="uppercase">Hobi</li>
          <li className="uppercase">Data Statistik</li>
          <li className="uppercase">Multimedia</li>
          <li className="uppercase">Index</li>
        </ul>
        <div className="flex flex-row justify-end group relative w-[30px] h-[30px] hover:w-52">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Cari Berita"
            value={inputSearch}
            onChange={(e) => setinputSearch(e.target.value)}
            className="text-black duration-1000 placeholder:text-red-primary outline-none float-right group-hover:pr-10 group-hover:pl-2 px-0 border-2 border-red-primary rounded-md ease-in-out w-0 group-hover:w-full focus:flex"
          />
          <Image
            src={redsearch}
            alt="search icon"
            width={30}
            height={30}
            className="cursor-pointer absolute top-0 right-0"
          />
        </div>
      </div>
    </nav>
  )
}

export default KanalMenu

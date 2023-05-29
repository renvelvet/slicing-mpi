'use client'
import Image from 'next/image'
import { redsearch } from '../../../public/icons'
import { useEffect, useState } from 'react'

const KanalMenu = () => {
  const [scrolled, setScrolled] = useState(false)

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
        <div>
          <Image src={redsearch} alt="search icon" width={30} height={30} />
        </div>
      </div>
    </nav>
  )
}

export default KanalMenu

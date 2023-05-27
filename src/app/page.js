import Image from 'next/image'
import { header, logo } from '../../public/images'
import { redsearch } from '../../public/icons'
import Schedule from './components/Schedule'
import Headline from './components/Headline'
import UnknownSection from './components/UnknownSection'
import News from './components/News'
import Footer from './components/Footer'
import SideContent from './components/SideContent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-10">
      {/* Header 2 */}
      <div className="flex max-w-6xl mx-auto flex-row items-center justify-between w-full py-5 mt-[3px]">
        <Image src={logo} alt="header image" width={331} height={50} />
        <Image src={header} alt="header image" width={728} height={90} />
      </div>

      {/* Menu Kanal 3 */}
      <nav className="h-[62px] w-full bg-blue-primary">
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
          <Image src={redsearch} alt="search icon" width={30} height={30} />
        </div>
      </nav>

      <Schedule />
      <Headline />
      <div className="pt-[35px] pb-[25px]">
        <section className="grid grid-cols-3 mx-auto max-w-6xl gap-x-[27px]">
          <div className="col-span-2">
            <UnknownSection />
            <News />
          </div>
          <div>
            <SideContent />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

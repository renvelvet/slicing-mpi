import Image from 'next/image'
import { logo2 } from '../../../public/images'
import {
  facebook42,
  instagram42,
  tiktok42,
  twitter42,
  youtube42,
} from '../../../public/icons'

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-row justify-between bg-blue-primary pb-10 pl-[51px] pr-[140px]">
        <div className="flex flex-col mt-[60px] w-1/2">
          <Image src={logo2} alt="logo" width={364} height={55} />
          <h3 className="text-xl leading-8 text-[#CCCCCC] mt-[49px]">
            Conect with us:
          </h3>
          <div className="mt-5 flex flex-row items-center gap-x-5">
            <Image
              src={facebook42}
              alt="facebook icon"
              width={42}
              height={42}
            />
            <Image src={twitter42} alt="twitter icon" width={42} height={42} />
            <Image
              src={instagram42}
              alt="instagram icon"
              width={42}
              height={42}
            />
            <Image src={youtube42} alt="youtube icon" width={42} height={42} />
            <Image src={tiktok42} alt="tiktok icon" width={42} height={42} />
          </div>
        </div>
        <div className="flex flex-row justify-around w-1/2">
          <div className="flex flex-col gap-y-[15px] items-start justify-start mt-[72px] ">
            <h2 className="font-bold text-xl leading-[23px] text-white">
              ABOUT US
            </h2>
            <h3 className="text-[#CCCCCC] text-xl leading-8">Tentang Kami</h3>
            <h3 className="text-[#CCCCCC] text-xl leading-8">Disclaimer</h3>
            <h3 className="text-[#CCCCCC] text-xl leading-8">Kode Etik</h3>
            <h3 className="text-[#CCCCCC] text-xl leading-8">
              Term of Service
            </h3>
            <h3 className="text-[#CCCCCC] text-xl leading-8">Privacy Policy</h3>
            <h3 className="text-[#CCCCCC] text-xl leading-8">Kontak Kami</h3>
          </div>
          <div className="flex flex-col gap-y-[15px] items-start justify-start mt-[72px] ">
            <h2 className="font-bold text-xl leading-[23px] text-white">
              KANAL UTAMA
            </h2>
            <h3 className="text-[#CCCCCC] text-xl leading-8">Beranda</h3>
            <h3 className="text-[#CCCCCC] text-xl leading-8">Bola</h3>
            <h3 className="text-[#CCCCCC] text-xl leading-8">Balap</h3>
            <h3 className="text-[#CCCCCC] text-xl leading-8">Ragam</h3>
            <h3 className="text-[#CCCCCC] text-xl leading-8">Sportainment</h3>
            <h3 className="text-[#CCCCCC] text-xl leading-8">Hobi</h3>
          </div>
          <div className="flex flex-col gap-y-[15px] items-start justify-start mt-[110px] ">
            <h3 className="text-[#CCCCCC] text-xl leading-8">Data Statistik</h3>
            <h3 className="text-[#CCCCCC] text-xl leading-8">Multimedia </h3>
            <h3 className="text-[#CCCCCC] text-xl leading-8">Index</h3>
          </div>
        </div>
      </div>
      <div className="bg-blue-headline py-5">
        <h3 className="text-xl leading-8 text-[#CCCCCC] text-center">
          &#169; Copyrights 2021. Sportstars.id All rights reserved
        </h3>
      </div>
    </footer>
  )
}

export default Footer

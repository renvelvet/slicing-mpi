import {
  cameraIcon,
  iconVideo,
  picHeadline00,
  picHeadline02,
  picHeadline12,
  picHeadline20,
  picHeadline21,
  picHeadline22,
} from '../../../public/icons'
import Image from 'next/image'

const Headline = () => {
  return (
    <section className="bg-[#070D59] pt-[35px] pb-[25px] z-20">
      <div className="grid grid-cols-3 gap-[6px] mx-auto max-w-6xl">
        <div className="col-span-2 row-span-2 relative">
          <Image
            src={iconVideo}
            alt="icon video"
            width={60}
            height={60}
            className="absolute top-[21px] left-[23px]"
          />
          <Image
            src={picHeadline00}
            alt="main headline"
            width={758}
            height={538}
          />
          <div className="flex flex-col absolute left-[30px] right-[30px] bottom-[30px] z-20 gap-y-[15px]">
            <div className="flex flex-row items-center justify-start w-full gap-x-5">
              <div className="uppercase text-[15px] leading-[18px] text-white bg-[#ED1C24] py-[5px] px-[10px]">
                bola
              </div>
              <h3 className="text-white text-sm leading-[14px]">
                Rabu, 30 Maret 2020
              </h3>
            </div>
            <h1 className="font-bold text-[30px] leading-[35px] text-white">
              Gara-Gara Santiago Bernabeu, EL Real Batal Datangkan Cristiano
              Ronaldo?
            </h1>
            <h2 className="font-medium leading-[19px] text-white">
              SPANYOL - Presiden Real Madrid, Ramon Calderon, agak ragu mantan
              timnya belanja jorjoran pada bursa transfer musim panas 2021
            </h2>
          </div>
          <div className="z-10 w-[758px] h-[538px] inset-0 absolute bg-gradient-to-b from-transparent via-blue-headline/[.15] to-blue-headline">
            &nbsp;
          </div>
        </div>
        <div className="w-[375px] relative">
          <Image
            src={picHeadline02}
            alt="headline 1"
            width={375}
            height={265}
          />
          <div className="flex flex-col absolute left-[15px] right-[15px] bottom-0 z-20 gap-y-[10px]">
            <div className="flex flex-row items-center justify-start w-full gap-x-[15px]">
              <div className="uppercase text-[15px] leading-[18px] text-white bg-[#ED1C24] py-[5px] px-[10px]">
                bola
              </div>
              <h3 className="text-white text-xs leading-[14px]">
                Rabu, 30 Maret 2020
              </h3>
            </div>
            <h2 className="font-medium leading-4 text-sm  text-[#ED2224]">
              Persib Vs Persiraja
            </h2>
            <h1 className="font-bold text-[20px] leading-[23px] text-white h-[62px]">
              Pangeran Biru Ingin Terus Ikuti Piala Menpora
            </h1>
          </div>
          <div className="z-10 w-[375px] h-[265px] inset-0 absolute bg-gradient-to-b from-transparent via-blue-headline/[.15] to-blue-headline">
            &nbsp;
          </div>
        </div>
        <div className="w-[375px] relative">
          <Image
            src={picHeadline12}
            alt="headline 2"
            width={375}
            height={265}
          />
          <div className="flex flex-col absolute left-[15px] bottom-[22px] right-[15px] z-20 gap-y-[10px]">
            <div className="flex flex-row items-center justify-start w-full gap-x-[15px]">
              <div className="uppercase text-[15px] leading-[18px] text-white bg-[#ED1C24] py-[5px] px-[10px]">
                SPORTAINMENT
              </div>
              <h3 className="text-white text-xs leading-[14px]">
                Rabu, 30 Maret 2020
              </h3>
            </div>
            <h1 className="font-bold text-[20px] leading-[23px] text-white">
              Bambang Pamungkas, Legenda Sepanjang Masa Persija dan Timnas
              Indonesia
            </h1>
          </div>
          <div className="z-10 w-[375px] h-[265px] inset-0 absolute bg-gradient-to-b from-transparent via-blue-headline/[.15] to-blue-headline">
            &nbsp;
          </div>
        </div>
        <div className="w-[375px] relative">
          <Image
            src={cameraIcon}
            alt="icon video"
            width={42}
            height={42}
            className="absolute top-[14px] left-[15px]"
          />
          <Image
            src={picHeadline20}
            alt="headline 3"
            width={375}
            height={265}
          />
          <div className="flex flex-col absolute left-[15px] bottom-6 right-[15px] z-20 gap-y-[10px]">
            <div className="flex flex-row items-center justify-start w-full gap-x-[15px]">
              <div className="uppercase text-[15px] leading-[18px] text-white bg-[#ED1C24] py-[5px] px-[10px]">
                photo
              </div>
              <h3 className="text-white text-xs leading-[14px]">
                Rabu, 30 Maret 2020
              </h3>
            </div>
            <h1 className="font-bold text-[20px] leading-[23px] text-white">
              Ketenaran Pevoli Cantik Sabina Altynbekova Sempat Bikin Khawatir
            </h1>
          </div>
          <div className="z-10 w-[375px] h-[265px] inset-0 absolute bg-gradient-to-b from-transparent via-blue-headline/[.15] to-blue-headline">
            &nbsp;
          </div>
        </div>
        <div className="w-[375px] relative">
          <Image
            src={picHeadline21}
            alt="headline 4"
            width={375}
            height={265}
          />
          <div className="flex flex-col absolute left-[15px] bottom-[15px] right-[15px] z-20 gap-y-[10px]">
            <div className="flex flex-row items-center justify-start w-full gap-x-[15px]">
              <div className="uppercase text-[15px] leading-[18px] text-white bg-[#ED1C24] py-[5px] px-[10px]">
                balap
              </div>
              <h3 className="text-white text-xs leading-[14px]">
                Rabu, 30 Maret 2020
              </h3>
            </div>
            <h1 className="font-bold text-[20px] leading-[23px] text-white">
              Jelang Seri Kedua MotoGP 2021: Rossi dan Morbidelli Sibuk
            </h1>
          </div>
          <div className="z-10 w-[375px] h-[265px] inset-0 absolute bg-gradient-to-b from-transparent via-blue-headline/[.15] to-blue-headline">
            &nbsp;
          </div>
        </div>
        <div className="w-[375px] relative">
          <Image
            src={picHeadline22}
            alt="headline 5"
            width={375}
            height={265}
          />
          <div className="flex flex-col absolute left-[15px] bottom-5 right-[15px] z-20 gap-y-[10px]">
            <div className="flex flex-row items-center justify-start w-full gap-x-[15px]">
              <div className="uppercase text-[15px] leading-[18px] text-white bg-[#ED1C24] py-[5px] px-[10px]">
                video
              </div>
              <h3 className="text-white text-xs leading-[14px]">
                Rabu, 30 Maret 2020
              </h3>
            </div>
            <h1 className="font-bold text-[20px] leading-[23px] text-white">
              Phoenix Suns Pecundangi Hornets
            </h1>
          </div>
          <div className="z-10 w-[375px] h-[265px] inset-0 absolute bg-gradient-to-b from-transparent via-blue-headline/[.15] to-blue-headline">
            &nbsp;
          </div>
        </div>
      </div>
    </section>
  )
}

export default Headline

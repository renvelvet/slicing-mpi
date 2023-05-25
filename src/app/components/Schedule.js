import Image from 'next/image'
import {
  belgia,
  eng,
  forward,
  france,
  ger,
  gre,
  ita,
  lforward,
  ned,
  nor,
  por,
  rforward,
  spa,
} from '../../../public/icons'

function Schedule() {
  return (
    <section className="bg-[#F9F9F9] h-[166px] w-full">
      <div className="max-w-6xl mx-auto flex flex-row items-center pt-[18px] pb-5">
        <div className="flex justify-start flex-col gap-y-[11px] text-black-secondary">
          <h2 className="uppercase font-bold text-xl leading-6 w-[79px] h-[46px]">
            jadwal & hasil
          </h2>
          <div className="flex flex-row items-center pl-1 gap-x-[7px] w-full">
            <h3 className="capitalize text-xs leading-[14px]">
              jadwal terbaru
            </h3>
            <Image src={forward} alt="forward icon" width={9} height={6} />
          </div>
        </div>

        {/* BEL & FRA */}
        <div className="ml-[15px] h-[127px] border-r border-r-[#C4C4C4] pr-[21px]">
          <h3 className="font-medium text-xs leading-[14px] text-black w-[151px]">
            Liga Inggris Premier League
          </h3>
          <h3 className="font-medium text-xs leading-[14px] text-[#ED1C24] mt-1">
            Rabu, 31 Maret 2021
          </h3>
          <div className="flex flex-row items-center justify-between mt-[7px] pr-2 w-full">
            <div className="flex flex-row gap-x-[15px] items-center">
              <Image src={belgia} alt="belgia flag" width={25} height={25} />
              <h3 className="uppercase font-medium leading-[19px] text-black">
                bel
              </h3>
            </div>
            <h3 className="uppercase font-medium leading-[19px] text-black">
              0
            </h3>
          </div>
          <div className="flex flex-row items-center justify-between mt-[10px] pr-2 w-full">
            <div className="flex flex-row gap-x-[15px] items-center">
              <Image src={france} alt="belgia flag" width={25} height={25} />
              <h3 className="uppercase font-medium leading-[19px] text-black">
                fra
              </h3>
            </div>
            <h3 className="uppercase font-medium leading-[19px] text-black">
              0
            </h3>
          </div>
          <h3 className="font-bold text-[#081158] capitalize text-sm leading-4 mt-[13px]">
            pre match
          </h3>
        </div>
        {/* NED & ITA */}
        <div className="ml-6 h-[127px] border-r border-r-[#C4C4C4] pr-[21px]">
          <h3 className="font-medium text-xs leading-[14px] text-black w-[151px]">
            Liga Inggris Premier League
          </h3>
          <h3 className="font-medium text-xs leading-[14px] text-[#ED1C24] mt-1">
            Rabu, 31 Maret 2021
          </h3>
          <div className="flex flex-row items-center justify-between mt-[7px] pr-2 w-full">
            <div className="flex flex-row gap-x-[15px] items-center">
              <Image src={ned} alt="belgia flag" width={25} height={25} />
              <h3 className="uppercase font-medium leading-[19px] text-black">
                bel
              </h3>
            </div>
            <h3 className="uppercase font-medium leading-[19px] text-black">
              0
            </h3>
          </div>
          <div className="flex flex-row items-center justify-between mt-[10px] pr-2 w-full">
            <div className="flex flex-row gap-x-[15px] items-center">
              <Image src={ita} alt="belgia flag" width={25} height={25} />
              <h3 className="uppercase font-medium leading-[19px] text-black">
                fra
              </h3>
            </div>
            <h3 className="uppercase font-medium leading-[19px] text-black">
              0
            </h3>
          </div>
          <h3 className="font-bold text-[#081158] capitalize text-sm leading-4 mt-[13px]">
            pre match
          </h3>
        </div>
        {/* GER & POR */}
        <div className="ml-6 h-[127px] border-r border-r-[#C4C4C4] pr-[21px]">
          <h3 className="font-medium text-xs leading-[14px] text-black w-[151px]">
            Liga Inggris Premier League
          </h3>
          <h3 className="font-medium text-xs leading-[14px] text-[#ED1C24] mt-1">
            Rabu, 31 Maret 2021
          </h3>
          <div className="flex flex-row items-center justify-between mt-[7px] pr-2 w-full">
            <div className="flex flex-row gap-x-[15px] items-center">
              <Image src={ger} alt="belgia flag" width={25} height={25} />
              <h3 className="uppercase font-medium leading-[19px] text-black">
                bel
              </h3>
            </div>
            <h3 className="uppercase font-medium leading-[19px] text-black">
              0
            </h3>
          </div>
          <div className="flex flex-row items-center justify-between mt-[10px] pr-2 w-full">
            <div className="flex flex-row gap-x-[15px] items-center">
              <Image src={por} alt="belgia flag" width={25} height={25} />
              <h3 className="uppercase font-medium leading-[19px] text-black">
                fra
              </h3>
            </div>
            <h3 className="uppercase font-medium leading-[19px] text-black">
              0
            </h3>
          </div>
          <h3 className="font-bold text-[#081158] capitalize text-sm leading-4 mt-[13px]">
            pre match
          </h3>
        </div>
        {/* ENG & SPA */}
        <div className="ml-6 h-[127px] border-r border-r-[#C4C4C4] pr-[21px]">
          <h3 className="font-medium text-xs leading-[14px] text-black w-[151px]">
            Liga Inggris Premier League
          </h3>
          <h3 className="font-medium text-xs leading-[14px] text-[#ED1C24] mt-1">
            Rabu, 31 Maret 2021
          </h3>
          <div className="flex flex-row items-center justify-between mt-[7px] pr-2 w-full">
            <div className="flex flex-row gap-x-[15px] items-center">
              <Image src={eng} alt="belgia flag" width={25} height={25} />
              <h3 className="uppercase font-medium leading-[19px] text-black">
                bel
              </h3>
            </div>
            <h3 className="uppercase font-medium leading-[19px] text-black">
              0
            </h3>
          </div>
          <div className="flex flex-row items-center justify-between mt-[10px] pr-2 w-full">
            <div className="flex flex-row gap-x-[15px] items-center">
              <Image src={spa} alt="belgia flag" width={25} height={25} />
              <h3 className="uppercase font-medium leading-[19px] text-black">
                fra
              </h3>
            </div>
            <h3 className="uppercase font-medium leading-[19px] text-black">
              0
            </h3>
          </div>
          <h3 className="font-bold text-[#081158] capitalize text-sm leading-4 mt-[13px]">
            pre match
          </h3>
        </div>
        {/* NOR & GRE */}
        <div className="ml-6 h-[127px] border-r border-r-[#C4C4C4] pr-[21px]">
          <h3 className="font-medium text-xs leading-[14px] text-black w-[151px]">
            Liga Inggris Premier League
          </h3>
          <h3 className="font-medium text-xs leading-[14px] text-[#ED1C24] mt-1">
            Rabu, 31 Maret 2021
          </h3>
          <div className="flex flex-row items-center justify-between mt-[7px] pr-2 w-full">
            <div className="flex flex-row gap-x-[15px] items-center">
              <Image src={nor} alt="belgia flag" width={25} height={25} />
              <h3 className="uppercase font-medium leading-[19px] text-black">
                bel
              </h3>
            </div>
            <h3 className="uppercase font-medium leading-[19px] text-black">
              0
            </h3>
          </div>
          <div className="flex flex-row items-center justify-between mt-[10px] pr-2 w-full">
            <div className="flex flex-row gap-x-[15px] items-center">
              <Image src={gre} alt="belgia flag" width={25} height={25} />
              <h3 className="uppercase font-medium leading-[19px] text-black">
                fra
              </h3>
            </div>
            <h3 className="uppercase font-medium leading-[19px] text-black">
              0
            </h3>
          </div>
          <h3 className="font-bold text-[#081158] capitalize text-sm leading-4 mt-[13px]">
            pre match
          </h3>
        </div>

        <div className="h-[87px] flex flex-col gap-y-[15px] items-center py-[9px] px-5 border-r border-r-[#C4C4C4]">
          <Image src={rforward} alt="right arrow" width={27} height={27} />
          <Image src={lforward} alt="left arrow" width={27} height={27} />
        </div>
      </div>
    </section>
  )
}

export default Schedule

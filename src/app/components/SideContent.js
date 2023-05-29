import Image from 'next/image'
import { ec1, ec2, ec3, ec4, editorschoice } from '../../../public/images'
import {
  belgium,
  calendar,
  categoriesIcon,
  chevrondown,
  denmark,
  finland,
  italy,
  russia,
  switzerland,
  turkey,
  wales,
} from '../../../public/icons'

const SideContent = () => {
  return (
    <aside className="flex flex-col gap-y-[30px]">
      {/* editor's pick */}
      <div className="flex flex-col gap-y-[15px]">
        <div>
          <h1 className="font-bold text-xl leading-[23px] text-[#272121]">
            EDITOR&apos;S CHOICE
          </h1>

          <hr className="h-1 bg-red-primary mt-[10px]" />
        </div>

        <div className="relative">
          <Image
            src={editorschoice}
            alt="editor choice"
            height={250}
            width={300}
          />
          <div className="left-[15px] right-[15px] bottom-[15px] absolute">
            <div className="uppercase text-[15px] leading-[18px] text-white bg-red-primary py-[5px] px-[10px] w-fit mb-[15px]">
              Moto GP
            </div>
            <h1 className="font-medium text-lg leading-[21px] text-white">
              Bangga, Zarco Bongkar Rahasianya Pecahkan Rekor Top Speed MotoGP
            </h1>
          </div>
        </div>

        <hr className="h-[1px] bg-[#C4C4C4]" />

        <div className="flex flex-row gap-x-[15px] items-start justify-start">
          <Image src={ec1} alt="editor choice 1" width={92} height={75} />
          <div className="flex flex-col gap-y-[10px]">
            <h1 className="text-[#272121] font-medium leading-[19px]">
              Hasil Pertandingan NBA 2020-2021
            </h1>
            <div className="flex flex-row items-center gap-x-[7px]">
              <Image
                src={calendar}
                alt="calendar icon"
                width={20}
                height={20}
              />
              <h3 className="text-[#443737] text-xs leading-[14px]">
                29 Maret 2021
              </h3>
            </div>
          </div>
        </div>

        <hr className="h-[1px] bg-[#C4C4C4]" />

        <div className="flex flex-row gap-x-[15px] items-start justify-start">
          <Image src={ec2} alt="editor choice 2" width={92} height={75} />
          <div className="flex flex-col gap-y-[10px]">
            <h1 className="text-[#272121] font-medium leading-[19px]">
              Cristiano Ronaldo Tetap Jadi Teladan
            </h1>
            <div className="flex flex-row items-center gap-x-[7px]">
              <Image
                src={calendar}
                alt="calendar icon"
                width={20}
                height={20}
              />
              <h3 className="text-[#443737] text-xs leading-[14px]">
                29 Maret 2021
              </h3>
            </div>
          </div>
        </div>

        <hr className="h-[1px] bg-[#C4C4C4]" />

        <div className="flex flex-row gap-x-[15px] items-start justify-start">
          <Image src={ec3} alt="editor choice 3" width={92} height={75} />
          <div className="flex flex-col gap-y-[10px]">
            <h1 className="text-[#272121] font-medium leading-[19px]">
              Cari Ongkos untuk Olimpiade, Atlet Seksi Ini Rela Jualan Pizza
            </h1>
            <div className="flex flex-row items-center gap-x-[7px]">
              <Image
                src={calendar}
                alt="calendar icon"
                width={20}
                height={20}
              />
              <h3 className="text-[#443737] text-xs leading-[14px]">
                29 Maret 2021
              </h3>
            </div>
          </div>
        </div>

        <hr className="h-[1px] bg-[#C4C4C4]" />

        <div className="flex flex-row gap-x-[15px] items-start justify-start">
          <Image src={ec4} alt="editor choice 4" width={92} height={75} />
          <div className="flex flex-col gap-y-[10px]">
            <h1 className="text-[#272121] font-medium leading-[19px]">
              Hasil Pertandingan NBA 2020-2021
            </h1>
            <div className="flex flex-row items-center gap-x-[7px]">
              <Image
                src={calendar}
                alt="calendar icon"
                width={20}
                height={20}
              />
              <h3 className="text-[#443737] text-xs leading-[14px]">
                29 Maret 2021
              </h3>
            </div>
          </div>
        </div>

        <hr className="h-[1px] bg-[#C4C4C4]" />
      </div>

      {/* hot topics */}
      <div>
        <h1 className="font-bold text-xl leading-[23px] text-[#272121]">
          HOT TOPICS
        </h1>

        <hr className="h-1 bg-red-primary my-[10px]" />

        <div className="bg-blue-primary flex flex-col">
          <div className="flex flex-row gap-x-[15px] items-center py-[14px] pl-[15px] bg-blue-headline">
            <Image
              src={categoriesIcon}
              alt="categories icon"
              width={7}
              height={11}
            />
            <h2 className="font-bold text-white text-sm leading-4">
              Sepak Bola
            </h2>
          </div>
          <div className="flex flex-row gap-x-[15px] items-center py-[14px] pl-[15px]">
            <Image
              src={categoriesIcon}
              alt="categories icon"
              width={7}
              height={11}
            />
            <h2 className="font-bold text-white text-sm leading-4">MotoGP</h2>
          </div>
          <div className="flex flex-row gap-x-[15px] items-center py-[14px] pl-[15px] bg-blue-headline">
            <Image
              src={categoriesIcon}
              alt="categories icon"
              width={7}
              height={11}
            />
            <h2 className="font-bold text-white text-sm leading-4">
              Bola Basket
            </h2>
          </div>
          <div className="flex flex-row gap-x-[15px] items-center py-[14px] pl-[15px]">
            <Image
              src={categoriesIcon}
              alt="categories icon"
              width={7}
              height={11}
            />
            <h2 className="font-bold text-white text-sm leading-4">
              Badminton
            </h2>
          </div>
          <div className="flex flex-row gap-x-[15px] items-center py-[14px] pl-[15px] bg-blue-headline">
            <Image
              src={categoriesIcon}
              alt="categories icon"
              width={7}
              height={11}
            />
            <h2 className="font-bold text-white text-sm leading-4">Tenis</h2>
          </div>
          <div className="flex flex-row gap-x-[15px] items-center py-[14px] pl-[15px]">
            <Image
              src={categoriesIcon}
              alt="categories icon"
              width={7}
              height={11}
            />
            <h2 className="font-bold text-white text-sm leading-4">
              Formula 1
            </h2>
          </div>
        </div>
      </div>

      {/* statistics */}
      <div className="relative">
        <h1 className="font-bold text-xl leading-[23px] text-[#272121]">
          STATISTIK
        </h1>

        <hr className="h-1 bg-red-primary my-[10px]" />

        <div className="rounded-md p-2 border border-[#443737] shadow-inner shadow-white flex flex-row w-fit items-center absolute -top-1 right-0">
          <h1 className="text-sm leading-4 text-[#131313] font-medium">
            EURO 2021
          </h1>
          <Image src={chevrondown} alt="chevron down" width={16} height={16} />
        </div>

        {/* group A */}
        <h1 className="text-sm font-bold text-black leading-4 mt-[19px]">
          GROUP A
        </h1>
        <div className="mt-[7px] bg-blue-primary py-2 px-[10px]">
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-bold text-sm leading-4 text-white">Rank</h1>
            <div className="flex flex-row items-center justify-evenly w-[91px]">
              <h1 className="font-bold text-sm leading-4 text-white">P</h1>
              <h1 className="font-bold text-sm leading-4 text-white">GD</h1>
              <h1 className="font-bold text-sm leading-4 text-white">Pts</h1>
            </div>
          </div>
        </div>
        <div className="border border-black flex flex-col pt-[13px] pb-4 pl-[9px] pr-3 gap-y-[19px] text-black">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-x-3">
              <h1 className="font-bold text-sm leading-4">1</h1>
              <Image src={turkey} alt="turkey" width={20} height={20} />
              <h1 className="font-bold text-sm leading-4">Turkey</h1>
            </div>
            <div className="flex flex-row items-center justify-evenly w-[91px]">
              <h1 className="font-bold text-sm leading-4">6</h1>
              <h1 className="font-bold text-sm leading-4">8</h1>
              <h1 className="font-bold text-sm leading-4">13</h1>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-x-3">
              <h1 className="font-bold text-sm leading-4">2</h1>
              <Image src={italy} alt="Italy" width={20} height={20} />
              <h1 className="font-bold text-sm leading-4">Italy</h1>
            </div>
            <div className="flex flex-row items-center justify-evenly w-[91px]">
              <h1 className="font-bold text-sm leading-4">6</h1>
              <h1 className="font-bold text-sm leading-4">2</h1>
              <h1 className="font-bold text-sm leading-4">10</h1>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-x-3">
              <h1 className="font-bold text-sm leading-4">3</h1>
              <Image src={wales} alt="wales" width={20} height={20} />
              <h1 className="font-bold text-sm leading-4">Wales</h1>
            </div>
            <div className="flex flex-row items-center justify-evenly w-[91px]">
              <h1 className="font-bold text-sm leading-4">6</h1>
              <h1 className="font-bold text-sm leading-4 text-red-primary">
                -6
              </h1>
              <h1 className="font-bold text-sm leading-4">5</h1>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-x-3">
              <h1 className="font-bold text-sm leading-4">4</h1>
              <Image
                src={switzerland}
                alt="switzerland"
                width={20}
                height={20}
              />
              <h1 className="font-bold text-sm leading-4">Switzerland</h1>
            </div>
            <div className="flex flex-row items-center justify-evenly w-[91px]">
              <h1 className="font-bold text-sm leading-4">6</h1>
              <h1 className="font-bold text-sm leading-4 text-red-primary">
                -4
              </h1>
              <h1 className="font-bold text-sm leading-4">5</h1>
            </div>
          </div>
        </div>

        <h1 className="text-sm font-bold text-black leading-4 mt-[19px]">
          GROUP B
        </h1>
        <div className="mt-[7px] bg-blue-primary py-2 px-[10px]">
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-bold text-sm leading-4 text-white">Rank</h1>
            <div className="flex flex-row items-center justify-evenly w-[91px]">
              <h1 className="font-bold text-sm leading-4 text-white">P</h1>
              <h1 className="font-bold text-sm leading-4 text-white">GD</h1>
              <h1 className="font-bold text-sm leading-4 text-white">Pts</h1>
            </div>
          </div>
        </div>
        <div className="border border-black flex flex-col pt-[13px] pb-4 pl-[9px] pr-3 gap-y-[19px] text-black">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-x-3">
              <h1 className="font-bold text-sm leading-4">1</h1>
              <Image src={denmark} alt="denmark" width={20} height={20} />
              <h1 className="font-bold text-sm leading-4">Denmark</h1>
            </div>
            <div className="flex flex-row items-center justify-evenly w-[91px]">
              <h1 className="font-bold text-sm leading-4">6</h1>
              <h1 className="font-bold text-sm leading-4">8</h1>
              <h1 className="font-bold text-sm leading-4">13</h1>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-x-3">
              <h1 className="font-bold text-sm leading-4">2</h1>
              <Image src={finland} alt="finland" width={20} height={20} />
              <h1 className="font-bold text-sm leading-4">Finland</h1>
            </div>
            <div className="flex flex-row items-center justify-evenly w-[91px]">
              <h1 className="font-bold text-sm leading-4">6</h1>
              <h1 className="font-bold text-sm leading-4">2</h1>
              <h1 className="font-bold text-sm leading-4">10</h1>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-x-3">
              <h1 className="font-bold text-sm leading-4">3</h1>
              <Image src={belgium} alt="belgium" width={20} height={20} />
              <h1 className="font-bold text-sm leading-4">Belgium</h1>
            </div>
            <div className="flex flex-row items-center justify-evenly w-[91px]">
              <h1 className="font-bold text-sm leading-4">6</h1>
              <h1 className="font-bold text-sm leading-4 text-red-primary">
                -6
              </h1>
              <h1 className="font-bold text-sm leading-4">5</h1>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-x-3">
              <h1 className="font-bold text-sm leading-4">4</h1>
              <Image src={russia} alt="russia" width={20} height={20} />
              <h1 className="font-bold text-sm leading-4">Russia</h1>
            </div>
            <div className="flex flex-row items-center justify-evenly w-[91px]">
              <h1 className="font-bold text-sm leading-4">6</h1>
              <h1 className="font-bold text-sm leading-4 text-red-primary">
                -4
              </h1>
              <h1 className="font-bold text-sm leading-4">5</h1>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideContent

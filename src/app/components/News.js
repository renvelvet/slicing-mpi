import Image from 'next/image'
import {
  latest2,
  latestF1,
  latestbig,
  mp1,
  mp2,
  mp3,
  mp4,
  mul1,
  mul2,
  mul3,
} from '../../../public/images'
import {
  calendar,
  calendarborder,
  cameraIcon32,
  iconVideo32,
} from '../../../public/icons'

const News = () => {
  return (
    <section className="flex flex-col z-20 mt-9 gap-y-[30px]">
      {/* LATEST */}
      <div>
        <h2 className="font-bold text-xl leading-[23px] text-[#272121] mb-[10px]">
          LATEST NEWS
        </h2>
        <hr className="h-1 bg-red-primary" />
      </div>
      <div className="flex flex-row gap-x-[15px] justify-start">
        <Image src={latestF1} alt="latest F1" width={240} height={207} />
        <div className="flex flex-col gap-y-[10px]">
          <h2 className="leading-[19px] font-medium text-red-primary">F1</h2>
          <div className="flex flex-row items-center gap-x-[5px]">
            <Image src={calendar} alt="calendar icon" width={20} height={20} />
            <h3 className="text-[#443737] text-xs leading-[14px]">
              31 Maret 2021
            </h3>
          </div>
          <h2 className="text-red-primary font-bold text-sm leading-4">
            Kualifikasi Piala Dunia 2022
          </h2>
          <h1 className="text-[#272121] font-bold text-xl leading-[23px]">
            Hamilton Menangi Persaingan Sengit atas Verstappen
          </h1>
          <h2 className="text-[15px] text-[#272121] leading-[18px]">
            Pembalap Tim Mercedes, Lewis Hamilton, tampil sebagai pemenang di
            ajang Formula One (F1) GP Bahrain 2021. Akan tetapi, kemenangan ini
            tak didapat Hamilton dengan mudah karena ia harus bersaing sengit
            dengan pembalap Red Bull, Max Verstappen.
          </h2>
        </div>
      </div>

      <hr className="h-[1px] bg-[#f2f2f2]" />

      <div className="relative">
        <Image src={latestbig} alt="Latest big" width={810} height={500} />
        <div className="flex flex-col absolute left-[30px] right-[30px] bottom-[26px] z-20 gap-y-[10px]">
          <div className="flex flex-row items-center justify-start w-full gap-x-[15px]">
            <div className="uppercase text-[15px] leading-[18px] text-white bg-[#ED1C24] py-[5px] px-[10px]">
              moto gp
            </div>
            <h3 className="text-white text-xs leading-[14px]">
              Rabu, 30 Maret 2020
            </h3>
          </div>
          <h2 className="font-medium leading-[19px] text-[#ED2224]">
            GP Sepang 2021
          </h2>
          <h1 className="font-bold text-[30px] leading-[35px] text-white">
            Disalip Jelang Finis, Joan Mir Hanya Bisa Tersenyum Getir
          </h1>
        </div>
        <div className="z-10 w-full h-full inset-0 absolute bg-gradient-to-b from-transparent via-blue-headline/[.15] to-blue-headline">
          &nbsp;
        </div>
      </div>

      <hr className="h-[1px] bg-[#f2f2f2]" />

      {/* MOST POPULAR */}
      <div>
        <h2 className="font-bold text-xl leading-[23px] text-[#272121] mb-[10px]">
          MOST POPULAR
        </h2>
        <hr className="h-1 bg-red-primary" />
        <div className="flex flex-row gap-x-5 mt-5">
          <div className="flex flex-col gap-y-[10px]">
            <Image src={mp1} alt="most popular 1" width={188} height={113} />
            <div className="flex flex-row items-center gap-x-[5px]">
              <Image
                src={calendar}
                alt="calendar icon"
                width={20}
                height={20}
              />
              <h3 className="text-[#443737] text-xs leading-[14px]">
                31 Maret 2021
              </h3>
            </div>
            <h1 className="font-medium text-[#272121] leading-[19px]">
              Jadwal MotoGP Doha 2021: Valentino Rossi Memble Lagi?
            </h1>
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <Image src={mp2} alt="most popular 2" width={188} height={113} />
            <div className="flex flex-row items-center gap-x-[5px]">
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
            <h1 className="font-medium text-[#272121] leading-[19px]">
              Jadwal MotoGP Doha 2021: Valentino Rossi Memble Lagi?
            </h1>
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <Image src={mp3} alt="most popular 3" width={188} height={113} />
            <div className="flex flex-row items-center gap-x-[5px]">
              <Image
                src={calendar}
                alt="calendar icon"
                width={20}
                height={20}
              />
              <h3 className="text-[#443737] text-xs leading-[14px]">
                28 Maret 2021
              </h3>
            </div>
            <h1 className="font-medium text-[#272121] leading-[19px]">
              Jadwal MotoGP Doha 2021: Valentino Rossi Memble Lagi?
            </h1>
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <Image src={mp4} alt="most popular 4" width={188} height={113} />
            <div className="flex flex-row items-center gap-x-[5px]">
              <Image
                src={calendar}
                alt="calendar icon"
                width={20}
                height={20}
              />
              <h3 className="text-[#443737] text-xs leading-[14px]">
                28 Maret 2021
              </h3>
            </div>
            <h1 className="font-medium text-[#272121] leading-[19px]">
              Jadwal MotoGP Doha 2021: Valentino Rossi Memble Lagi?
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-x-[15px] justify-start relative">
        <Image src={latest2} alt="latest F1" width={240} height={207} />
        <Image
          src={iconVideo32}
          alt="icon video"
          width={32}
          height={32}
          className="absolute top-[15px] left-[15px]"
        />
        <div className="flex flex-col gap-y-[10px]">
          <h2 className="leading-[19px] font-medium text-red-primary">Video</h2>
          <div className="flex flex-row items-center gap-x-[5px]">
            <Image src={calendar} alt="calendar icon" width={20} height={20} />
            <h3 className="text-[#443737] text-xs leading-[14px]">
              28 Maret 2021
            </h3>
          </div>
          <h1 className="text-[#272121] font-bold text-xl leading-[23px]">
            Pelita Jaya Tutup Putaran Kedua IBL 2021 dengan Kemenangan
          </h1>
          <h2 className="text-[15px] text-[#272121] leading-[18px]">
            Pelita Jaya Bakrie sukses menunjukkan performa mengesan saat
            menghadapi pemuncak klasemen IBL musim 2021 Divisi Merah, Louvre
            Dewa United Surabaya, pada laga penutup seri dua.
          </h2>
        </div>
      </div>

      <hr className="h-[1px] bg-[#f2f2f2]" />

      <div className="flex flex-row gap-x-[15px] justify-start">
        <Image src={latest2} alt="latest F1" width={240} height={207} />

        <div className="flex flex-col gap-y-[10px]">
          <h2 className="leading-[19px] font-medium text-red-primary">Video</h2>
          <div className="flex flex-row items-center gap-x-[5px]">
            <Image src={calendar} alt="calendar icon" width={20} height={20} />
            <h3 className="text-[#443737] text-xs leading-[14px]">
              28 Maret 2021
            </h3>
          </div>
          <h1 className="text-[#272121] font-bold text-xl leading-[23px]">
            Pelita Jaya Tutup Putaran Kedua IBL 2021 dengan Kemenangan
          </h1>
          <h2 className="text-[15px] text-[#272121] leading-[18px]">
            Pelita Jaya Bakrie sukses menunjukkan performa mengesan saat
            menghadapi pemuncak klasemen IBL musim 2021 Divisi Merah, Louvre
            Dewa United Surabaya, pada laga penutup seri dua.
          </h2>
        </div>
      </div>

      <hr className="h-[1px] bg-[#f2f2f2]" />

      <div className="bg-gradient-radial from-blue-radial via-blue-radial-via to-blue-radial pb-6 pt-[15px] px-5">
        <h2 className="font-bold text-lg leading-[21px] text-white mb-[10px]">
          MULTIMEDIA
        </h2>
        <div className="flex flex-row gap-x-5 border-t-4 border-t-[#D92129] pt-5 overflow-hidden">
          <div className="flex flex-col gap-y-[10px] relative">
            <Image
              src={cameraIcon32}
              alt="camera icon"
              width={32}
              height={32}
              className="absolute top-[11px] left-[10px] z-20"
            />
            <Image src={mul1} alt="multimedia 1" width={273} height={197} />
            <h1 className="font-bold text-white leading-[19px] absolute left-[10px] right-[10px] bottom-[35px] z-20">
              IBL 2021: West Bandits Berhasil Balas Kekalahan atas NSH
            </h1>
            <div className="flex flex-row items-center gap-x-[5px] absolute bottom-[10px] left-[10px] z-20">
              <Image
                src={calendarborder}
                alt="calendar icon"
                width={20}
                height={20}
                className="border-dashed border"
              />
              <h3 className="text-white text-xs leading-[14px] font-medium">
                4 Menit lalu
              </h3>
            </div>
            <div className="w-24 h-[198px] top-0 absolute left-0 bg-gradient-to-r from-blue-linear-gradient/100 to-blue-primary/0 z-10">
              &nbsp;
            </div>
          </div>
          <div className="flex flex-col gap-y-[10px] relative">
            <Image
              src={iconVideo32}
              alt="camera icon"
              width={32}
              height={32}
              className="absolute top-[10px] left-[10px] z-20"
            />
            <Image src={mul2} alt="multimedia 1" width={273} height={197} />
            <h1 className="font-bold text-white leading-[19px] absolute left-[10px] right-[10px] bottom-[35px] z-20">
              Hasil MotoGP Qatar 2021: Vinales Menangi Seri Perdana
            </h1>
            <div className="flex flex-row items-center gap-x-[5px] absolute bottom-[10px] left-[10px] z-20">
              <Image
                src={calendarborder}
                alt="calendar icon"
                width={20}
                height={20}
                className="border-dashed border"
              />
              <h3 className="text-white text-xs leading-[14px] font-medium">
                4 Menit lalu
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-y-[10px] relative">
            <Image
              src={cameraIcon32}
              alt="camera icon"
              width={32}
              height={32}
              className="absolute top-[11px] left-[10px] z-20"
            />
            <Image src={mul3} alt="multimedia 1" width={194} height={197} />
            <h1 className="font-bold text-white leading-[19px] absolute left-[10px] break-words w-[266px] bottom-[35px] z-20 text-clip">
              Daddies dan Minions Dibekali Jurus Ampuh Penakluk Yuta/Endo
            </h1>
            <div className="flex flex-row items-center gap-x-[5px] absolute bottom-[10px] left-[10px] z-20">
              <Image
                src={calendarborder}
                alt="calendar icon"
                width={20}
                height={20}
                className="border-dashed border"
              />
              <h3 className="text-white text-xs leading-[14px] font-medium">
                4 Menit lalu
              </h3>
            </div>
            <div className="w-24 h-[198px] top-0 absolute left-0 bg-gradient-to-r from-blue-linear-gradient/100 to-blue-primary/0 z-10">
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News

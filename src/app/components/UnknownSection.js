import Image from 'next/image'
import { banner, us1, us2, us3, us4 } from '../../../public/images'

const UnknownSection = () => {
  return (
    <section className="flex flex-col z-20">
      <Image src={banner} alt="banner" width={810} height={65} />
      <div className="flex flex-row items-center gap-x-5 mt-[27px]">
        <div className="relative">
          <Image src={us1} alt="news item" width={188} height={132} />
          <h1 className="font-bold text-sm leading-4 text-white absolute left-2 right-2 bottom-[6px] z-20">
            Anthony Ginting Ungkap Sisi Positif Indonesia Badminton
          </h1>
        </div>
        <div className="relative">
          <Image src={us2} alt="news item" width={188} height={132} />
          <h1 className="font-bold text-sm leading-4 text-white absolute left-2 right-2 bottom-[6px] z-20">
            Jonatan Christie Soroti Venue Practice Hall Jelang Indonesia
            Badminton Festival
          </h1>
        </div>
        <div className="relative">
          <Image src={us3} alt="news item" width={188} height={132} />
          <h1 className="font-bold text-sm leading-4 text-white absolute left-2 right-2 bottom-[6px] z-20">
            Jelang Indonesia Masters 2021, The Daddies Akui
          </h1>
        </div>
        <div className="relative">
          <Image src={us4} alt="news item" width={188} height={132} />
          <h1 className="font-bold text-sm leading-4 text-white absolute left-2 right-2 bottom-[6px] z-20">
            Jonatan Christie Bersyukur Cederanya Berangsur Pulih
          </h1>
        </div>
      </div>
    </section>
  )
}

export default UnknownSection

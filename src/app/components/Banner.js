import Image from 'next/image'
import { header, logo } from '../../../public/images'

const Banner = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-row items-center justify-between w-full py-5 mt-[3px]">
      <Image src={logo} alt="header image" width={331} height={50} />
      <Image src={header} alt="header image" width={728} height={90} />
    </div>
  )
}

export default Banner

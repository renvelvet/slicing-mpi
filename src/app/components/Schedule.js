import Image from 'next/image'
import { forward } from '../../../public/icons'
import ScheduleSlider from './ScheduleSlider'

function Schedule() {
  return (
    <section className="bg-[#F9F9F9] h-[166px] w-full">
      <div className="max-w-6xl mx-auto flex flex-row items-center pt-[18px] pb-5 justify-between">
        <div className="flex justify-start flex-col gap-y-[11px] text-black-secondary">
          <h2 className="uppercase font-bold text-xl leading-6 w-[79px] h-[46px]">
            jadwal & hasil
          </h2>
          <div className="flex flex-row gap-x-1 items-center w-full">
            <h3 className="capitalize text-xs leading-[14px]">
              jadwal terbaru
            </h3>
            <Image src={forward} alt="forward icon" width={9} height={6} />
          </div>
        </div>
        <ScheduleSlider />
      </div>
    </section>
  )
}

export default Schedule

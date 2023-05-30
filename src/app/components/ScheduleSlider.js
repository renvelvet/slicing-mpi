'use client'
import Image from 'next/image'
import { lforward, rforward } from '../../../public/icons'
import { schedules } from '../constants'
import { useRef } from 'react'
import Slider from 'react-slick'

const ScheduleSlider = () => {
  const sliderRef = useRef()

  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
  }

  return (
    <div className="flex flex-row items-center">
      <div className={`h-[127px] w-[calc(173px*5+24px*4)]`}>
        <Slider
          ref={sliderRef}
          {...settings}
          /* className="h-full w-full flex gap-x-6 flex-row border-r border-r-[#C4C4C4] overflow-hidden" */
        >
          {schedules.map((jadwal, index) => (
            <div
              key={index}
              className="h-[127px] w-[173px] border-r border-l-0 border-r-[#C4C4C4] px-6"
            >
              <h3 className="font-medium text-xs leading-[14px] text-black">
                Liga Inggris Premier League
              </h3>
              <h3 className="font-medium text-xs leading-[14px] text-[#ED1C24] mt-1">
                Rabu, 31 Maret 2021
              </h3>
              <div className="flex flex-row items-center justify-between mt-[7px] w-[143px]">
                <div className="flex flex-row gap-x-[15px] items-center">
                  <Image
                    src={jadwal.icon1}
                    alt={`${jadwal.title1} flag`}
                    width={25}
                    height={25}
                  />
                  <h3 className="uppercase font-medium leading-[19px] text-black">
                    {jadwal.title1}
                  </h3>
                </div>
                <h3 className="uppercase font-medium leading-[19px] text-black">
                  {jadwal.score1}
                </h3>
              </div>
              <div className="flex flex-row items-center justify-between mt-[10px] w-[143px]">
                <div className="flex flex-row gap-x-[15px] items-center">
                  <Image
                    src={jadwal.icon2}
                    alt={`${jadwal.title2} flag`}
                    width={25}
                    height={25}
                  />
                  <h3 className="uppercase font-medium leading-[19px] text-black">
                    {jadwal.title2}
                  </h3>
                </div>
                <h3 className="uppercase font-medium leading-[19px] text-black">
                  {jadwal.score2}
                </h3>
              </div>
              <h3 className="font-bold text-[#081158] capitalize text-sm leading-4 mt-[13px]">
                pre match
              </h3>
            </div>
          ))}
        </Slider>
      </div>

      <div className="h-[87px] flex flex-col gap-y-[15px] items-center py-[9px] px-5 border-r border-r-[#C4C4C4]">
        <Image
          src={rforward}
          alt="right arrow"
          width={27}
          height={27}
          className="cursor-pointer"
          onClick={() => sliderRef.current.slickNext()}
        />
        <Image
          src={lforward}
          alt="left arrow"
          width={27}
          height={27}
          className="cursor-pointer"
          onClick={() => sliderRef.current.slickPrev()}
        />
      </div>
    </div>
  )
}

export default ScheduleSlider

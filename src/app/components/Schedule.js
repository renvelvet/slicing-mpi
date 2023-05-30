'use client'
import Image from 'next/image'
import { forward } from '../../../public/icons'
import ScheduleSlider from './ScheduleSlider'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { jadwalTerbaru } from '../constants'

function Schedule() {
  return (
    <section className="bg-[#F9F9F9] h-[166px] w-full">
      <div className="max-w-6xl mx-auto flex flex-row items-center pt-[18px] pb-5 justify-between">
        <div className="flex justify-start flex-col gap-y-[11px] text-black-secondary">
          <h2 className="uppercase font-bold text-xl leading-6 w-[79px] h-[46px]">
            jadwal & hasil
          </h2>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex flex-row gap-x-1 items-center w-full focus:outline-none">
                <h2 className="capitalize text-xs leading-[14px] w-full">
                  jadwal terbaru
                </h2>
                <Image src={forward} alt="forward icon" width={9} height={6} />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute border left-0 mt-2 z-30 w-56 bg-white focus:outline-none">
                {jadwalTerbaru.map((item, index) => (
                  <Menu.Item key={index} className="w-full p-2">
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-blue-500 text-white' : 'text-black'
                        } text-start text-xs`}
                      >
                        {item}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <ScheduleSlider />
      </div>
    </section>
  )
}

export default Schedule

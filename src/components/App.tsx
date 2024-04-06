import React, { useState, useEffect, useMemo } from 'react'
import moment from 'moment'
import logo from '../assets/logo.svg'
import config from "./config.json"
import "./style.css"


export const App: React.FC = () => {
  const localConfig: typeof config = config
  const [currentDate, setCurrentDate] = useState<string>('')
  const [currentTime, setCurrentTime] = useState<string>()
  const currentMonth = moment().month()
  const bottomListContent = useMemo(() => {
    return [localConfig.bottomSponsorsBoxesContent[currentMonth - 1], localConfig.bottomSponsorsBoxesContent[currentMonth], localConfig.bottomSponsorsBoxesContent[currentMonth + 1]]
  }, [currentMonth, localConfig])

  useEffect(() => {
    const calculateTime = () => {
      const now = moment()

      // Format date and time separately
      const formattedDate = now.format('YYYY-MM-DD')
      const formattedTime = now.format('hh:mm:ss a')

      setCurrentDate(formattedDate)
      setCurrentTime(formattedTime)
    }

    calculateTime()

    const intervalId = setInterval(() => {
      calculateTime()
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="min-h-screen bg-bg-color flex justify-center px-2 text-s">
      {/* Left */}
      <div className="flex flex-col justify-around">
        <div className="border-2 rounded-[20px] relative border-[grey] text-[white] h-1/2 py-4 px-3 mt-4 w-[224px]">
          <div className='bg-light-theme-color border absolute left-5 border-[grey] rounded-full w-3 h-3'></div>
          <div className='bg-light-theme-color border absolute left-5 bottom-5 border-[grey] rounded-full w-3 h-3'></div>
          <div className='bg-light-theme-color border absolute right-5 border-[grey] rounded-full w-3 h-3'></div>
          <div className='bg-light-theme-color border absolute right-5 bottom-5 border-[grey] rounded-full w-3 h-3'></div>
          <div className="font-bold text-[24px] text-center text-theme-color">רֵיק'</div>
          <div className='flex flex-col overflow-scroll' style={{
            height: "calc(100% - 60px)"
          }}>
            {localConfig.leftTopBoxContent.map(
              ({ time, text }, index) => {
                return (
                  <div className="flex justify-between" key={time + index}>
                    <p className='mr-4'>{time}</p>
                    <p>{text}</p>
                  </div>
                )
              }
            )}
          </div>
        </div>
        <div className="border-2 rounded-[20px] border-[grey] text-[white] h-1/2 py-4 mt-4 px-3 relative">
          <div className='bg-light-theme-color border absolute left-5 border-[grey] rounded-full w-3 h-3'></div>
          <div className='bg-light-theme-color border absolute left-5 bottom-5 border-[grey] rounded-full w-3 h-3'></div>
          <div className='bg-light-theme-color border absolute right-5 border-[grey] rounded-full w-3 h-3'></div>
          <div className='bg-light-theme-color border absolute right-5 bottom-5 border-[grey] rounded-full w-3 h-3'></div>
          <div className='flex justify-center items-center pb-5 font-bold text-xl text-center text-theme-color'>
            רֵיק'
          </div>
        </div>
      </div>
      {/* Center */}
      <div className="grid w-full px-8">
        <div className="text-theme-color font-bold mt-8 flex justify-between px-20">
          <div className="w-[110px] ">{currentTime}</div>
          <div className="flex flex-col items-center">
            {/* Logo */}
            <img src={logo} alt="Description of the image" />
            <div className="font-thin">{localConfig.underLogoSponsorText}</div>
            <div className="font-bold">{localConfig.underLogoSponsorSubtitle}</div>
          </div>
          <div>
            <div>{'רֵיק'}</div>
            {currentDate}
          </div>
        </div>
        <div className="px-6">
          <div className="flex justify-between pb-5 px-10 text-theme-color text-4xl font-bold">
            <div>{'רֵיק'}</div>
            <div>{'רֵיק'}</div>
          </div>
          <div className="grid grid-cols-4 grid-rows-3 gap-4 items-center">
            {localConfig.centerPrayersBoxes.map(({ name, value }, index) => (
              <div
                id={index === currentMonth ? 'center__current__month__box' : 'center__month__box'}
                key={index + "center__boxes"}
                className={`p-2  text-center ${index === currentMonth ? 'text-[white]' : 'text-theme-color'
                  }`}
              >
                {name} <p>{'---'}</p> <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex bottom-boxes [&>*:nth-child(n+2)]:ml-4 justify-between ">
          {bottomListContent.map(({ name, value }, index) => {
            return (
              <div key={index + "bottomList"} className="border-2 rounded-[20px] flex flex-col items-center border-[grey] text-[white] py-4 w-1/3">
                <div className="font-bold text-[24px] text-theme-color pb-2">{name}</div>
                <p>{value}</p>
              </div>
            )
          })}
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-col justify-around w-[224px]">
        <div className="border-2 rounded-[20px] border-[grey] text-[white] h-1/2 mt-4 py-4 px-3 w-[224px] relative">
          <div className='bg-light-theme-color border absolute left-5 border-[grey] rounded-full w-3 h-3'></div>
          <div className='bg-light-theme-color border absolute left-5 bottom-5 border-[grey] rounded-full w-3 h-3'></div>
          <div className='bg-light-theme-color border absolute right-5 border-[grey] rounded-full w-3 h-3'></div>
          <div className='bg-light-theme-color border absolute right-5 bottom-5 border-[grey] rounded-full w-3 h-3'></div>
          <div className="font-bold text-xl text-center text-theme-color pb-3">רֵיק'</div>
          <div className='flex justify-center'>
            {localConfig.rightTopMediaContent.type === 'photo' && <img src={localConfig.rightTopMediaContent.fileUrl} alt={`Photo`} />}
            {localConfig.rightTopMediaContent.type === 'video' && <video controls src={localConfig.rightTopMediaContent.fileUrl} />}
          </div>
        </div>
        <div className="border-2 rounded-[20px] border-[grey] text-[white] h-1/2 mt-4 py-4 px-3 relative">
          <div className='bg-light-theme-color border absolute left-5 border-[grey] rounded-full w-3 h-3'></div>
          <div className='bg-light-theme-color border absolute left-5 bottom-5 border-[grey] rounded-full w-3 h-3'></div>
          <div className='bg-light-theme-color border absolute right-5 border-[grey] rounded-full w-3 h-3'></div>
          <div className='bg-light-theme-color border absolute right-5 bottom-5 border-[grey] rounded-full w-3 h-3'></div>
          <div className="font-bold text-lg text-center text-theme-color">רֵיק'</div>
          {localConfig.rightBottomBox.map(
            ({ title, subtitle, text }, index) => {
              return (
                <div key={index + "rightBottomBox"} className="text-center py-2" style={{ borderTop: index === 1 ? '2px dashed white' : 'none' }}>
                  {title && <h3 className='text-theme-color text-xl'>{title}</h3>}
                  {subtitle && <h4 className='text-xl'>{subtitle}</h4>}
                  {text && <p className='text'>{text}</p>}
                </div>
              )
            }
          )}
        </div>
      </div>
      <div></div>
    </div>
  )
}

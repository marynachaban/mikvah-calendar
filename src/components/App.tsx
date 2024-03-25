import React, { useState, useEffect } from 'react'
import moment from 'moment'
import logo from '../assets/logo.svg'

const App = () => {
  const [currentDate, setCurrentDate] = useState<string>('')
  const [currentTime, setCurrentTime] = useState<string>()
  const currentMonth = moment().month() + 1

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
    <div className="min-h-screen bg-bg-color flex px-2">
      {/* Left */}
      <div className="flex flex-col justify-around">
        <div className="border-2 rounded-[20px] border-[white] text-[white] h-1/2 py-4 mt-4">
          <div className="font-bold text-[24px] text-center pb-2">Title</div>
          {['llllllll', 'bbbbbbbb', 'hhhkgyhfjfhhd', 'jchfjccgch', ''].map(
            (content, index) => {
              return (
                <div className="px-20" key={content + index}>
                  {content}
                </div>
              )
            }
          )}
        </div>
        <div className="border-2 rounded-[20px] border-[white] text-[white] h-1/2 py-4 mt-4">
          <div className="font-bold text-[24px] text-center pb-2">Title</div>
          {['llllllll', 'bbbbbbbb', 'hhhkgyhfjfhhd', 'jchfjccgch', ''].map(
            (content, index) => {
              return (
                <div className="px-20" key={content + index}>
                  {content}
                </div>
              )
            }
          )}
        </div>
      </div>
      {/* Center */}
      <div className="grid w-full px-6">
        <div className="text-[white] font-bold mt-8 flex justify-between px-20">
          <div className="w-[110px]">{currentTime}</div>
          <div className="text-center">
            {/* Logo */}
            <img src={logo} alt="Description of the image" />
            <div className="font-thin">{'רֵיקרֵיקרֵיק'}</div>
            <div className="font-bold">{'רֵיק'}</div>
          </div>
          <div>
            <div>{'רֵיק'}</div>
            {currentDate}
          </div>
        </div>
        <div className="px-6">
          <div className="flex justify-between pb-4 px-10 text-[white] text-4xl font-bold">
            <div>{'רֵיק'}</div>
            <div>{'רֵיק'}</div>
          </div>
          <div className="grid grid-cols-4 grid-rows-3 gap-4 ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
              <div
                key={index}
                className={`border-2 border-[white] rounded-[25px] py-2 px-16 text-[white] text-center ${
                  index === currentMonth ? 'border-[yellow]' : ''
                }`}
              >
                {'רֵיק'} <div>{'---'}</div> <div>{'Name'}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex bottom-boxes [&>*:nth-child(n+2)]:ml-4">
          <div className="border-2 rounded-[20px] border-[white] text-[white] py-4">
            <div className="font-bold text-[24px] text-center pb-2">Title</div>
            {['llllllll', 'bbbbbbbb', 'hhhkgyhfjfhhd'].map((content, index) => {
              return (
                <div className="px-20" key={content + index}>
                  {content}
                </div>
              )
            })}
          </div>
          <div className="border-2 rounded-[20px] border-[white] text-[white] py-4">
            <div className="font-bold text-[24px] text-center pb-2">Title</div>
            {['llllllll', 'bbbbbbbb', 'hhhkgyhfjfhhd'].map((content, index) => {
              return (
                <div className="px-20" key={content + index}>
                  {content}
                </div>
              )
            })}
          </div>
          <div className="border-2 rounded-[20px] border-[white] text-[white] py-4">
            <div className="font-bold text-[24px] text-center pb-2">Title</div>
            {['llllllll', 'bbbbbbbb', 'hhhkgyhfjfhhd'].map((content, index) => {
              return (
                <div className="px-20" key={content + index}>
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-col justify-around">
        <div className="border-2 rounded-[20px] border-[white] text-[white] h-1/2 mt-4 py-4">
          <div className="font-bold text-[24px] text-center pb-2">Title</div>
        </div>
        <div className="border-2 rounded-[20px] border-[white] text-[white] h-1/2 mt-4 py-4">
          <div className="font-bold text-[24px] text-center pb-2">Title</div>
          {['llllllll', 'bbbbbbbb', 'hhhkgyhfjfhhd', 'jchfjccgch', ''].map(
            (content, index) => {
              return (
                <div className="px-20" key={content + index}>
                  {content}
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

export default App

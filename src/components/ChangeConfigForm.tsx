// URL: https://api.myzmanim.com/engine1.svc
// EMAIL: danielgoldstein88@gmail.com
// USER: 0015951006
// KEY: 4f9f918abccf853380125662a21b1a2f191934256166b94746c35e5472bb7d3650fa400f1376e4f0


import React, { useState } from 'react'
import { ConfigType } from './Login'
import axios from 'axios';


interface PropsType {
  localConfig: ConfigType
}

export const ChangeConfigForm: React.FC<PropsType> = ({ localConfig }) => {

  const [config, setConfig] = useState(localConfig);

  const submit = async () => {
    axios({
      method: 'post',
      url: 'https://mikvah-back-05daaa072164.herokuapp.com/config',
      data: config
    });
  }


  return (
    <div className='flex flex-col items-center py-6'>
      <button className='bg-theme-color py-2 px-5 rounded-lg' onClick={() => void submit()}>Submit</button>
      <div className='flex max-w-full flex-wrap'>
        {/* Under Logo Text */}
        <div className='m-6 p-4 flex flex-col border rounded-lg'>
          <h1 className='font-bold mb-3'>Under Logo Text</h1>
          <input className='border rounded-lg px-2 mb-3' type="text" value={config.underLogoSponsorText} onChange={(e) => {
            setConfig({
              ...config,
              underLogoSponsorText: e.currentTarget.value
            })
          }} />
          <input className='border rounded-lg px-2' type="text" value={config.underLogoSponsorSubtitle} onChange={(e) => {
            setConfig({
              ...config,
              underLogoSponsorSubtitle: e.currentTarget.value
            })
          }} />
        </div>
        {/* Right Top Banner */}
        <div className='m-6 p-4 flex flex-col border rounded-lg'>
          <h1 className='font-bold mb-3'>Banner photo or gif url</h1>
          <input className='border rounded-lg px-2' type="text" value={config.rightTopMediaContent.fileUrl} onChange={(e) => {
            setConfig({
              ...config,
              rightTopMediaContent: {
                type: "photo",
                fileUrl: e.currentTarget.value
              }
            })
          }} />
        </div>
        {/* Right bottom box content */}
        <div className='m-6 p-4 flex flex-col border rounded-lg '>
          <h1 className='font-bold mb-3'>Right bottom box content</h1>
          {config.rightBottomBox.map(({ title, subtitle, text }, index) => {
            return (
              <div >
                <input className='border rounded-lg px-2 mr-4' value={title} onChange={(e) => {
                  setConfig({
                    ...config,
                    rightBottomBox: config.rightBottomBox.map((val, i) => {
                      return {
                        ...val,
                        title: i === index ? e.currentTarget.value : val.title
                      }
                    })
                  })
                }} />
                <input className='border rounded-lg px-2 mr-4' value={subtitle} onChange={(e) => {
                  setConfig({
                    ...config,
                    rightBottomBox: config.rightBottomBox.map((val, i) => {
                      return {
                        ...val,
                        subtitle: i === index ? e.currentTarget.value : val.subtitle
                      }
                    })
                  })
                }} />
                <input className='border rounded-lg px-2' value={text} onChange={(e) => {
                  setConfig({
                    ...config,
                    rightBottomBox: config.rightBottomBox.map((val, i) => {
                      return {
                        ...val,
                        text: i === index ? e.currentTarget.value : val.text
                      }
                    })
                  })
                }} />
                {config.rightBottomBox.length > 1 && <button onClick={() => setConfig({
                  ...config,
                  rightBottomBox: config.rightBottomBox.filter((_, i) => i !== index)
                })}>Delete</button>}
              </div>
            )
          })}
          {config.rightBottomBox.length !== 2 && <button onClick={() => {
            setConfig({
              ...config,
              rightBottomBox: [...config.rightBottomBox, { title: "", subtitle: "", text: "" }]
            })
          }} className='bg-theme-color py-1 px-2 rounded-lg my-4 w-[100px]'>Add one</button>}
        </div>
        {/* Bottom sponsor text */}
        <div className='m-6 p-4 flex flex-col border rounded-lg'>
          <h1 className='font-bold mb-3'>Sponsor month text</h1>
          <div className='flex'>
            <h2 className='mr-[165px]'>Month</h2>
            <h2>Text</h2> <p> (max 10 words)</p>
          </div>
          {Array.from({ length: 12 }, (_, index) => index + 1).map((_, key) => {
            return <div className='flex items-center py-2'>
              <input className='border rounded-lg px-2 mr-4' value={config.centerPrayersBoxes[key].name} onChange={(e) => {
                setConfig({
                  ...config,
                  centerPrayersBoxes: config.centerPrayersBoxes.map(({ value, name }, index) => {
                    return {
                      value: value,
                      name: index !== key ? name : e.currentTarget.value
                    }
                  })
                })
              }} />
              <input className='border rounded-lg px-2' value={config.centerPrayersBoxes[key].value} onChange={(e) => {
                setConfig({
                  ...config,
                  centerPrayersBoxes: config.centerPrayersBoxes.map(({ value, name }, index) => {
                    return {
                      name: name,
                      value: index !== key ? value : e.currentTarget.value
                    }
                  })
                })
              }} />
            </div>
          })}

        </div>
        {/* Bottom sponsors month */}

        <div className='m-6 p-4 flex flex-col border rounded-lg'>
          <h1 className='font-bold mb-3'>Bottom sponsor text</h1>
          <div className='flex'>
            <h2 className='mr-[165px]'>Month</h2>
            <h2>Text</h2>
          </div>
          {Array.from({ length: 12 }, (_, index) => index + 1).map((_, key) => {
            return <div className='flex items-center py-2'>
              <input className='border rounded-lg px-2 mr-4' value={config.bottomSponsorsBoxesContent[key].name} onChange={(e) => {
                setConfig({
                  ...config,
                  bottomSponsorsBoxesContent: config.bottomSponsorsBoxesContent.map(({ value, name }, index) => {
                    return {
                      value: value,
                      name: index !== key ? name : e.currentTarget.value
                    }
                  })
                })
              }} />
              <input className='border rounded-lg px-2' value={config.bottomSponsorsBoxesContent[key].value} onChange={(e) => {
                setConfig({
                  ...config,
                  bottomSponsorsBoxesContent: config.bottomSponsorsBoxesContent.map(({ value, name }, index) => {
                    return {
                      name: name,
                      value: index !== key ? value : e.currentTarget.value
                    }
                  })
                })
              }} />
            </div>
          })}

        </div>
        {/* Left Top Content Box */}
        <div className='m-6 p-4 flex flex-col border rounded-lg' >
          <h1 className='font-bold mb-3'>Left Top Content Box</h1>
          <div className='flex'>
            <h2 className='mr-[175px]'>Time</h2>
            <h2>Text</h2>
          </div>
          {config.leftTopBoxContent.map(({ time, text }, index) => {

            return <div className='py-2'>
              <input className='border rounded-lg px-2 mr-4' type="text" value={time} onChange={(e) => {
                setConfig({
                  ...config,
                  leftTopBoxContent: config.leftTopBoxContent.map(({ time, text }, i) => {
                    console.log(text);

                    return {
                      time: i !== index ? time : e.currentTarget.value,
                      text
                    }
                  })
                })
              }} />
              <input className='border rounded-lg px-2 mr-3' value={text} onChange={(e) => {
                setConfig({
                  ...config,
                  leftTopBoxContent: config.leftTopBoxContent.map(({ time, text }, i) => {
                    return {
                      time,
                      text: i !== index ? text : e.currentTarget.value,
                    }
                  })
                })
              }} />
              <button className='bg-theme-color py-1 px-2 rounded-lg' onClick={() => setConfig({
                ...config,
                leftTopBoxContent: config.leftTopBoxContent.filter((_, i) => i !== index)
              })}>Delete</button>
            </div>
          })}
          <button className='bg-theme-color p-1 my-2 rounded-lg' onClick={() => setConfig({
            ...config,
            leftTopBoxContent: [...config.leftTopBoxContent, { time: '', text: '' }]
          })}>Add</button>
        </div>
      </div>
      <button className='bg-theme-color py-2 px-5 rounded-lg' onClick={() => void submit()}>Submit</button>
    </div>

  )
}

import React, { useEffect, useState } from 'react'
import { ChangeConfigForm } from './ChangeConfigForm'


export interface ConfigType {
  centerPrayersBoxes: Array<ArrayItem> //
  leftTopBoxContent: Array<LeftTopBoxContent> //
  rightBottomBox: Array<RightBottomContent> //
  underLogoSponsorText: string //
  underLogoSponsorSubtitle: string //
  bottomSponsorsBoxesContent: Array<ArrayItem> // 
  rightTopMediaContent: RightTopMediaContent //
}

export interface ArrayItem {
  name: string
  value?: string
}

export interface RightTopMediaContent {
  type: 'photo' | 'video';
  fileUrl: string;
}

export interface LeftTopBoxContent {
  time: string
  text?: string
}

export interface RightBottomContent {
  title: string
  subtitle?: string
  text?: string
}

export const Login: React.FC<{ config: ConfigType }> = ({ config }) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)


  const handleSubmit = () => {
    if (login !== "1" || password !== "1") {
      return setIsError(true)
    }
    setIsError(false)
    setIsLoggedIn(true)
    setLogin('')
    setPassword('')
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        // Handle Enter key press here
        handleSubmit()
      }
    };

    // Add event listener when component mounts
    document.addEventListener('keydown', handleKeyPress);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (!isLoggedIn) {
    return (
      <>
        {isError && 'You have an error'}
        <div className='flex flex-col items-center gap-5 mt-5'>
          <div>
            <label htmlFor="username">Username or Email:</label>
            <input
              value={login}
              onChange={(e) => setLogin(e.currentTarget.value)}
              className="border rounded-md ml-3"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              className="border rounded-md ml-3"
            />
          </div>
          <button
            onClick={() => handleSubmit()}
            type="submit"
            className="bg-theme-color py-2 px-10 rounded-3xl"
          >
            Login
          </button>
        </div>
      </>
    )
  }

  return <ChangeConfigForm localConfig={config} />
}

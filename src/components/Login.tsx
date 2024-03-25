import React, { useState } from 'react'
import { ChangeConfigForm } from './ChangeConfigForm'
import config from './config.json'

export interface ConfigType {
  monthsPrayers: Array<ArrayItem>
  timesOfPrayer: Array<ArrayItem>
  fileUrl: string
  rightBottomBox: Array<RightBottomContent>
  monthSponsorText: string
  bottomSponsorsContent: Array<ArrayItem>
  login: string
  password: string
}

export interface ArrayItem {
  name: string
  value?: string
}

export interface RightBottomContent {
  title: string
  subtitle?: string
  text?: string
}

export const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const handleSubmit = () => {
    if (login !== config.login || password !== config.password) {
      return setIsError(true)
    }
    setIsError(false)
    setIsLoggedIn(true)
    setLogin('')
    setPassword('')
  }

  if (!isLoggedIn) {
    return (
      <>
        {isError && 'You have an error'}
        <div>
          <label htmlFor="username">Username or Email:</label>
          <input
            value={login}
            onChange={(e) => setLogin(e.currentTarget.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <button
          onClick={() => handleSubmit()}
          type="submit"
          className="bg-[red]"
        >
          Login
        </button>
      </>
    )
  }

  return <ChangeConfigForm config={config as ConfigType} />
}

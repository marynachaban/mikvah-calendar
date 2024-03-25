import React, { useState } from 'react'
import { ConfigType } from './Login'

interface PropsType {
  config: ConfigType
}

export const ChangeConfigForm: React.FC<PropsType> = ({ config }) => {
  const [configToChange, setConfigToChange] = useState<ConfigType>(config)

  const handleSubmit = () => {
    const jsonData = JSON.stringify(configToChange)
    const blob = new Blob([jsonData], { type: 'application/json' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'config.json'
    link.click()

    // Clean up: remove the temporary URL and the link element
    window.URL.revokeObjectURL(url)
  }

  return (
    <div>
      <label>Month sponsor text</label>
      <input
        value={configToChange.monthSponsorText}
        onChange={(e) =>
          setConfigToChange({
            ...configToChange,
            monthSponsorText: e.currentTarget.value
          })
        }
      />
      <button onClick={() => handleSubmit()} type="submit" className="bg-[red]">
        Save changes
      </button>
    </div>
  )
}

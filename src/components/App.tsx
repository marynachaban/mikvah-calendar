import React, { useState, useEffect } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";

import { Main } from './Main'
import "./style.css"
import axios from "axios"
import { Login } from './Login';

export const App: React.FC = () => {
  const [localConfig, setLocalConfig] = useState<any>(null)
  const [zmanimsText, setZmanimsText] = useState<string[]>([])
  const [zmanimsTime, setZmanimsTime] = useState<string[]>([])
  console.log(zmanimsTime, zmanimsText);


  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://mikvah-back-05daaa072164.herokuapp.com/config", {
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      setLocalConfig(data)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://mikvah-back-05daaa072164.herokuapp.com/zmanim")
      const parser = new DOMParser();


      const regex = /<!-- BEGIN ZMANIM TABLE -->(.*?)<!-- END ZMANIM TABLE -->/s;
      const matches = data.match(regex);

      if (matches && matches.length > 1) {

        const doc = parser.parseFromString(matches[1], "text/html");
        const table = doc.getElementsByTagName("table")[0];
        const hebrewArray: string[] = []
        const rows = table.getElementsByTagName("tr");
        const zmanimTime: string[] = []


        for (let i = 0; i < rows.length; i++) {
          const row = rows[i];
          const cells = [...row.getElementsByTagName("td")].filter(cell => cell.textContent && cell.textContent.trim() !== "");;

          if (!row.textContent || row.textContent.trim().length === 0) {
            continue
          }

          const regex = /\d{1,2}:\d{2}:\d{2}/;
          const time = row.textContent.match(regex);

          if (time) {
            zmanimTime.push(time[0])
          }


          cells.forEach((cell, index) => {
            const strongSpan = cell.querySelector("span > strong");
            if (strongSpan && strongSpan.textContent && index) {
              hebrewArray.push(strongSpan.textContent.trim());
            }
          });

        }
        setZmanimsTime(zmanimTime)
        setZmanimsText(hebrewArray)

      } else {
        console.log("No match found.");
      }


    })()
  }, [])


  if (!localConfig) {
    return <div className='min-h-screen text-white bg-bg-color min-w-screen'>text</div>
  }

  return (
    <Routes>
      <Route path="/" element={<Main localConfig={localConfig} zmanimsText={zmanimsText} zmanimsTime={zmanimsTime} />} />
      <Route path="/login" element={<Login config={localConfig} />} />
    </Routes>
  )
}
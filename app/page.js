"use client";
import { useState, useEffect } from "react";

function AnimateASCII(){
  const [simbol, setSimbol] = useState("")
  const simbols = ["!", "|", "+", "?", "-"]
  useEffect(() => {
    let i = 0
    const intervals = setInterval(() => {
      setSimbol(() => {
        if(i > 5) i = 0
        return simbols[i]
      })
      i++
    }, 300)
    
    return () =>  clearInterval(intervals)
  }, [])
  return <span>{simbol}</span>
}

function MyProfile() {
  const [status, setStatus] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((prevStatus) => {
        let newStatus = ""
        if(prevStatus == "text-[#79c0ff]") newStatus = "text-[#fffd79]"
        else if(prevStatus == "text-[#fffd79]") newStatus = "text-[#7ee787]"
        else {newStatus = "text-[#79c0ff]"}
        return newStatus
      })
    }, 500)
    return () => clearInterval(interval)
  }, [])
  return (
        <div className="md:p-8 flex flex-col md:flex-row gap-8 text-sm leading-relaxed justify-center items-center">
          <img src="/my-pixelart.png" alt="pixel-art" style={{height: "230px"}} className="px-7"/>
          <div className="flex-1 min-w-0 text-xs md:text-base">
            <p className="text-[#5c6773] text-center md:text-left"><AnimateASCII/>-----------------------------<AnimateASCII/></p>
            <div className="grid grid-cols-[110px_1fr] gap-y-1.5 mt-3">
              <span className="text-[#79c0ff]">Nama</span>
              <span className="text-[#e6edf3]">: Haiper Alexander</span>
              <span className="text-[#79c0ff]">Peran</span>
              <span className="text-[#e6edf3]">: Full-stack Developer</span>
              <span className="text-[#79c0ff]">Hobi</span>
              <span className="text-[#e6edf3]">
                : Ngoding dan Turu
              </span>
              <span className="text-[#79c0ff]">Lokasi</span>
              <span className="text-[#e6edf3]">: Kamar tidur</span>
              <span className="text-[#79c0ff]">Uptime</span>
              <span className="text-[#e6edf3]">: Ngoding sejak masih jadi Zigot </span>
              <span className="text-[#79c0ff]">Tools</span>
              <span className="text-[#e6edf3]">: VS Code, Docker, Git</span>
              <span className="text-[#79c0ff]">Status</span>
              <span className="text-[#e6edf3]">
                <span className={status}>●</span> online, siap ngoding
              </span>
            </div>

            <p className="text-[#5c6773] mt-3 text-center md:text-left"><AnimateASCII/>-----------------------------<AnimateASCII/></p>
          </div>
        </div>
  );
}

function Typing({value}){
  const [text, setText] = useState("")
  const [isType, setIsType] = useState(true)

  useEffect(()=>{
    let i = 0
    const timer = setInterval(() => {
      if (i < value.length) {
        const char = value[i]
        console.log(value[i], i)
        setText(prevText => prevText + char)
        i++
      } else {
        setIsType(false)
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [value])

  return <span className="text-white">{text}{isType && <span className="animate-pulse">|</span>}</span>
}

function Command({ user = "guest", command }) {
  return (
    <div className="mt-2">
      <span className="text-blue-400">{user}@link-bio</span>
      <span>:~$ </span>
      <Typing value={command}/>
    </div>
  );
}

export default function Home() {
  return (
    <div className="p-6">
      <MyProfile/>
      <Command command="ls -la /links"/>
      <div className="mt-2">
        <a href="https://github.com/Haippp" className="fade1 hover:bg-green-700 text-white inline-block w-full px-4 py-"><span className="text-green-400">1.</span> Github</a>
        <a href="http://linkedin.com/in/hipni-c030324071/" className="fade2 hover:bg-green-700 text-white inline-block w-full px-4 py-"><span className="text-green-400">2.</span> LinkedIn</a>
        <a href="https://www.instagram.com/haiper_alexander/" className="fade3 hover:bg-green-700 text-white inline-block w-full px-4 py-"><span className="text-green-400">3.</span> Instagram</a>
      </div>
    </div>
  );
}

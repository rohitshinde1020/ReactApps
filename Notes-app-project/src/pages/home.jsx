
import { Split } from "lucide-react";

import { useEffect, useState } from "react";

export default function Home() {
  const [Notes, setNotes] = useState([]);

  useEffect(function () {
    fetch('https://opensheet.elk.sh/1BBGGVo-G7F1FXZt2H172PlD_8hZtNhSOkYC8uUKuEQY/Form%20Responses%201')
      .then(Response => Response.json())
      .then(data => setNotes(data))

  }, []);

  function downloadlink(url) {
    const downloadurl = url.split('id=', 2)[1];
    console.log(downloadurl)
    return `https://drive.google.com/uc?export=download&id=${downloadurl}`
    
  }

  

  return (
    <>
      <div className="w-full h-full flex flex-col m-auto absolute top-[64px] p-6">
        <div className="w-full flex flex-col sm:flex-row gap-6 justify-center items-center  mb-7 mt-8 ">
          <p className=" border-gray-500 p-6 font-semibold lg:text-lg sm:text-sm text-center shadow-md">
            Welcome to Notes Khojo / Bhejo 📚
            Find notes shared by fellow students and upload your own to help others.
            One place for quick, reliable, and exam-ready study material.
            Learn together. Grow together.
          </p>
          <img src="https://imgs.search.brave.com/nRcbbyMkuFmHdVKWbBl1nPfhf22iuvxn9UZd-WTFARQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/ZXMuaW8vX25leHQv/aW1hZ2U_dXJsPWh0/dHBzOi8vbm4ydm4z/cDRpb3VwYWw0YS5w/dWJsaWMuYmxvYi52/ZXJjZWwtc3RvcmFn/ZS5jb20vaG9tZXBh/Z2Uvc2hvd2Nhc2Vz/L3BpeG5vLWFzay10/ZXh0Ym9vay13RWgx/bkgyU01VcW5qVXlz/MG11RTIwZFlEMzZn/UXouanBnJnc9Mzg0/MCZxPTc1JmRwbD1k/cGxfQWdjV2dacHlp/N004cVdnNVIyRkhn/VDhlRllXMg"
            alt=""
            className="w-full sm:w-1/2 md:w-2/5 rounded-2xl mt-4 sm:mt-0"
          />
        </div>
        <div>
          <h3 className="font-bold text-xl mb-5">Available Notes</h3>
        </div>
        <div className="flex gap-5 flex-wrap mb-10 w-full ">
          {Notes.map((elem, idx) => (
            <div
              key={idx}
             className="w-full bg-white px-3 py-2 text-sm flex flex-row md:flex-col md:w-[200px] justify-between rounded-xl"


            >
              <h1 className="font-semibold">
                Topic: {elem["Subject/Course Name"]}
              </h1>

              <a
                href={downloadlink(elem["Upload Notes File(s)"])}
                target="_blank"
                rel="noreferrer"
                className="w-1/3 text-center px-3 py-1.5 bg-black text-white rounded-lg flex justify-between items-center text-[10px] sm:text-sm"
              >
                Download link
                <svg className="w-6 h-6 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </a>

              
            </div>
          ))}

        </div>

      </div>
    </>
  )
}
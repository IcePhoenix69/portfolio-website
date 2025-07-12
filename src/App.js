import { useState } from 'react';
import './App.css';

function CollapseBox({title, description}) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className='relative w-128 border border-white rounded-lg p-3 pr-10 shadow-sm '>
        <p>{title}</p>
        {open && (
          <div
            className={`text-left overflow-visible transition-max-height duration-1000 ease-in-out mt-3  max-w-[64rem] break-words ${open ? " opacity-100" : "max-h-0 opacity-0"
              }`}
            style={{ transitionProperty: "max-height, opacity" }}
          >
            <p>{description}</p>
          </div>

        )}
        <button
          className={`absolute bottom-2 right-2 text-2xl transition-transform duration-300 ease-in-out ${open ? "rotate-180" : "rotate-0"
            }`}
          onClick={() => setOpen((check) => !check)}> ▼ </button>
      </div>
    </>
  )
}

function App() {
  const title1 = "Let's talk about myself for a moment:"
  const stringa1 = "I'm a new FSD (Full Stack Developer) from Refresh Academy. For six long month, since 27/01/2025 to 25/07/2025, i'm learning how to be a Web developer for Front-End and Back-End projects. Most of my project are not done in this repo, because i had to work with my teams, but i want to publish them here (when i have time)."
  const title2 = "Right now i'm learning this programming languages:"
  const text_2 = (
    <ul className='list-disc list-inside pl-2'>
      <li>HTML (good)</li>
      <li>CSS (good)</li>
      <li>JS (very good)</li>
      <li>Node.js (ok)</li>
      <li>Express.JS (ok)</li>
      <li>React.js (ok)</li>
      <li>SQL + SQLite (not-so-good)</li>
    </ul>
  )
  return (
    <div className="text-center">
      <div className='bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white text-4xl gap-10'>
        <div className='text-5xl'>
          Welcome to my Portfolio!
        </div>
        <CollapseBox title={title1} description={stringa1}/>
        <CollapseBox title={title2} description={text_2}/>
      </div>
    </div>
  );
}

export default App;

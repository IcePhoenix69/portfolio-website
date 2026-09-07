import { useState } from 'react';
import './App.css';
import Header from './features/header/Header';
import Navbar from './features/navbar/Navbar';
import Myself from './features/main_section/Myself'
import Homepage from './features/main_section/Homepage'
import Skills from './features/main_section/Skills'
import Resume from './features/main_section/Resume'
import Projects from './features/main_section/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Marked for removal
// TODO: Transfer the material into the appropriate section
function CollapseBox({ title, description }) {
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

// TODO: remove the unnecessary material and transfer it into the appropriate section
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
    <>
      <div className="text-center">
        <Router>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/myself" element={<Myself />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Router>
        <div className='min-h-screen flex flex-col items-center justify-center text-white text-4xl gap-10'>
          <CollapseBox title={title1} description={stringa1} />
          <CollapseBox title={title2} description={text_2} />
        </div>
      </div>
    </>
  );
}

export default App;
// TODO: Use the special effects to change the basic layout, from changing buttons to introduce the torch effect.
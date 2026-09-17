import './App.css';
import Myself from './features/main_section/Myself'
import Homepage from './features/main_section/Homepage'
import Skills from './features/main_section/Skills'
import Resume from './features/main_section/Resume'
import Projects from './features/main_section/Projects'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {MainLayout} from "./features/template/MainLayout";

function App() {
    return (
        <>
            <div className="">
                <Router basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path="/" element={<MainLayout/>}>
                            <Route index element={<Homepage/>}/>
                            <Route path="homepage" element={<Homepage/>}/>
                            <Route path="myself" element={<Myself/>}/>
                            <Route path="skills" element={<Skills/>}/>
                            <Route path="projects" element={<Projects/>}/>
                            <Route path="resume" element={<Resume/>}/>
                        </Route>
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;
// TODO: Use the special effects to change the basic layout, from changing buttons to introduce the torch effect.
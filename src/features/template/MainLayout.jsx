import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import {Outlet} from "react-router-dom";

export function MainLayout() {
    return (
        <>
            <div className="app-container">
                <Header/>
                <Navbar/>
                <main>
                    <Outlet/>
                </main>
            </div>
        </>
    )
}
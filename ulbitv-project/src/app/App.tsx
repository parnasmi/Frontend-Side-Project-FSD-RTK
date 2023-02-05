import { Link, Route, Routes } from "react-router-dom";
import { Suspense} from 'react';
import './styles/index.scss'; 
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "../helpers";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";



export default function App() {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app',{} ,[theme] )}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/about">AboutPage</Link></li>
            </ul>
            <Suspense fallback={<>Loading</>}>
            <Routes>
                
                <Route path="/" element={<MainPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
            </Suspense>
        </div>
    )
}
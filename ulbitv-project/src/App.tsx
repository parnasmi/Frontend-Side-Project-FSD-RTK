import { Link, Route, Routes } from "react-router-dom";
import {lazy, Suspense} from 'react';


function lazyLoadingTimeout<T>(dynamicImport: Promise<T>, countMSec: number): Promise<T>{
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve(dynamicImport)}, countMSec);
    })
};

const AboutPage = lazy(() => lazyLoadingTimeout(import('./pages/AboutPage'), 1000));
const MainPage = lazy(() => lazyLoadingTimeout(import('./pages/MainPage'), 1000));

import './style.scss'; 
export default function App() {

    return (
        <>
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
        </>
    )
}
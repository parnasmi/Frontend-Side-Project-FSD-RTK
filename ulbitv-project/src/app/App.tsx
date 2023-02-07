import { Link } from "react-router-dom";
import './styles/index.scss'; 
import { classNames } from "../helpers";
import AppRouter from "app/providers/router";
import { useTheme } from "shared/contexts/theme-context";



export default function App() {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app',{} ,[theme] )}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/about">AboutPage</Link></li>
            </ul>
            <AppRouter/>
        </div>
    )
}
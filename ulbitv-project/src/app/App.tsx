import './styles/index.scss'; 
import AppRouter from "app/providers/router";
import { useTheme } from "shared/contexts/theme-context";
import { Navbar } from "widgets";
import { classNames } from 'shared/libs';


export default function App() {

    const {theme} = useTheme();

    return (
        <div className={classNames('app',{} ,[theme] )}>
            <Navbar/>
            <AppRouter/>
        </div>
    )
}
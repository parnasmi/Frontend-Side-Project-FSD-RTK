import {useState} from 'react';
import classes from './Counter.module.scss';

export function Counter() {

    const [count, setCount] = useState(0)



    return (
        <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count => count +1)} className={classes.btn}>
            Increment
        </button>
        </>
    )
}
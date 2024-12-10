import React, { useState, useEffect, useRef } from 'react'

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapasedTime, setElapasedTime] = useState(0);
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)

    useEffect(() => {
        if (isRunning) {

            intervalIdRef.current = setInterval(() => {
                setElapasedTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        return () => {
            clearInterval(intervalIdRef.current)
        }

    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapasedTime;
    }
    function stop() {
        setIsRunning(false);
    }
    function reset() {
        setElapasedTime(0);
        setIsRunning(false);
    }
    function formatTime() {
        let hours = Math.floor(elapasedTime / (1000 * 60 * 60));

        let minutes = Math.floor(elapasedTime / (100060) % 60);

        let seconds = Math.floor(elapasedTime / (1000) % 60);

        let milliseconds = Math.floor((elapasedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");

        minutes = String(minutes).padStart(2, "0");

        seconds = String(seconds).padStart(2, "0");

        milliseconds = String(milliseconds).padStart(2, "0")

        return `${minutes}:${seconds}:${milliseconds}`;
    }




    return (
        <div className="stopwatch">
            <div className="stopwatch-timings">{formatTime()}</div>
            <div className="content"><button onClick={start} className='start-btn'>Start</button>
                <button onClick={stop} className='stop-btn'>Stop</button>
                <button onClick={reset} className='reset-btn'>Reset</button></div>

        </div>
    )
}

export default Stopwatch
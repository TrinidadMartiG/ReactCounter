import './App.css';
import React, { useState, useEffect } from 'react';


const SecondsCounter = ({ props }) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds + 1);
            if (seconds === 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
            }
        }, 1000);

        return () => clearInterval(timer)
    });

    const restart = () => {
        setSeconds(0);
        setMinutes(0);
    }
    const stop = () => {
        clearInterval(timer);

    }
    const resume = () =>{
        return () => clearInterval(timer)

    }

    return (
        <div className="container">
            <div className="card my-5 bg-secondary">
                <div className="container">
                    <div>
                    <h1 className='text-center my-5'>Timer</h1>
                    <h1 className='text-center'>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h1>
                    </div>
                    <div className='d-flex justify-content-center my-4'>
                        <button type="button" className="btn btn-danger" onClick={restart}>Restart</button>
                        <button type="button" className="btn btn-danger" onClick={stop}>Stop</button>
{/*                         <button type="button" className="btn btn-danger" onClick={resume}>Resume</button>
 */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondsCounter;

import React from 'react';
import timeicon from './images/timeicon.png';
//import usestate hook from react
import {useState, useEffect} from 'react';



const imgStyle = {
    'height': '30px',
    'width': '30px',
    'marginTop': '5px'
}



export default function BasicTimer() {
    let my = 20;
    const [state, setstate] = useState(0)
    const countDown = () =>{
        setstate(prevState => state + 1)
    }
    let myInterval;
    useEffect(() => {
        myInterval = setInterval(countDown, 1000)
        return () => {
            clearInterval(myInterval)
        }
    }, [state])
    return (
        <div >
            <div className='basic-clock-header'>
                <img src={timeicon} alt="" style={imgStyle} />
                <h3>React Timer</h3>
            </div>
            <div className='timer' >
                <div className='timer-inner' >
                    <h4 className='stopwatch-rundown'>{state}</h4>
                    <h4 className='stopwatch-seconds'><input type="number" name=""  /></h4>
                    <div className='stopwatch-play-and-reset-div'>
                        <div className='stopwatch-play'>
                            <button className='stopwatch-play-button' onClick={countDown} >play</button>
                        </div>
                        <div className='stopwatch-reset'>
                            <button className='stopwatch-reset-button' >reset</button>
                        </div>
                    </div>
                </div>
            </div>
            <pre>Click the middle of the circle and input <br/> countdown time in minutes</pre>
        </div>
    )
}

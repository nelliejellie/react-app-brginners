import React from 'react';
import timeicon from './images/timeicon.png';
//import usestate hook from react
import {useState} from 'react';



const imgStyle = {
    'height': '30px',
    'width': '30px',
    'marginTop': '5px'
}



export default function BasicTimer() {
    var initialState = 0;
    const [state, setstate] = useState(initialState)
    var seconds = state * 60;
    
    return (
        <div >
            <div className='basic-clock-header'>
                <img src={timeicon} alt="" style={imgStyle} />
                <h3>React Timer</h3>
            </div>
            <div className='timer' >
                <div className='timer-inner' >
                    <h4 className='stopwatch-rundown'>{seconds}</h4>
                    <h4 className='stopwatch-seconds'><input type="number" name="" value={state} onChange={e => setstate(e.target.value)} /></h4>
                    <div className='stopwatch-play-and-reset-div'>
                        <div className='stopwatch-play'>
                            <button className='stopwatch-play-button' >play</button>
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

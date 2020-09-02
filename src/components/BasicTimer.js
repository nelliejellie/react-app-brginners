import React from 'react';
import timeicon from './images/timeicon.png';


const imgStyle = {
    'height': '30px',
    'width': '30px',
    'marginTop': '5px'
}



export default function BasicTimer() {
    const Input = <input type="text" name="" id=""/>
    return (
        <div >
            <div className='basic-clock-header'>
                <img src={timeicon} alt="" style={imgStyle} />
                <h3>React Timer</h3>
            </div>
            <div className='timer' >
                <div className='timer-inner' >
                    <h4 className='stopwatch-rundown'>00:00:00</h4>
                    <h4 className='stopwatch-seconds'>{Input}</h4>
                    <div className='stopwatch-play-and-reset-div'>
                        <div className='stopwatch-play'>
                            <button className='stopwatch-play-button'>play</button>
                        </div>
                        <div className='stopwatch-reset'>
                            <button className='stopwatch-reset-button'>reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

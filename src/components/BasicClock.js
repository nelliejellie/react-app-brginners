import React from 'react';
import timefont from './images/timefont.jpg';
import calendar from './images/calendar.png';
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import Switch from 'react-switch'


const imgStyle = {
    'height': '30px',
    'width': '30px',
    'marginTop': '5px'
}
const imgStyleTwo = {
    'height': '30px',
    'width': '30px',
    'marginLeft': '5px',
}

export default function BasicClock() {
    const [state, setState] =  useState(false)

    const toggleSwitch = () =>{
        setState(!state)
        console.log('switch changed')
    }
    return (
        <div className='basic-clock-container'>
            <div className='basic-clock-header'>
                <img src={timefont} alt="" style={imgStyle}/>
                <h3>React Clock</h3>
            </div>
            <div className='basic-clock-body'>
                <div className='basic-clock-first'>
                    <Switch onChange={toggleSwitch} checked={state} />
                    <img src={calendar} alt="" style={imgStyleTwo}/>      
                </div>
            </div>
            <div className='clock'>
                <div className='clock-inner'>time</div>
            </div>
        </div>
    )
}

import React, {useState} from 'react';
import clicker from './images/clicker.png'

const imgStyle = {
    'height': '30px',
    'width': '30px',
    'marginTop': '5px'
}

function Clicker() {

    const [counter, setCounter] = useState(0)
    const addCounter = () =>{
        setCounter(counter + 1)
    }
    const minusCounter = () =>{
        setCounter(counter - 1)
    }
    const resetCounter = () =>{
        setCounter(0)
    }
    return (
        <div >
            <div className='react-clicker-header'>
                <span><img src={clicker} alt="" style={imgStyle} /></span> React Clicker
            </div>
            <div className='react-clicker'>
                <div className='counter-div'>
                    {counter}
                </div>
                <div className='arithmetic-div'>
                    <div className='plus-counter'>
                        <button className='button-plus' onClick={addCounter}>+</button>
                    </div>
                    <div className='reset-counter'>
                        <button className='button-minus' onClick={resetCounter}>reset</button>
                    </div>
                    <div className='minus-counter'>
                        <button className='button-reset' onClick={minusCounter}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clicker;

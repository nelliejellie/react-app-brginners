import React from 'react'
import {useState, useEffect} from 'react'; 

function FetchData() {
    //when expecting an array
    const [posts, setposts] = useState([])

    //when expecting a single object
    const [state, setstate] = useState({})

    useEffect(function(){
        console.log('data')
        getData()
    }, [])

    //async function to get data
    const getData = async()=>{
        //var res =  await fetch('https://jsonplaceholder.typicode.com/posts/')
        var res =  await fetch('http://jsonplaceholder.typicode.com/users/1')
        var state =  await res.json()
        setstate(state)
        console.log(state)
    }
    let val = ['hd','huss']
    return (
        <div>
            {state.name}    
        </div>
    )
}

export default FetchData

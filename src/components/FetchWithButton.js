import React from 'react'
import {useState, useEffect} from 'react';

function FetchWithButton() {
    const [state, setstate] = useState(0)
    const [user, setuser] = useState({})
    const [fetcher, setfetcher] = useState(0)

    useEffect(function(){
        getData()
    },[fetcher])

    // get data function
    const getData = async () =>{
        var res =  await fetch(`http://jsonplaceholder.typicode.com/users/${state}`)
        var user =  await res.json()
        setuser(user)
        console.log(user)
    }

    // get the click function
    const clicker = () =>{
        setfetcher(state)
    }
    return (
        <div>
            <input type="text" value={state} onChange={(e) => setstate(e.target.value)}/>
            <button onClick={clicker}>fetch</button>
            <h6>{user.name}</h6>
            <h6>{user.email}</h6>
            <h6>{user.website}</h6>


        </div>
    )
}

export default FetchWithButton

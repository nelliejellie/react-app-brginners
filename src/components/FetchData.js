import React from 'react'
import {useState, useEffect} from 'react'; 

function FetchData() {
    //when expecting an array
    const [users, setusers] = useState([])

    //when expecting a single object
    const [state, setstate] = useState({})

    useEffect(function(){
        console.log('data')
        getData()
    }, [])

    //async function to get data
    const getData = async()=>{
        var res =  await fetch('https://jsonplaceholder.typicode.com/users/')
        //var res =  await fetch('http://jsonplaceholder.typicode.com/users/1')
        var users =  await res.json()
        setusers(users)
        console.log(users)
    }

    return (
        <div>
            {
                users.map(user =>(
                    <li key={user.id}>{user.name}</li>
                    ))
            }   
        </div>
    )
}

export default FetchData

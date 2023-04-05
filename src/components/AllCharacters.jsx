import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../styles/AllCharacters.css'

function AllCharacters() {

    const [ characters, setCharacteres] = useState([])

    useEffect(() =>{
        fetch("https://rickandmortyapi.com/api/character")
        .then((res)=>res.json())
        .then((data)=>setCharacteres(data.results))
    },[])

    return (
        <>
        {characters.map((character)=>{
            return(
                <div key={character.id}>
                    <p>{character.name}</p>
                    <Link to ={`/character/${character.id}`}> <img  src={character.image} alt={character.name} className='pic'/> </Link>
                </div>
            )
        })}
        
        </>
        )
    }

export default AllCharacters
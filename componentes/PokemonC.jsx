import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Ejercicio2pokemon = () => {
                //para que no de id 0 ya que no hay pokemon con esa id +1
    const [id,setId]=useState(Math.floor(Math.random()*600)+1)
    const [poke,setPoke]=useState({})
    const [isDecimeters,setDecimeters]=useState(true)
    

useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res=>setPoke(res.data))
    .catch(()=>{
        alert("introduzca una id")
    console.error()
    })
},[id])

const cambioBuscador=(e)=>{
    setId(e.target.value)
}

const backzzz=(poke)=>{
    switch(poke.types?.[0].type.name){
        case "water":
            return "linear-gradient(black,blue)"
        break
        case "fire":
            return "linear-gradient(black,red)"
        break
        case "grass":
            return "linear-gradient(black,green)"
        break
        case "electric":
            return "linear-gradient(black,yellow)"
        break
        case "poison":
            return "linear-gradient(black,purple)"
        break
        case "steel":
            return "linear-gradient(black,white)"
        break
        case "bug":
            return "linear-gradient(black,greenyellow)"
        break
        case "normal":
            return "linear-gradient(black,rgb(80, 60, 67)"
        break
        case "psychic":
            return "linear-gradient(black,pink"
    }
}

    return (
        <article className='pokemon' style={{background:backzzz(poke)}}>
            <div className='colum-objetos'>
            <h2>{poke.name}</h2>
            <img src={poke.sprites?.front_shiny} alt=''/>
            </div>
            <div className='colum-objetos'>
            <p>weight: {isDecimeters?poke.weight+" Hetogramos":poke.weight/10+" KG"}</p>
        {/* transformar decimetros entre metros*/}
            <p>height: {isDecimeters?poke.height+" Decimeters":poke.height/10+" Meter"}</p>
            <small>Tipo:{poke.types?.[0].type.name} {poke.types?.[1]?.type.name}</small>
            <button onClick={()=>setDecimeters(!isDecimeters)}>Meters/Kg</button>
            <button  onClick={()=>setId(Math.floor(Math.random()*600))}>Cambiar Poke:3</button>
           <div className='buscador'>
             <small>procurar poner numeros ya que son por id,en total son 906ID</small>
            <p>Buscador de Id</p>
            <input type="text" value={id} onChange={cambioBuscador}/>
            </div>
            </div>
        </article>
    );
};

export default Ejercicio2pokemon;
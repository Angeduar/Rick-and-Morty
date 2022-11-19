import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

 export default function Detail(props) {
    
    const id = useParams();
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id.detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [id]);

    return (
    <div style={{display: 'flex' , justifyContent: 'space-evenly', padding: '30px', color:'red'}}>
        <h2>{character.name}</h2>
        <h2>{character.status}</h2>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.origin?.name}</h2>
        <img src={character.image} alt={character.name}/>
    </div>
    );
 }
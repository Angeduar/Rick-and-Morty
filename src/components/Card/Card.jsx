import style from "./Card.module.css";
import {Link} from 'react-router-dom';

export default function Card(props) {
   return (
      <div className = {style.prueba}>

         <div className={style.button1}>
            <button onClick={props.onClose}>X</button>
         </div>
         <Link to={`/detail/${props.detailId}`}>
            <h2>{props.name}</h2>
         </Link>
         <img className={style.image} src={props.image} alt={props.name} />
         <div className={style.data}>
            <h4>Specie: {props.species}</h4>
            <h4>Gender: {props.gender}</h4>
         </div>
      </div>
   );
}
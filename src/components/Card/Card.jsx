import style from "./Card.module.css";

export default function Card(props) {
   return (
      <div className = {style.prueba}>
         <div className={style.button1}>
            <button onClick={props.onClose}>X</button>
         </div>
         <h2>{props.name}</h2>
         <img className={style.image} src={props.image} alt={props.name} />
         <div className={style.data}>
            <h4>{props.species}</h4>
            <h4>{props.gender}</h4>
         </div>
      </div>
   );
}
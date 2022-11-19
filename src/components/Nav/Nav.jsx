import SearchBar from '../SearchBar/SearchBar.jsx'
import style from "./Nav.module.css";
import { Link } from 'react-router-dom';

export default function Nav(props) {
   return (
   <div className={style.container}>
      <div className={style.link}>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
      </div>
      <div className={style.bar}>
         <SearchBar onSearch={props.onSearch}/>
      </div>
   </div>
    );
 }

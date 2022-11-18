import SearchBar from '../SearchBar/SearchBar.jsx'
import style from "./Nav.module.css";

export default function Nav(props) {
    return (
   <div className={style.container}>
      <div>
         <SearchBar onSearch={props.onSearch}/>
      </div>
   </div>
    );
 }

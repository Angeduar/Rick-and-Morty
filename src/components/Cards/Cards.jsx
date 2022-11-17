import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div style={{display: 'flex' , justifyContent: 'space-evenly'}}>
      {characters.map((e) => {
         return <Card
         key = {e.name} 
         name={e.name}
         species={e.species}
         gender={e.gender}
         image={e.image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      })}
   </div>
   );
}

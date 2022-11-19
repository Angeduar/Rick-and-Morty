import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div style={{display: 'flex' , justifyContent: 'space-evenly', padding: '30px'}}>
      {characters.map(e => {
         return <Card
         detailId={e.id}
         key = {e.name} 
         name={e.name}
         species={e.species}
         gender={e.gender}
         image={e.image}
         onClose={() => props.onClose(e.id)}
         />
      })}
   </div>
   );
}

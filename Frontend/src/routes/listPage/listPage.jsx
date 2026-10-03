import './listPage.scss'
import { listData} from '../../lib/dummyData.js';
import Filter from '../../Components/Filter/Filter.jsx';
import Card from '../../Components/Card/card.jsx';
import Map from '../../Components/Map/map.jsx';

const ListPage = () => {
  const data = listData;
  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          {data.map((item)=>
          <Card key={item.id} item={item}/>
          )}
        </div> 
      </div>  
      <div className="mapContainer">
        <Map items={data}/>
      </div>  
    </div>
    )
}    

export default ListPage
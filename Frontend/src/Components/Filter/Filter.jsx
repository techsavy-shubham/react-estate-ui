import './filter.scss'

function Filter(){
  return (
    <div className='filter'>
      <h1>Search results for <b>London</b></h1>
      <div className="top">
        <div className="item"> 
        <label htmlFor="city">Location</label>
        <input type="text" id='city' placeholder='City Location'/>
        </div>
      </div>
      <div className="bottom">
        <div className="item"> 
        <label htmlFor="type">Type</label>
         <select name='type' id='type'>
          <option value=''>Any</option>
          <option value='Buy'>Buy</option>
          <option value='Rent'>Rent</option>
          </select>       
        </div>
        <div className="item"> 
        <label htmlFor="property">Property</label>
        <select name='type' id='type'>
          <option value=''>Any</option>
          <option value='apartment'>Apartment</option>
          <option value='house'>House</option>
          <option value='condo'>Condo</option>
          <option value='land'>Land</option>
        </select>
        </div>
        <div className="item"> 
        <label htmlFor="minPrice">MinPrice</label>
        <input type="number" id='minPrice' name='minPrice' placeholder='Any'/>
        </div>
        <div className="item"> 
        <label htmlFor="maxPrice">maxPrice</label>
        <input type="number" id='maxPrice' placeholder='Any'/>
        </div>
        <div className="item"> 
        <label htmlFor="bedroom">Bedroom</label>
        <input type="text" id='bedroom' name='bedroom' placeholder='any'/>
        </div>
        
        <button><img src='/search.png'/></button>
      </div>
    </div>
  )
}

export default Filter
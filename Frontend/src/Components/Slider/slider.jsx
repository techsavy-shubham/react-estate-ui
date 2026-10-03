import './slider.scss'
import { useState } from 'react';

function Slider({images}){

    const [imgIndex,setImageIndex]=useState(null);

    const changeSlide=(direction) => {
        if(direction=='left'){
              if(imgIndex==0){
                setImageIndex(imgIndex.length -1 );
              }
              else{
                setImageIndex(imgIndex-1)
              }
        }
        else{
           if(imgIndex==imgIndex.length -1 ){
              setImageIndex(0);
           }
           else{
               setImageIndex(imgIndex+1)
           }
        }
    }
  return (
    <div className='slider'>
        {imgIndex !=null && <div className="fullSlider">
            <div className="arrow" onClick={()=>changeSlide("left")}>
                <img src='./arrow.png' alt=''/>
            </div>
            <div className="imgContainer">
                <img src={images[imgIndex]} alt=''/>
            </div>
            <div className="arrow" onClick={()=>changeSlide("right")}>
                <img src='./arrow.png' className='right' alt='' />
            </div>
            <div className="close" onClick={()=>setImageIndex(null)}>X</div>
        </div>}
    <div className="bigImage">
        <img src={images[0]} alt='' onClick={()=>setImageIndex(0)}/>
    </div>
    <div className="smallImages">
        {images.slice(1).map((item,index) =>(
            <img src={item} alt='' key={index} onClick={()=>setImageIndex(index+1)}/>
        )
        )}
    </div>
    </div>
  )
}

export default Slider
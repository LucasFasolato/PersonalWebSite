import {useState, useEffect} from 'react';
import './goToTopBttn.css';
import upArrow from './up-arrow.png'

export default function GoToTopBtnn() {
    const [isVisible, setIsVisible] = useState(true);
    const [height, setHeight] = useState(0)
    
    useEffect(() => {   
      window.addEventListener("scroll", listenToScroll);
      return () => 
         window.removeEventListener("scroll", listenToScroll); 
    }, [])
    
    const listenToScroll = () => {
      let heightToHideFrom = 200;
      const winScroll = document.body.scrollTop || 
          document.documentElement.scrollTop;
      setHeight(winScroll);
  
      if (winScroll < heightToHideFrom) {  
           isVisible && setIsVisible(false);
      } else {
           setIsVisible(true);
      }  
    };
  
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <>
    {
        isVisible && 
        <button
            onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}
            className='upArrow'
        >
            <img src={upArrow} alt='Flecha para volver arriba de todo' className='upArrow-img'/>
        </button>
    }
  </>
      
  );
}
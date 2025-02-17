import { motion } from 'framer-motion'
import { useState , useEffect , useRef } from 'react'
import images from './images'
import './App.css'

function App() {
 const [width , setwidth] = useState(0);
 const carouselRef =useRef();
 useEffect(() =>{
  setwidth( carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
 }
 ,[]
)
  return (
    <>
      <motion.div ref={carouselRef} className="carousel" whileTap={{ cursor:"grabbing" }}>
        <motion.div drag='x' dragConstraints={{ right:0 , left:-width }} className="inner-carousel">
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt='image-slider' className='slider'/>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  )
}

export default App

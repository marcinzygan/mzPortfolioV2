import React from "react"
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";




export default function Slider(props){

    // Set State for slider
    const [currentSlide , setCurrentSlide] = React.useState(0)
    const sliderLength = props.images.length

// Map over all data images and create img component for each item 
    const allImages = props.images.map((image , index) => {
        return(
        <div className={index === currentSlide ? "slide__active" : "slide"} key={index}>
            
           {index ===  currentSlide &&  
           <motion.img 
           src={image} 
           className="slider__img" 
           alt={props.name +1} 
           initial={"hidden"}
           whileInView={"visible"}
           viewport={{ once: true }}
           variants={{
              visible: { opacity: 1, y:0 , transition:{ duration: 0.5 , delay: 0.1}},
              hidden: { opacity: 0, y:10 }
            }}
           >
           </motion.img>} 
       
        </div>
        )
    })

    if(!Array.isArray(props.images) || sliderLength <=0){
        return null
    }

    // Function for next image , if current image is equal to array lenght then back to slide 0 if not go to next slide 
    const nextSlide = () => {
        setCurrentSlide (currentSlide === sliderLength -1 ? 0 : currentSlide +1)
        
    }
    const prevSlide = () => {
        setCurrentSlide (currentSlide === 0 ? sliderLength -1 : currentSlide -1)
        
    }
    function moveDot(index) {
        setCurrentSlide(index)
    }


// Map over all data images and create div (dot) component for each item 
    
const imagesDots = props.images.map((image , index) => 
<div 
    className={currentSlide === index ? "dot__link-selected dot__link" : "dot__link"} 
    key={index} 
    onClick={()=> moveDot(index)}
    >
     </div> 
)

    return(
        <div className="slider__container">

        {/* <div className="slider__container"> */}
            
            {allImages}
            
        {/* </div> */}

        <div className="sliderButtons__container">
        <Icon icon="akar-icons:arrow-left" className="slider__arrow left" onClick={prevSlide}/> 
        
            {imagesDots}
        
        <Icon icon="akar-icons:arrow-right" className="slider__arrow right" onClick={nextSlide}/>
        </div>
        </div>
    )
}
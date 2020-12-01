import React, {useState} from 'react'
import {HeroContainer, HeroBtnWrapper, HeroContent, ArrowForward, ArrowRight} from './HeroElements'
import {Button} from '../ButtonElement'
import {motion} from 'framer-motion'
import Typewriter from 'typewriter-effect';
import './intro.scss';



const HeroSection = () => {
   

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
        
       
        <HeroContainer>
        
           
             <HeroContent>

             
     <motion.div className="content"
     initial={{opacity:0}}
     animate ={{opacity:1}}
     transition={{delay:1.2, duration:1.2}}>
  <div className="content__container">

  <Typewriter
  options={{
    strings: ['Hello!','This is Nischal','Full stack developer'],
    autoStart: true,
    loop: true,
    
  }}
  
/>
    
  </div>
</motion.div>


<motion.div
             initial={{x: '-100vw'}}
             animate={{x:0}}
             transition={{type:'spring', delay:1.2, duration:1.2}}
            >
                <HeroBtnWrapper>
                    <Button to="/terminal" onMouseEnter ={onHover} onMouseLeave={onHover}
                    primary='true' dark='true'
                    >
                        Terminal {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
                </motion.div>
                </HeroContent>

        </HeroContainer>
        
        </>
    )


}

export default HeroSection

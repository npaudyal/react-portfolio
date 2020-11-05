import React, {useState} from 'react'
import {HeroContainer, HeroBtnWrapper, HeroContent, ArrowForward, ArrowRight} from './HeroElements'
import {Button} from '../ButtonElement'
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

             
     <div className="content">
  <div className="content__container">

  <Typewriter
  options={{
    strings: ['Hello!','This is Nischal','Full stack developer'],
    autoStart: true,
    loop: true,
    
  }}
  
/>
    
  </div>
</div>



                <HeroBtnWrapper>
                    <Button to="/terminal" onMouseEnter ={onHover} onMouseLeave={onHover}
                    primary='true' dark='true'
                    >
                        Terminal {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
                </HeroContent>

        </HeroContainer>
        
        </>
    )


}

export default HeroSection

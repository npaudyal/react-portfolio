import React, {useState, useEffect} from 'react'
import Video from '../../video/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroBtnWrapper, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight} from './HeroElements'
import {Button} from '../ButtonElement'
import Typewriter from 'typewriter-effect';
import './intro.scss';



const HeroSection = () => {
   

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
             </HeroBg>
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
    
    {/* <ul className="content__container__list">
      <li className="content__container__list__item">world !</li>
      <li className="content__container__list__item">bob !</li>
      <li className="content__container__list__item">users !</li>
      <li className="content__container__list__item">everybody</li>
    </ul> */}
  </div>
</div>



                <HeroBtnWrapper>
                    <Button to="terminal" onMouseEnter ={onHover} onMouseLeave={onHover}
                    primary='true' dark='true'
                    >
                        Terminal {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )


}

export default HeroSection

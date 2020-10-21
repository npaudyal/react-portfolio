import React, {useState} from 'react'
import './news.scss'
import ParticlesBackground from '../particleComponent'
import Sidebar from'../Sidebar';
import Navbar from '../navbar';
import styled from 'styled-components';

import Jodi from '../../images2/Jodi.png'


export const ImageWrapper = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;

`

export const ImageContainer = styled.div`
    height:100vh;
    width:80%;
    display:flex;
    
    padding-bottom:5%;
    
    justify-content:center;
    align-items:center;
    background: #010606;

    @media screen and (max-width:768px) {
        height:1100px;
 
    }

    @media screen and (max-width:480px) {
        height:1200px;
 
    }
`


// const NewProject = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggle = () => {
//         setIsOpen(!isOpen)
//     }
//     return (
//         <>
//         <ParticlesBackground />
//         <Sidebar isOpen ={isOpen} toggle ={toggle}/>
//         <Navbar toggle={toggle}/>

//         <ImageContainer>

// <figure class="snip1584"><img src={Jodi} alt="sample87"/>
//   <figcaption>
//     <h3>Burgundy Flemming</h3>
//     <h5>Advertising</h5>
//   </figcaption><a href="#"></a>
// </figure>


// </ImageContainer>

// <ImageContainer>
// <figure class="snip1584"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg" alt="sample120"/>
//   <figcaption>
//     <h3>Caspian Bellevedere</h3>
//     <h5>Accounting</h5>
//   </figcaption><a href="#"></a>
// </figure>
// </ImageContainer>
//         </>
//     )
// }

// export default NewProject
const slides = [
    {
      eachSlide: `url(${Jodi})`,
    },
    {
      eachSlide: 'url(https://unsplash.it/1900/1024/?image=291)',
    },
    {
      eachSlide: 'url(https://unsplash.it/1900/1024/?image=786)',
    },
    {
      eachSlide: 'url(https://unsplash.it/1900/1024/?image=768)',
    },
    {
      eachSlide: 'url(https://unsplash.it/1900/1024/?image=726)',
    },
    {
      eachSlide: 'url(https://unsplash.it/1900/1024/?image=821)',
    }
];
console.log(slides)
const Slider = () => {
    const [active, setActive] = React.useState(0);
    const [autoplay, setAutoplay] = React.useState(0);
    const max = slides.length;

    const intervalBetweenSlides = () => autoplay && setActive(active === max - 1 ? 0 : active + 1)

    React.useEffect(() => {
        const interval = setInterval( () => intervalBetweenSlides(), 3000);
        return () => clearInterval(interval);
    });

    const toggleAutoPlay = () => setAutoplay(!autoplay)

    const nextOne = () => active < max - 1 && setActive(active + 1)

    const prevOne = () => active > 0 && setActive(active - 1)

    const isActive = value => active === value && 'active'

    const setSliderStyles = () => {
        const transition = active * - 100;
        
        return {
          width: ( slides.length * 100 ) + 'vw',
          transform: 'translateX(' + transition + 'vw)'
        }
    }

    const renderSlides = () => slides.map((item, index) => (
        <div 
            className='each-slide' 
            key={ index } 
            style={{ backgroundImage: item.eachSlide }}>
        </div> 
    ));

    const renderDots = () => slides.map((silde, index) => ( // check index
        <li 
            className={ isActive(index) + ' dots' }   
            key={ index }>
                <button onClick={ () => setActive(index) }>
                    <span>&#9679;</span>
                </button>
        </li> 
    ));

  

    const renderPlayStop = () => autoplay
        ? (
            <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                <path d='M0 0h24v24H0z' fill='none'/>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'/>
            </svg> 
        )
        : (
            <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                    <path d='M0 0h24v24H0z' fill='none'/>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
            </svg>
        )

    const renderArrows = () => (
        <React.Fragment>
            <button 
                type='button'
                className='arrows prev' 
                onClick={ () => prevOne() } >
                <svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
                    <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
                    <path d='M0 0h24v24H0z' fill='none'/>
                </svg>
            </button>
            <button 
                type='button'
                className='arrows next' 
                onClick={ () => nextOne() } > 
                <svg fill='#FFFFFF' height='50' viewBox='0 0 24 24' width='50'>
                    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
                    <path d='M0 0h24v24H0z' fill='none'/>
                </svg>
            </button>
        </React.Fragment>
    )

        const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
                 <ParticlesBackground />
        <Sidebar isOpen ={isOpen} toggle ={toggle}/>
         <Navbar toggle={toggle}/>
    <ImageWrapper>
        <ImageContainer>
        <section className='slider'>
            <div 
                className='wrapper' 
                style={ setSliderStyles() }>
                { renderSlides() }
            </div>
            { renderArrows() }
            <ul className='dots-container'>
                { renderDots() }
            </ul>
            <button 
                type='button'
                className='toggle-play' 
                onClick={ toggleAutoPlay }> 
                { renderPlayStop() }
            </button>
        
        </section>
        </ImageContainer>
        </ImageWrapper>
        </>
    
    );
};
  
export default Slider
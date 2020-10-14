import React from 'react'

import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {ServicesContainer, ServicesH1, ServicesH2,ServicesP, ServicesCard, ServicesWrapper, ServicesIcon} from './ProjectsElements'

const Projects = () => {
    return (
        <>
         <ServicesContainer id="services">
        <ServicesH1>My Works</ServicesH1>
           
     

            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src= {Icon1} />
                    <ServicesH2>Blah Blah Blah</ServicesH2>
                    <ServicesP>
                        assakdahjiksdjaksd kasdj kasdjkasdjka aksdjaksdjakdjasdkjasd.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src= {Icon2} />
                    <ServicesH2>Blah Blah Blah</ServicesH2>
                    <ServicesP>
                        assakdahjiksdjaksd kasdj kasdjkasdjka aksdjaksdjakdjasdkjasd.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src= {Icon3} />
                    <ServicesH2>Blah Blah Blah</ServicesH2>
                    <ServicesP>
                        assakdahjiksdjaksd kasdj kasdjkasdjka aksdjaksdjakdjasdkjasd.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper> 
         </ServicesContainer>
         </>
 
    )
}

export default Projects

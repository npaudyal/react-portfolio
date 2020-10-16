import React, { Component } from 'react';
import Particles from 'react-particles-js';


class ParticlesBackground extends Component {

    render() {
        return (
            
            <Particles 
            params={{
                "particles": {
                  "number": {
                    "value": 100,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  
                  "shape": {
                    "type": "triangle",
                    "stroke": {
                      "width": 0,
                      "color": "#cd6666"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                  
                  },
                  
                  "size": {
                    "value": 0.8,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 38.36163836163836,
                      "size_min": 1.5984015984015985,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 80,
                    "color": "#ffffff",
                    "opacity": 0.1736124811591,
                    "width": 0.3
                  },
                  "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 1523.2414578222467,
                      "rotateY": 881.8766334760375
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 1000,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                }
                
              }}
   
           style = {{
   
               position: "absolute",
               top: 0,
               left: 0,
               width: "100%",
               height: "100%",
               backgroundColor: '#000000'
           }}
            />
           
            )
    }
}

export default ParticlesBackground;
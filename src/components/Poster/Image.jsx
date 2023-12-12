import React, { Component } from "react";
import classes from '../../styles/poster.module.css'
import animation from '../../styles/animation.module.css'
import poster_result from '../../information/poster_result.json';

export default class Image extends Component {
  constructor(props) {
    super(props);
  }



  render() {

    let {data, animate, alt, isImageClicked}= this.props;
    if(animate==null) animate=false;
    if(alt==null) alt=false;

    if(data.default==null){
      return(<div className={classes.imageLink}>
        <div className={classes.imageWrapper}><img className={classes.image} src={"/default/poster.png"} alt="poster"/></div></div>)
    }

    if(data.background==null || data.elements==null ) return(<div className={classes.imageLink}>
      <div className={classes.imageWrapper}><img className={classes.image} src={data.default} alt="poster"/></div></div>)

    return (
      <div className={animation.imageContainer}>
      <div className={classes.imageLink}>
        <div className={classes.imageWrapper}>
          {!animate ?

          <div> 

            <img className={classes.image} src={data.default} alt="poster" /> 

            {alt ? <img className={classes.image} src={data.alt.link} alt="poster" 
              style={{
                opacity: isImageClicked ? 1 : 0,
                width: `${data.alt.width}`,
                height: `${data.alt.height}`,
                position: 'absolute',
                top: `${data.alt.y}`,
                left: `${data.alt.x}`,
                zIndex: data.alt.z,
                transition: 'opacity 0.5s ease-in-out',
              }}
              />: <></>}

          </div>
          

          
          :
          
          <div>

          

            <img className={animation.defaultImage} src={data.default} alt="poster" /> 


            <img className={classes.image} src={data.background.link} alt="poster" 
            style={{
              width: `${data.background.width}`,
              height: `${data.background.height}`,
              position: 'absolute',
              top: `${data.background.y}`,
              left: `${data.background.x}`,
              zIndex: data.background.z
            }}
             />


            <img className={classes.image} src={data.alt.link} alt="poster" 
            style={{
              opacity: isImageClicked ? 1 : 0,
              width: `${data.alt.width}`,
              height: `${data.alt.height}`,
              position: 'absolute',
              top: `${data.alt.y}`,
              left: `${data.alt.x}`,
              zIndex: data.alt.z,
              transition: 'opacity 0.5s ease-in-out',
            }}
             />
            {data.elements.map((element, index) => ( element.link == null ?  
            
            <div 
            key={index}
            className={`${classes.image} ${element.animation && animation[element.animation]}`}
            style={{
              width: `${(element.width / data.background.width) * 100}%`,
              height: `${(element.height / data.background.height) * 100}%`,
              position: 'absolute',
              top: `${(element.y / data.background.height) * 100}%`,
              left: `${(element.x / data.background.width) * 100}%`,
              zIndex: element.z
            }}
            ></div>
            
            
            : 
            
            <img
              key={index}
              className={`${classes.image} ${element.animation && animation[element.animation]}`}
              src={element.link}
              alt={`poster element ${index}`}
              style={{
                width: `${(element.width / data.background.width) * 100}%`,
                height: `${(element.height / data.background.height) * 100}%`,
                position: 'absolute',
                top: `${(element.y / data.background.height) * 100}%`,
                left: `${(element.x / data.background.width) * 100}%`,
                zIndex: element.z
              }}
            />
            
            ))}
          </div>

          
          
          
          
          
          
          }
          </div>



          
      </div>
      </div>
      

      
    );
  }
}

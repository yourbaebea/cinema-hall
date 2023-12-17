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

    if(data.metadata.default==null){
      return(<div className={classes.imageLink}>
        <div className={classes.imageWrapper}><img className={classes.image} src={"/default/poster.png"} alt="poster"/></div></div>)
    }

    if(data.background==null || data.elements==null ) return(<div className={classes.imageLink}>
      <div className={classes.imageWrapper}><img className={classes.image} src={data.metadata.default.imgix_url} alt="poster"/></div></div>)
   
    return (
      <div className={animation.imageContainer}>
      <div className={classes.imageLink}>
        <div className={classes.imageWrapper}>
          {!animate ?

          <div> 

            <img className={classes.image} src={data.metadata.default.url} alt="poster" /> 

            {alt ? <img className={classes.image} src={data.metadata.alt.metadata['image-element'].imgix_url} alt="poster" 
              style={{
                opacity: isImageClicked ? 1 : 0,
                width: `${data.metadata.alt.metadata.width}`,
                height: `${data.metadata.alt.metadata.height}`,
                position: 'absolute',
                top: `${data.metadata.alt.metadata.y}`,
                left: `${data.metadata.alt.metadata.x}`,
                zIndex: data.metadata.alt.metadata.z,
                transition: 'opacity 0.5s ease-in-out',
              }}
              />: <></>}

          </div>
          

          
          :
          
          <div>

          

            <img className={animation.defaultImage} src={data.metadata.default.imgix_url} alt="poster" /> 


            <img className={classes.image} src={data.metadata.background.metadata['image-element'].url} alt="poster" 
            style={{
              width: `${data.metadata.background.metadata.width}`,
              height: `${data.metadata.background.metadata.height}`,
              position: 'absolute',
              top: `${data.metadata.background.metadata.y}`,
              left: `${data.metadata.background.metadata.x}`,
              zIndex: data.metadata.background.metadata.z
            }}
             />


            <img className={classes.image} src={data.metadata.alt.metadata['image-element'].url} alt="poster" 
            style={{
              opacity: isImageClicked ? 1 : 0,
              width: `${data.metadata.alt.metadata.width}`,
              height: `${data.metadata.alt.metadata.height}`,
              position: 'absolute',
              top: `${data.metadata.alt.metadata.y}`,
              left: `${data.metadata.alt.metadata.x}`,
              zIndex: data.metadata.alt.metadata.z,
              transition: 'opacity 0.5s ease-in-out',
            }}
             />
            {data.metadata.elements.map((element, index) => ( element.metadata['image-element'].imgix_url == null ?  
            
            <div 
            key={index}
            className={`${classes.image} ${element.metadata.animation && animation[element.metadata.animation]}`}
            style={{
              width: `${(element.metadata.width / data.metadata.background.metadata.width) * 100}%`,
              height: `${(element.metadata.height / data.metadata.background.metadata.height) * 100}%`,
              position: 'absolute',
              top: `${(element.metadata.y / data.metadata.background.metadata.height) * 100}%`,
              left: `${(element.metadata.x / data.metadata.background.metadata.width) * 100}%`,
              zIndex: element.metadata.z
            }}

           
            ></div>
            
            
            : 
            
            <img
              key={index}
              className={`${classes.image} ${element.metadata.animation && animation[element.metadata.animation]}`}
              src={element.metadata['image-element'].url}
              alt={`poster element ${index}`}
              style={{
                width: `${(element.metadata.width / data.metadata.background.metadata.width) * 100}%`,
                height: `${(element.metadata.height / data.metadata.background.metadata.height) * 100}%`,
                position: 'absolute',
                top: `${(element.metadata.y / data.metadata.background.metadata.height) * 100}%`,
                left: `${(element.metadata.x / data.metadata.background.metadata.width) * 100}%`,
                zIndex: element.metadata.z
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

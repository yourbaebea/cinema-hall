import React, { Component } from "react";
import classes from '../../styles/poster.module.css'
import animation from '../../styles/animation.module.css'
import poster_result from '../../information/poster_result.json';

export default class Image extends Component {
  constructor(props) {
    super(props);
  }



  render() {

    const {data, animate}= this.props;
    if(animate==null) animate=false;
    //console.log(data);

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
          
          <img className={classes.image} src={data.default} alt="poster" /> 
          
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

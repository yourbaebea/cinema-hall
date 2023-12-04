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
    console.log(data);

    if(data.default==null){
      return(<div><img className={classes.image} src={"/default/poster.png"} alt="poster"/></div>)
    }

    if(data.background==null || data.elements==null ) return(<div><img className={classes.image} src={data.default} alt="poster"/></div>)

    return (
      <div className={animation.imageContainer}>
      <div className={classes.imageLink}>
        <div className={classes.imageWrapper}>
          {!animate ? <img className={classes.image} src={data.default} alt="poster" /> :
          <div>
          <img className={classes.image} src={data.background.link} alt="poster"  />
          {data.elements.map((element, index) => (
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
          }}/>
          ))}
        </div>

          
          
          
          
          
          
          }
          </div>



          
      </div>
      </div>
      

      
    );
  }
}

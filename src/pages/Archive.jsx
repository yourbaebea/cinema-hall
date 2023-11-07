import React, { Component } from "react";
import classes from '../styles/archive.module.css';


const queryfromserver = [
  {
    "id": "1",
    "link": "query from wordpress 1"
  },
  {
    "id": "2",
    "link": "query from wordpress 2"
  },
  {
    "id": "3",
    "link": "query from wordpress 3"
  },
  {
    "id": "4",
    "link": "query from wordpress 4"
  }
];

export default class Archive extends Component {
  render() {
    return (
        <div className={classes.page}>

            <div className={classes.posterGrid}>
            {queryfromserver.map(poster => (
              <div className={classes.posterContainer}>
                <a className={classes.posterImage} key={poster.id} href={`/poster/${poster.id}`}>poster</a>
                <div className={classes.posterText}>
                  <h1 className={classes.title} >Name of {poster.id}</h1>
                  <p>texto aqui do poster {poster.id} 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta nibh venenatis cras sed felis. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Sollicitudin nibh sit amet commodo. Sed egestas egestas fringilla phasellus faucibus scelerisque. Ac tincidunt vitae semper quis lectus nulla. Malesuada pellentesque elit eget gravida cum sociis natoque. Nec nam aliquam sem et tortor consequat id porta nibh. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Nulla porttitor massa id neque aliquam vestibulum. Nunc mi ipsum faucibus vitae aliquet nec.

Ut aliquam purus sit amet luctus venenatis lectus magna. Turpis massa tincidunt dui ut ornare lectus sit. Quam viverra orci sagittis eu volutpat. Eget gravida cum sociis natoque penatibus. Etiam sit amet nisl purus in. Arcu ac tortor dignissim convallis. Amet risus nullam eget felis eget nunc. Eget aliquet nibh praesent tristique magna sit. Scelerisque eleifend donec pretium vulputate sapien. Nulla facilisi etiam dignissim diam quis enim. Ac placerat vestibulum lectus mauris ultrices. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Quis enim lobortis scelerisque fermentum dui.

                 </p>
                </div>
              </div>
              
            ))}
            </div>


        </div>
    
    );
  }
}
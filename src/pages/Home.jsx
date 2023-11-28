import React, { Component } from "react";
import Menu from '../components/Menu'
import home from '../styles/home.module.css';
import navigation from '../information/navigation.json';
import Draggable from 'react-draggable';

const imagesHomepage = [
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

export default class Home extends Component {
  render() {
    return (
      <div className={home.page}>
        <div>
          {imagesHomepage.map((image, index) => (
            <Draggable>
              <img key={home.image} src={image.link} alt={`Image ${index + 1}`} />
            </Draggable>
          ))}
        </div>
      </div>
    );
  }
}

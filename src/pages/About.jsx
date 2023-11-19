import React, { Component } from "react";
import classes from '../styles/about.module.css';
import vars from '../styles/layout.module.css';



export default class About extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    const { view } = this.props;


    return (
        <div className={classes.page}>

          <div className={classes.textBlock}>Lorem ipsum dolor sit amet consectetur. Penatibus gravida urna mauris a. Ut vestibulum at sed habitant massa id feugiat lacus. Tellus duis ac nec nulla vestibulum nulla. Amet mauris pharetra praesent quis vehicula dignissim leo.
          Porttitor a turpis nec porta diam id nibh. Odio elementum sed erat morbi vel leo et sagittis enim. Nec enim ullamcorper platea et sagittis sit massa porta. Sed sit odio pulvinar aliquam. Sed suspendisse nunc feugiat auctor orci gravida. Sed lectus malesuada eleifend vivamus. Adipiscing egestas placerat dignissim senectus vitae cursus tellus. Donec nam a sit diam. Bibendum mollis ac id curabitur sit viverra vitae posuere. Nisl est faucibus suspendisse urna. Sodales tincidunt enim morbi ultrices nulla mi. Neque lacus nulla amet adipiscing nulla dolor nunc porttitor. Orci augue vel pretium tellus sem ut. Morbi consectetur elementum bibendum pellentesque non integer. Pharetra pellentesque mauris eu consectetur faucibus turpis ut sit.
          Nullam in at sem turpis. Posuere quam felis placerat ut lectus iaculis proin. Pretium et sit senectus ipsum lectus vulputate posuere. Turpis porttitor nisl sapien consequat. Ac nibh suspendisse nisl morbi.
          Feugiat nulla ultrices enim velit facilisis ante blandit quisque enim. Pretium aliquam sed gravida lorem. Facilisis posuere eget platea nibh eu accumsan pretium leo in. Vulputate sapien lacus quis porta. Sed augue mi sed aliquam in. Sed egestas mauris eu neque facilisis vulputate orci. Viverra donec sociis pellentesque euismod vulputate non consequat pellentesque. Lorem ornare eu rutrum feugiat pharetra ac posuere est. Amet malesuada tellus nibh massa. Turpis rutrum cursus malesuada eget.</div>
          
            {view ?

            <div className={classes.aboutContainer}>
              <div className={classes.madeBy} style={{width: "50%", textAlign: "end", marginRight: "2rem"}}>Made by:</div>
              <div className={classes.aboutFlexRow}>
                <a className={classes.aboutImage}>
                  <div className={classes.imageWrapper}>
                    <img className={classes.image} src={"/default/poster.png"} alt="poster" />
                  </div>
                </a>
                <a className={classes.aboutImage}>
                  <div className={classes.imageWrapper}>
                    <img className={classes.image} src={"/default/poster.png"} alt="poster" />
                  </div>
                </a>
                <a className={classes.aboutImage}>
                  <div className={classes.imageWrapper}>
                    <img className={classes.image} src={"/default/poster.png"} alt="poster" />
                  </div>
                </a>
              </div>
            </div>
            : 
            <div className={classes.aboutContainer} style={{flexDirection: "column"}}>
              <div className={classes.madeBy} style={{marginBottom: "2rem"}}> Made by:</div>
              <div className={classes.aboutFlexColumn}>
                <a className={classes.aboutImage}>
                  <div className={classes.imageWrapper}>
                    <img className={classes.image} src={"/default/poster.png"} alt="poster" />
                  </div>
                </a>
                <a className={classes.aboutImage}>
                  <div className={classes.imageWrapper}>
                    <img className={classes.image} src={"/default/poster.png"} alt="poster" />
                  </div>
                </a>
                <a className={classes.aboutImage}>
                  <div className={classes.imageWrapper}>
                    <img className={classes.image} src={"/default/poster.png"} alt="poster" />
                  </div>
                </a>
              </div>
            </div>

           }




            
            

        </div>
    
    );
  }

}






/*
export default class About extends Component {
  render() {
    return (
        <div className={classes.page}>
        <div className={classes.madeBy}>mADE BY</div>
        <div className={classes.ideaSelfMadePostersForTheMembe}>idea: self made posters for the members of the group</div>
          
            <div className={classes.textBlock}>Lorem ipsum dolor sit amet consectetur. Penatibus gravida urna mauris a. Ut vestibulum at sed habitant massa id feugiat lacus. Tellus duis ac nec nulla vestibulum nulla. Amet mauris pharetra praesent quis vehicula dignissim leo.
Porttitor a turpis nec porta diam id nibh. Odio elementum sed erat morbi vel leo et sagittis enim. Nec enim ullamcorper platea et sagittis sit massa porta. Sed sit odio pulvinar aliquam. Sed suspendisse nunc feugiat auctor orci gravida. Sed lectus malesuada eleifend vivamus. Adipiscing egestas placerat dignissim senectus vitae cursus tellus. Donec nam a sit diam. Bibendum mollis ac id curabitur sit viverra vitae posuere. Nisl est faucibus suspendisse urna. Sodales tincidunt enim morbi ultrices nulla mi. Neque lacus nulla amet adipiscing nulla dolor nunc porttitor. Orci augue vel pretium tellus sem ut. Morbi consectetur elementum bibendum pellentesque non integer. Pharetra pellentesque mauris eu consectetur faucibus turpis ut sit.
Nullam in at sem turpis. Posuere quam felis placerat ut lectus iaculis proin. Pretium et sit senectus ipsum lectus vulputate posuere. Turpis porttitor nisl sapien consequat. Ac nibh suspendisse nisl morbi.
Feugiat nulla ultrices enim velit facilisis ante blandit quisque enim. Pretium aliquam sed gravida lorem. Facilisis posuere eget platea nibh eu accumsan pretium leo in. Vulputate sapien lacus quis porta. Sed augue mi sed aliquam in. Sed egestas mauris eu neque facilisis vulputate orci. Viverra donec sociis pellentesque euismod vulputate non consequat pellentesque. Lorem ornare eu rutrum feugiat pharetra ac posuere est. Amet malesuada tellus nibh massa. Turpis rutrum cursus malesuada eget.</div>
          
      <div className={classes.container}>
      <div className={classes.rectangle}></div>
      <div className={classes.rectangle}></div>
      <div className={classes.rectangle}></div>
      </div>
        </div>
    
    );
  }
}
*/
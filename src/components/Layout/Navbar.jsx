import React, { useEffect, useState } from "react";
import classes from '../../styles/layout.module.css'

import navigation from '../../information/navigation.json';

const Navbar = () => {
  return (
    <>
      
      <div className={classes.navbar}>
        
        {navigation.map((link, index) => (
          <div className={classes.navigation} key={index}>
            <a href={link.href}>{link.name}</a>
          </div>
        ))}

      </div>


    </>
  );
};

export default Navbar;
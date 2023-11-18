import React, { Component, setState } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import navigation from './information/navigation.json';
import Poster from "./pages/Poster";
import PosterWrap from "./components/PosterWrap";
import About from "./pages/About";


export default class App extends Component {
  render() {
    
    return (
      <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout page="Home" />} />
        <Route path="/about" element={<Layout page="About" />} />
        <Route path="/archive" element={<Layout page="Archive" />} />
        <Route path="/collection" element={<Layout page="Collection" />} />
        <Route path="/poster/:id" element={<PosterWrap/>} />
        <Route path="/*" element={<Layout page={<NotFound />} />} />
        </Routes>
      </BrowserRouter>

      
      
      </div>
    );
  }
}
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


export default class App extends Component {
  render() {
    
    return (
      <div>
      <BrowserRouter>
        <Routes>
          {navigation.map((link, index) => (
                <Route
                  key={index}
                  path={link.href}
                  element={
                    <Layout
                      page={link.name}
                    />
                  }
                />
              ))}
          <Route path="/poster/:id" element={<PosterWrap/>} />
          <Route path="/*" element={<Layout page={<NotFound />} />} />
        </Routes>
      </BrowserRouter>

      
      
      </div>
    );
  }
}
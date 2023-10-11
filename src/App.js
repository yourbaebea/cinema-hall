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

          <Route path="/*" element={<Layout page={<NotFound />} />} />
        </Routes>
      </BrowserRouter>

      
      
      </div>
    );
  }
}
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Box} from "./Utilities";
import {OrbitControls} from "@react-three/drei"

import FlightVisualizationApp from './FlightVisualizationApp';

ReactDOM.render(
  <React.StrictMode>
    <FlightVisualizationApp />
    <OrbitControls></OrbitControls>
    <Box ></Box>
  </React.StrictMode>,
  document.getElementById('root')
);

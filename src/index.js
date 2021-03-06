import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Slider from './components/Slider';
import {images, imageTitles} from './data/images';


ReactDOM.render(
  <React.StrictMode>
    <Slider slides={images} titles = {imageTitles} />
  </React.StrictMode>,
  document.querySelector('.main')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

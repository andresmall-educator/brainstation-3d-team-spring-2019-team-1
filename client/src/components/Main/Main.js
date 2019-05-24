import React, { Component } from 'react';
import BarChart from '../BarChart';
import PieChart from '../PieChart';
import ScatterPlot from '../ScatterPlot';
import WeatherGraph from '../WeatherGraph';
import PineapplePie from '../PineapplePie';
import MovieRatings from '../MovieRatings';
import Nav from '../Nav/Nav';

import basicBarData from '../../data/basic-bar';
import basicPieData from '../../data/basic-pie';
import basicScatter from '../../data/basic-scatter';
import weatherData from '../../data/weather-data';
import pineappleData from '../../data/pineapple-on-pizza';
import movieRatings from '../../data/movie-ratings';

//new code
import './Main.scss';

import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <>
      <Nav />
        <h1>hello form main</h1>
        </>
    )
  }
}

export default Main;

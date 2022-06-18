import React from "react";
import Weather from "./Weather";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SearchForm from './SearchForm';
import CurrentForecast from './CurrentForecast';
import WeeklyForecast from './WeeklyForecast';




import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <Container fluid="sm">
        <Card body>
          <SearchForm/>
          <CurrentForecast/>
          <WeeklyForecast/>


            </Card>
      </Container>
    </div>
  );
}

export default App;

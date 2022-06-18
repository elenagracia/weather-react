import axios from "axios";
import React from "react";
import { Audio } from  'react-loader-spinner'


export default function Weather(props) {


    let apiKey = "e459f7ba313263506eb902df78d7cfa6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then();
    return(
        <Audio
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
  />
    )
}
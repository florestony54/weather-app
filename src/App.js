import React from "react";
import Wrapper from "./components/Wrapper"
import Form from "./components/Form"
import Weather from "./components/Weather"


const API_KEY = 'd397f8e6286eb2a7cf9e018ca9396ccc';

class App extends React.Component{
    state = {
        temperature: undefined,
        high: undefined,
        low: undefined,
        icon: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&APPID=${API_KEY}`);
        const data = await api_call.json();
        
        if (city && country){
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                high: data.main.temp_max,
                low: data.main.temp_min,
                icon: data.weather[0].icon,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        } else{
            this.setState({
                temperature: undefined,
                high: undefined,
                low:undefined,
                icon:undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter a city and country."
            });
        }
       
    }
    render(){
        
        return(
            <div>
                <div className="wrapper">
                    
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                {/* <div className="col-xs-5 title-container">
                                    <Titles />
                                </div> */}
                                <div className=" form-container">
                                    <Form getWeather={this.getWeather} />
                                    <Weather temperature={this.state.temperature}
                                        high={this.state.high}
                                        low={this.state.low}
                                        icon = {this.state.icon}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        error={this.state.error}
                                    />
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }   
}


export default App;
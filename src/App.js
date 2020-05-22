import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form/Form.js';
import Weather from './Components/Weather/Weather.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = 'aeb2821bab516286dae6e9ca19488651';

class App extends Component {
	constructor() {
		super();
		this.state = {
			city: undefined,
			country: undefined,
			max_temp: undefined,
			min_temp: undefined,
			curr_temp: undefined,
			icon: undefined,
			description: '',
			main: undefined,
			error: false,
		};
	}

	kelvinToCelcius(temperature) {
		return Math.floor(temperature - 273.15);
	}

	getWeather = async (e) => {
		e.preventDefault();
		console.log(e);
		const country = e.target.elements.country.value;
		const city = e.target.elements.city.value;

		try {
			const api_call = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
			);

			const response = await api_call.json();
			console.log(response);

			this.setState({
				city: `${response.name}, ${response.sys.country}`,
				main: response.weather[0].main,
				curr_temp: response.main.temp,
				max_temp: response.main.temp_max,
				min_temp: response.main.temp_min,
				description: response.weather[0].description,
				icon: response.weather[0].icon,
				error: false,
			});
		} catch {
			this.setState({
				city: undefined,
				country: undefined,
				max_temp: undefined,
				min_temp: undefined,
				curr_temp: undefined,
				icon: undefined,
				description: '',
				main: undefined,

				error: true,
			});
		}
	};

	render() {
		return (
			<div className='App'>
				<Form loadWeather={this.getWeather} />
				<Weather
					city={this.state.city}
					country={this.state.country}
					maxTemp={this.state.max_temp}
					minTemp={this.state.min_temp}
					currTemp={this.state.curr_temp}
					description={this.state.description}
					icon={this.state.icon}
					convertTemp={this.kelvinToCelcius}
				/>
			</div>
		);
	}
}

export default App;

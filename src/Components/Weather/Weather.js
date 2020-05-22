import React from 'react';
import './Weather.css';

const Weather = (props) => {
	return (
		<div className='weather-container'>
			<h1 className='text-white py-3'>
				{props.city}
				{/* , {props.country} */}
			</h1>
			<h5 className='py-4'>
				<img
					src={'http://openweathermap.org/img/w/' + props.icon + '.png'}
					height={120}
					width={120}
					alt=''
				/>
			</h5>

			{/* Get current temperature */}
			{props.currTemp ? (
				<h1 className='text-white py-2'>
					{props.convertTemp(props.currTemp)}&deg;
				</h1>
			) : null}

			{/* show max and min temp */}
			{maxminTemp(
				props.convertTemp(props.minTemp),
				props.convertTemp(props.maxTemp)
			)}

			{/* Weather description */}
			<h4 className='text-white py-3'>
				{props.description.charAt(0).toUpperCase() + props.description.slice(1)}
			</h4>
		</div>
	);
};

export default Weather;

function maxminTemp(min, max) {
	if (max && min) {
		return (
			<h3 className='text-white py-3'>
				<span className='px-4'>{min}&deg;</span>
				<span className='px-4'>{max}&deg;</span>
			</h3>
		);
	}
}

import React from 'react';
import './Form.css';

const Form = (props) => {
	return (
		<div className='form-container h-100'>
			<form onSubmit={props.loadWeather}>
				<div className='row'>
					<div className='col-md-3 '>
						<input
							type='text'
							placeholder='City'
							name='city'
							className='form-city text-white py-3'
							autoComplete='off'
						/>
					</div>

					<div className='col-md-3'>
						<input
							type='text'
							placeholder='Country'
							name='country'
							className='form-country text-white py-3'
							autoComplete='off'
						/>
					</div>

					<div className='col-md-3 text-md-left'>
						<button className='btn btn-warning'>Get weather</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Form;

import "./current-weather.css";

const CurrentWeather = ({ data }) => {
	return (
		<div className="weather">
			<div className="top">
				<div className="">
					<p className="city">{data.name}</p>
					<p className="weather-description">{data.weather[0].description}</p>
				</div>
				<img alt="weather-icon" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
			</div>
			<div className="bottom">
				<p className="temperature">{Math.round(data.main.temp)}°C</p>
				<div className="details">
					<div className="perimeter-row">
						<span className="perimeter-label detail-title">Details</span>
					</div>
					<div className="perimeter-row">
						<span className="perimeter-label">Feels like</span>
						<span className="perimeter-value">{Math.round(data.main.feels_like)}°C</span>
					</div>
					<div className="perimeter-row">
						<span className="perimeter-label">Wind</span>
						<span className="perimeter-value">{data.wind.speed}m/s</span>
					</div>
					<div className="perimeter-row">
						<span className="perimeter-label">Humidity</span>
						<span className="perimeter-value">{data.main.humidity}%</span>
					</div>
					<div className="perimeter-row">
						<span className="perimeter-label">Pressure</span>
						<span className="perimeter-value">{data.main.pressure} hPa</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;

import React from "react";
import Typography from "@material-ui/core/Typography";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import covidimage from "./images/covidimage.png";

class App extends React.Component {
	state = {
		data: {},
		country: "",
	};

	async componentDidMount() {
		const fetchedData = await fetchData();
		this.setState({ data: fetchedData });
	}

	handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);
		this.setState({ data: fetchedData, country: country });
	};

	render() {
		const { data, country } = this.state;
		return (
			<div className={styles.container}>
				<img src={covidimage} alt="covid 19 image"></img>
				<p></p>
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Cards data={data} />
				<Chart data={data} country={country} />

				<Typography variant="body2">Made with ❤️ by Admire Khulumo</Typography>
			</div>
		);
	}
}

export default App;

import React, { useState, useEffect } from "react";
import {
	NativeSelect,
	FormControl,
	Card,
	Typography,
	Grid,
} from "@material-ui/core";

import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
	const [fetchedCountries, setFetchedCountries] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setFetchedCountries(await fetchCountries());
		};

		fetchAPI();
	}, [setFetchedCountries]);

	return (
		<div className={styles.border}>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="flex-start"
				spacing={2}
			>
				<Grid item>
					<Typography variant="overline">Pick Country: </Typography>
				</Grid>
				<Grid item>
					<FormControl className={styles.formControl}>
						<NativeSelect
							defaultValue=""
							onChange={(e) => handleCountryChange(e.target.value)}
						>
							<option value="">Global</option>
							{fetchedCountries.map((country, i) => (
								<option key={i} value={country}>
									{country}
								</option>
							))}
						</NativeSelect>
					</FormControl>
				</Grid>
			</Grid>
		</div>
	);
};

export default CountryPicker;

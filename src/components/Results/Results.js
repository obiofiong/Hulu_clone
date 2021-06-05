import React, { useState, useEffect } from "react";
import { requests } from "../.././utils/requests";
// import Thumbnail from "./Thumbnail";

function Results({ match }) {
	const { id } = match.params;
	const [appState, setAppState] = useState({
		fetching: false,
		data: [],
	});
	let renderOption = "";

		const renderOptionChoice = () => {
			if (id.slice(0, 5) === "genre") {
				renderOption = id.substr(7);
                		console.log(renderOption);
			} else if (id.slice(0, 13)) {
				renderOption = id.substr(13);
			}
		};
		renderOptionChoice();
	useEffect(() => {
		// const fetchData = async () => {
		// 	const result = await fetch(
		// 		`https://api.themoviedb.org/3${requests[renderOption].url}`
		// 	);
		// 	const json = await result.json();
		// 	setAppState({ fetching: false, data: json.results });
		// 	// setFetching(false)
		// };
		// fetchData();
	}, [id]);

	return <div></div>;
}

export default Results;

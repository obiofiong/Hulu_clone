import React, { useState, useEffect } from "react";
import { requests } from "../.././utils/requests";
import { search } from "../.././utils/requests";
import Thumbnail from "./Thumbnail"

function Results({ match }) {
	const { id, param } = match.params;
	console.log(match,id)
	const [appState, setAppState] = useState({
		fetching: false,
		data: [],
	});

	useEffect(() => {
			const fetchData = async () => {
			const result = await fetch(
				`https://api.themoviedb.org/3${ (id === "genre") ? 	requests[param].url : search.url+param}`
			);
			const json = await result.json();
			setAppState({ fetching: false, data: json.results });
		};
		
		fetchData();
	}, [id,param]);

	return(
		<>
		{ (id === "search_for") &&  <h1 className="mt-8 mx-auto">Showing results for <span className="font-bold">{param}</span> </h1> }
		<div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3  3xl:flex flex-wrap justify-center">
			{" "}
			{appState.fetching ? (
				<h1 className="mx-auto">Loading movies...</h1>
			) : (
				appState.data.map((singleThumbnail) => (
					<Thumbnail key={singleThumbnail.id} data={singleThumbnail} />
				))
			)}
		</div>
		</>
	);
}

export default Results;

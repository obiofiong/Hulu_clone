import React, { useState, useEffect } from "react";
import { search } from "../.././utils/requests";
import Thumbnail from "../Results/Thumbnail";


function Search(props) {
	const { id } = props.match.params;

	const [appState, setAppState] = useState({
		fetching: true,
		data: [],
	});
	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch(`${search.url}${id}`);
			const json = await result.json();
			console.log(json);
			setAppState({ fetching: false, data: json.results });
			// setFetching(false)
		};

		fetchData();
	}, [id]);

	return (
		<>
			<h1 className="mt-8 mx-auto">Showing results for <span className="font-bold">{id}</span> </h1>
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

export default Search;

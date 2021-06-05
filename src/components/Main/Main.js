import React, { useState, useEffect } from "react";
import {requests} from "../.././utils/requests";
import Thumbnail from "./Thumbnail";

function Main(props) {
	const { id } = props.match.params;

	const [appState, setAppState] = useState({
		fetching: false,
		data: [],
	});
	useEffect(() => {
		const fetchData = async () => {
			
			// setAppState(... { fetching: falses });
			const result = await fetch(
				`https://api.themoviedb.org/3${requests[id].url}`
			);
			const json = await result.json();
			setAppState({ fetching: false, data: json.results });
			// setFetching(false)
		};

		fetchData();
	}, [id]);


	{
		/* {data[0].overview} */
	}

	{
		/* {data.map(singleThumbnail => {
				<Thumbnail key={singleThumbnail.id} data={singleThumbnail} />;
			})}
			{console.log("inner",data)} */
	}

	return (
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
	);
}

export default Main;

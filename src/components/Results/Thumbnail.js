import React from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";

function Thumbnail({ data }) {
	const BASE_URL = "https://image.tmdb.org/t/p/original/";
	return (
		<div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
			<div className="relative">
				<div className=" absolute w-full h-full hidden group-hover:block">
					<div className = "absolute z-20 text-black text-xs sm:text-sm p-2 h-full text-justify">{data.overview.slice(0,330)} </div>
					<p className="absolute z-10 bottom-0 w-full h-full bg-white opacity-50 "></p>
				</div>
				<img
					className="h-auto"
					src={
						`${BASE_URL}${data.backdrop_path || data.poster_path}` ||
						`${BASE_URL}${data.poster_path}`
					}
					alt=""
				/>
			</div>
			<div className="p-2">
				<p className="truncate max-w-md">{data.overview}</p>
				<h2 className="text-2xl text-white mt-1 transition-all duration-100 ease-in-out group-hover:font-bold">
					{data.title || data.original_name}
				</h2>
				<p className="flex items-center opacity-0 group-hover:opacity-100">
					{data.media_type && `${data.media_type} - `}
					{""}
					{data.release_date || data.first_air_date} - {""}
					<ThumbUpIcon className="h-5 mx-2" />
					{data.vote_count}
				</p>
			</div>
		</div>
	);
}

export default Thumbnail;

import React from "react";
import { useHistory } from "react-router-dom";
import {requests} from "../.././utils/requests";

function Nav() {
    const history = useHistory();
    function handleGenreSelect(key) {
        history.push(`/genre/${key}`);
      }

	return (
		<nav className="relative">
			<div className="flex px-10 sm:px-20 texr-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
				{Object.entries(requests).map(([key, { title, url }]) => (
					<h2
						className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
						key={key}
                        onClick = {() => handleGenreSelect(key)}
                        >
						{title}
					</h2>
				))}
			</div>
			<div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a]  h-10 w-1/12" > </div>
		</nav>
	);
}

export default Nav;

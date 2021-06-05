import React, { useState } from "react";
import HeaderItem from "./HeaderItem";
import huluLogo from "../../images/hulu-logo.png";
import {
	HomeIcon,
	CollectionIcon,
	BadgeCheckIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";
import { useHistory } from "react-router-dom";

const headerItems = [
	{ title: "HOME", icon: HomeIcon },
	{ title: "TRENDING", icon: LightningBoltIcon },
	{ title: "VERIFIED", icon: BadgeCheckIcon },
	{ title: "COLLECTION", icon: CollectionIcon },
	{ title: "SEARCH", icon: SearchIcon },
	{ title: "ACCOUNT", icon: UserIcon },
];

function Header() {
	const history = useHistory();
	const [search, setSearch] = useState("");
	const handleInputChange = (e) => {
		setSearch(e.target.value);
	};
	const handleSearch = () => {
		if (search === "") {
			return;
		}
		history.push(`/search_for/${search}`);
		setSearch("");
	};
	return (
		<div className="flex flex-col items-center sm:flex-row sm:justify-between m-5 h-auto">
			<div className="flex flex-grow justify-evenly max-w-2xl">
				{headerItems.map((item) => (
					<HeaderItem key={item.title} title={item.title} Icon={item.icon} />
				))}
			</div>
			<div className="flex border-2 px-3 w-full max-w-md sm:w-48 rounded-lg sm:-mt-3 mb-4 mx-8 ">
				<input
					onChange={handleInputChange}
					value={search}
					type="text"
					className=" bg-transparent appearance-none rounded w-full leading-tight focus:outline-none focus:shadow-outline"
				/>
				<SearchIcon
					onClick={handleSearch}
					className="ml-2 h-10 cursor-pointer hover:text-white hover:shadow-md"
				/>
			</div>

			<img className="h-6  sm:mb-6" src={huluLogo} alt="logo" />
			{/* <h1 className="font-bold text-xl tracking-widest text-white">hulu</h1> */}
		</div>
	);
}

export default Header;

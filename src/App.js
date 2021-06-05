import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Main from "./components/Main/Main";
import { Route, Switch, Redirect } from "react-router-dom";
import Search from "./components/SearchResult/Search";
import Results from "./components/Results/Results";

function App() {
	return (
		<div className="">
			<div className="sticky-0">
				<Header />
				<Nav />
			</div>
			<Switch>
				{/* <Route path="/:id" component={Results} /> */}
				<Route path="/genre/:id" component={Main} />
				<Route path="/search_for/:id" component={Search} />
				<Redirect from="/" to="/genre/fetchTrending" />
				{/* <Redirect to="/pagenotfound" /> */}
			</Switch>
		</div>
	);
}

export default App;

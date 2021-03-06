import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Main from "./components/Main/Main";
import { Route, Switch, Redirect } from "react-router-dom";
import Search from "./components/SearchResult/Search";
import Footer from "./components/Footer/Footer";
import Results from "./components/Results/Results";

function App() {
	return (
		<div className="text-center">
			<div className="">
				<Header />
				<Nav />
			</div>
			<Switch>
				<Route path="/:id/:param" component={Results} />
				{/* <Route path="/genre/:id" component={Main} /> */}
				{/* <Route path="/search_for/:id" component={Search} /> */}
				<Redirect from="/" to="/genre/fetchTrending" />
				{/* <Redirect to="/pagenotfound" /> */}
			</Switch>
			<Footer/>
		</div>
	);
}

export default App;

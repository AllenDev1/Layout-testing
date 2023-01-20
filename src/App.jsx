import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navs from "./components/nav";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<Router>
				<Navs />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;

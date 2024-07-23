import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Budgeter from "./pages/BudgeterPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/budgeter" element={<Budgeter />} />
		</Routes>
	);
}

export default App;

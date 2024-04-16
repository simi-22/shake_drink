import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CustomRecipePage from "./pages/CustomRecipePage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			{/* <Route path="/" element={<DetailPage />} /> */}
			<Route path="/custom" element={<CustomRecipePage/>}/>
		</Routes>
	);
}

export default App;

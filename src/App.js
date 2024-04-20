import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import UserPage from "./pages/UserPage";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLayout from "./components/AppLayout";
import FavorCategoryDrinks from "./pages/FavorCategoryDrinks";
import LoginPage from "./pages/LoginPage";
import GamePage from "./pages/GamePage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route index element={<HomePage />} />
				<Route path=":id" element={<DetailPage />} />
				<Route path="user" element={<UserPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="detail" element={<DetailPage />} />
				<Route path="game" element={<GamePage />} />
				<Route path="favor-category/:id" element={<FavorCategoryDrinks />} />
			</Route>
		</Routes>
	);
}

export default App;

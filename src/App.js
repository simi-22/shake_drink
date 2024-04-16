import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import UserPage from "./pages/UserPage";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLayout from "./components/AppLayout";
import FavorCategoryDrinks from "./pages/FavorCategoryDrinks";
import LoginPage from "./pages/LoginPage";
import GamePage from "./pages/GamePage";
import SearchPage from "./pages/SearchPage";
import CustomRecipePage from "./pages/CustomRecipePage";

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
				<Route path="search" element={<SearchPage />} />
			</Route>
			<Route path="/custom" element={<CustomRecipePage />} />
		</Routes>
	);
}

export default App;

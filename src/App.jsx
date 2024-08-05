import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./routes/home/Home";
import Profile from "./routes/profile/Profile";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</>
	);
}

export default App;

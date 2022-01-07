import { Fragment } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Blogs from './Components/Blogs/Blogs';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shops from './Components/Shops/Shops';
import Login from './Components/Login/Login';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Fragment>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
					<Routes>
						<Route path="/contact" element={<ContactUs />} />
					</Routes>
					<Routes>
						<Route path="/about" element={<AboutUs />} />
					</Routes>
					<Routes>
						<Route path="/shop" element={<Shops />} />
					</Routes>
					<Routes>
						<Route path="/blog" element={<Blogs />} />
					</Routes>
					<Routes>
						<Route path="/login" element={<Login />} />
					</Routes>

					<Footer />
				</Fragment>
			</BrowserRouter>
		</div>
	);
}
export default App;

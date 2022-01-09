import { Fragment } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Blogs from './Components/Blogs/Blogs';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shops from './Components/Shops/Shops';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Fragment>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />

						<Route path="/contact" element={<ContactUs />} />

						<Route path="/about" element={<AboutUs />} />

						<Route path="/shop" element={<Shops />} />

						<Route path="/blog" element={<Blogs />} />
					</Routes>

					<Footer />
				</Fragment>
			</BrowserRouter>
		</div>
	);
}
export default App;

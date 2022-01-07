import { Fragment } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs/AboutUs';
import Blogs from './pages/Blogs/Blogs';
import ContactUs from './pages/ContactUs/ContactUs';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Shops from './pages/Shops/Shops';

function App() {
	return (
		<div>
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
						<Footer />
					</Fragment>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;

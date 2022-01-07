<<<<<<< HEAD
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
=======
import "./App.css";
import Login from "./Components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Login></Login>
    </div>
  );
>>>>>>> 77f9d23439319799918c6f33274645b99b412fc9
}

export default App;

/* "description": "This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/AnikBarua34/daily-need.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/AnikBarua34/daily-need/issues"
  },
  "homepage": "https://github.com/AnikBarua34/daily-need#readme" */

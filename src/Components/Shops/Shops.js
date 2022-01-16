import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Shop from '../Shop/Shop';

const Shops = () => {
	const [shops, setShops] = useState([]);

	useEffect(() => {
		fetch(`shop.json`)
			.then((res) => res.json())
			.then((data) => setShops(data));
	}, []);

	return (
		<Container className="services">
			<div className="text-center">
				<h1>Our products</h1>
			</div>
			<div className="service-part">
				<Row xs={1} md={3} className="g-4 ">
					{shops.map((shop) => (
						<Shop key={shop._id} shop={shop}></Shop>
					))}
				</Row>
			</div>
		</Container>
	);
};

export default Shops;

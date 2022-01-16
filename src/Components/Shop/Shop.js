import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { BiShoppingBag } from 'react-icons/bi';
import { FcRating } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './Shop.css';

const Shop = ({ shop }) => {
	const { name, description, img, price } = shop;

	return (
		<Container className="shop-container">
			<Col>
				<Card className="shop">
					<Card.Img variant="top" src={img} className="card-img" />
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<h5>Price: {price}$</h5>
						<Card.Text>{description}</Card.Text>
						<div className="">
							<Link to="/order">
								<button type="button" className="btn btn-outline-secondary ">
									Add to cart <BiShoppingBag />
								</button>
							</Link>
							<Link to="/addreview">
								<button type="button" className="btn btn-outline-secondary ">
									Rate this product <FcRating />
								</button>
							</Link>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Container>
	);
};

export default Shop;

import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
	return (
		<Container className="my-5">
			<Row className="mx-auto">
				<div className="my-3 text-center">
					<h2>Our partners</h2>
				</div>
				<hr />
				<Col sm={12} md={6} lg={3} className="info mx-auto p-5">
					<Image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRR9MYVKbZzENpKS5KGsGFZXdm-5_ix1XD9Ubna3vRIelW8I4u1" className="img-fluid text-center partner  " alt="Responsive image" />
					<h4>Zain</h4>
					<h6>Design magazine</h6>
				</Col>
				<Col sm={12} md={6} lg={3} className="info  p-5  mx-auto">
					<Image src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRvfDjavgnWHxE6t_bIbOMWkpoybw7xjtVeN-LY89iFCP0KKf-S" className="img-fluid text-center partner " alt="Responsive image" />
					<h4>Kenan</h4>
					<h6>Furniture</h6>
				</Col>

				<Col sm={12} md={6} lg={3} className="info  p-5  mx-auto">
					<Image src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUnSCa2fdn_A5bWPo4gAkzjp-qsiXxLiOHJq6Hx-G_Q6yfv4z_" className="img-fluid text-center partner " alt="Responsive image" />
					<h4>Rouge Weves</h4>
					<h6>Bath & Soap</h6>
				</Col>
				<Col sm={12} md={6} lg={3} className="info  p-5  mx-auto ">
					<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdgklxRPLxwwi55uDwKqk2vgLos-9XyY8tDZJ0DKc0zn_rLz4G " className="img-fluid text-center partner " alt="Responsive image " />
					<h4>Aromatuca</h4>
					<h6>Home aromas</h6>
				</Col>
			</Row>
			<hr />
		</Container>
	);
};

export default Home;

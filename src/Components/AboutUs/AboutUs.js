import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
// import about from '../../images/about.png';
import './AboutUs.css';

const AboutUs = () => {
	return (
		<Container>
			<Container>
				<div className="intro">
					<Row>
						<Col md={6}>
							<div className="intro-text">
								<h1>
									Know more about,<span className="name">Daily Need.</span>
								</h1>
								<p>
									Daily Need is Fusce quam risus, facilisis et molestie non, feugiat in tortor. Duis volutpat, mi id cursus rhoncus, purus augue aliquam arcu, sit amet rhoncus tellus neque aliquet sapien. Donec sit amet sodales eros. Suspendisse potenti. In scelerisque libero id eleifend
									consectetur. Sed lacinia tempor orci, non lacinia purus faucibus non.
								</p>
							</div>
							<br />
							<div>
								<p>
									Aliquam gravida risus nec velit lacinia dapibus. Phasellus at magna id elit tristique lacinia.
									<br />
									Integer a justo vitae arcu fermentum consequat. Duis volutpat, mi id cursus rhoncus, purus augue aliquam arcu, sit amet rhoncus tellus neque aliquet sapien. Donec sit amet sodales eros.
								</p>
							</div>
						</Col>
						{/* <Col md={6}>
							<Image src={about} className="img-fluid intro-img" alt="Responsive image" />
						</Col> */}
					</Row>
				</div>
			</Container>
			<Container className="my-5">
				<Row className="mx-auto">
					<hr />
					<Col sm={12} md={6} lg={3} className="about mx-auto p-5">
						<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwlonAT6sGyMgdwNquxF-krBQX2QtZbVhcRBjFbnOnIy5n3FJ" className="img-fluid text-center partner  " alt="Responsive image" />
						<h4>Ecology</h4>
						<p>Duis non iaculis sem. Sed a elementum nisl. Aliquam ut hendrerit ex. Quisque dui enim, porttitor eget suscipit eget!</p>
					</Col>
					<Col sm={12} md={6} lg={3} className="about  p-5  mx-auto">
						<Image src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4nwyU38makkavQDhVvi91IKxqjImlpS1andc1MzHCdGts1G7Z" className="img-fluid text-center partner " alt="Responsive image" />
						<h4>Innovations</h4>
						<p>A metus lacus. Aliquam non tellus enim. Praesent ut lorem suscipit, cursus felis at, condimentum odio dolor amet!</p>
					</Col>

					<Col sm={12} md={6} lg={3} className="about  p-5  mx-auto">
						<Image src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWkd4dFklm7daLFvNpSXVC8DqWSouqu0azvIFyZs4hQO5urqi8" className="img-fluid text-center partner " alt="Responsive image" />
						<h4>People</h4>
						<h6>Morbi a metus lacus. Aliquam non tellus enim. Praesent ut lorem suscipit, cursus felis at, condimentum odio.</h6>
					</Col>
				</Row>
				<hr />
			</Container>
		</Container>
	);
};

export default AboutUs;

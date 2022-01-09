import React, { Fragment, useEffect, useState } from 'react';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import './Home.css';
import banner from '../../images/banner4.png';
import banner1 from '../../images/banner3.png';
import banner2 from '../../images/banner2.png';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Shop from '../Shop/Shop';

const Home = () => {
	const [shops, setShops] = useState([]);

	useEffect(() => {
		fetch(`shop.json`)
			.then((res) => res.json())
			.then((data) => setShops(data));
	}, []);

	return (
		<Container>
			<Container>
				<Carousel>
					<Carousel.Item>
						<img className="d-block w-100" src={banner} alt="First slide" />
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={banner1} alt="Second slide" />

						<Carousel.Caption></Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img className="d-block w-100" src={banner2} alt="Third slide" />
					</Carousel.Item>
				</Carousel>
			</Container>

			{/* Shop */}
			<br />
			<Container>
				<div className="offers-part">
					<h2 className="text-center mt-5 mb-2">Our best products</h2>

					<Row xs={1} md={3} className="g-4 ">
						{shops.slice(0, 6).map((shop) => {
							const { _id } = shop;
							return (
								<Fragment key={_id}>
									<Shop shop={shop}></Shop>
								</Fragment>
							);
						})}
					</Row>
				</div>
				<br />
				<div className="text-center">
					<Link to="/shop">
						<button type="button" className="btn btn-warning ">
							Explore More <BsFillArrowRightCircleFill />
						</button>
					</Link>
				</div>
			</Container>

			<br />

			{/* FAQ */}

			<Container className="container my-5">
				<h1 className="text-center py-5">
					Frequently Asked <span className="different-color">Questions</span>
				</h1>
				<div className="row row-cols-1 row-cols-md-2 gx-5">
					<div className="col">
						<img className="w-100" src="https://cbr-honda.netlify.app/images/faq.png" alt="" />
					</div>

					<div className="accordion" id="accordionPanelsStayOpenExample">
						<div className="accordion-item my-5 border rounded-3">
							<h2 className="accordion-header" id="panelsStayOpen-headingOne">
								<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
									<h4>What are the most important things I should know about riding a bike?</h4>
								</button>
							</h2>
							<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
								<div className="accordion-body">
									Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider.Most of the time when you want to turn in one
									direction then you turn very slightly the other way first Hence if you ride very close to the kerb on a road you can’t actually turn away from it easily.
								</div>
							</div>
						</div>
						<div className="accordion-item my-5 border rounded-3">
							<h2 className="accordion-header" id="panelsStayOpen-headingTwo">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
									<h4>How can I tell if my helmet is old and I need a new one?</h4>
								</button>
							</h2>
							<div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
								<div className="accordion-body">
									I had mini-bikes and dirt bikes when I was a kid for many years, so, naturally when I got old enough for a drivers license, I needed a road bike too. Understand, that for many years now, I am one of those people that got tired of asking myself “Why am I still alive?” See, I lived
									rural most of my life, so I didn’t ride in the city a whole lot. But believe it or not, it was a bit safer back then (1970’s and 80’s). Being young, married, and 3 little ones around, I found it a bit impractical to keep a bike for several years. Then, in the early 90’s, I got a
									deal on another one, and remembered what I loved about them. However, I was now living in a suburb, and driving in town and heavy traffic most of the time.
								</div>
							</div>
						</div>
						<div className="accordion-item my-5 border rounded-3">
							<h2 className="accordion-header" id="panelsStayOpen-headingThree">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
									<h4>My bike has been in storage is it safe to ride?</h4>
								</button>
							</h2>
							<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
								<div className="accordion-body">
									It doesn’t take much. It can happen in less than half a second, and (despite what many others state here) you can have no control over it. THE unexpected HAPPENS. Accidents and near accidents happen. In the upper midwest USA, I was driving about 60mph on a narrow country road with
									tall corn growing all around.
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>

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
		</Container>
	);
};

export default Home;

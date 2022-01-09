import React, { Fragment, useEffect, useState } from 'react';
import { Accordion, Carousel, Col, Container, Image, Row } from 'react-bootstrap';
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

					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>When will my order ship?</Accordion.Header>
							<Accordion.Body>
								After your payment is verified, it takes up to 24 hours to process and ship your order. This does not include weekends or holidays. Purchases made after 11 am PST will not be shipped out until the next business day. If you order after 11 am PST on a Friday, your order will likely be
								shipped out on the following Monday.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>Will I have to pay international taxes & duties?</Accordion.Header>
							<Accordion.Body>
								Your order may be subject to import duties and taxes, which are levied once a shipment reaches your country. The general amount for the duties and taxes fee is about 20% of the dollar amount of the merchandise. However, this is just a general guideline and may vary depending on the
								country to which the order was shipped. You should contact your customs office for specific amounts and percentages.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>I need to change something on my order. How can I do that?</Accordion.Header>
							<Accordion.Body>If you need to change or cancel your order, please contact us immediately. Once our warehouse has processed your order, we will be unable to make any changes.</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>Why was my order canceled?</Accordion.Header>
							<Accordion.Body>
								"If your order was unexpectedly cancelled, chances are that our fraud filter marked your order as fraudulent. If you are certain that that is not true, please order again with a Paypal account. If you do not have Paypal, you can easily sign up at www.Paypal.com"
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>Is there a warranty?</Accordion.Header>
							<Accordion.Body>
								Daily Need warrants that our sunglasses are free from manufacturing defects (in material or workmanship) for a period of 2 years from the date of purchase. This does not cover scratches on lenses, damages caused by accident, abuse, neglect, improper use or storage of the product,
								unauthorized modifications, or normal wear .
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
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

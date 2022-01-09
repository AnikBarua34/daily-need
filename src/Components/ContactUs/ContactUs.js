import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { ImFacebook2, ImTwitter, ImLinkedin, ImMail } from 'react-icons/im';

import { GrSend } from 'react-icons/gr';

import './ContactUs.css';

const ContactUs = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('service_83fblzd', 'template_177iipm', e.target, 'user_Xdat0CdWHdMypnLD2Zr77').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	}

	return (
		<Container>
			<div className="contactText ">
				<h3>Get In Touch</h3>
				<p>
					<i>
						Feel free to knock Daily Need. Our inbox is always open.
						<br /> Whether you have a question or just want to say hi, we'll try our best to get back to you!
					</i>
				</p>
			</div>
			{/* contact  */}

			<Container className=" contact">
				<Row>
					<div className="col-md-3">
						<div className="contact-info">
							<Image src="https://image.ibb.co/kUASdV/contact-image.png" className="img-fluid " alt="Responsive image" />
							<h2>Contact </h2>
							<h5>We love to hear from you !</h5>
						</div>
					</div>
					<Container className="col-md-9">
						{/* <Container className="contact-form">
							<div className="form-group">
								<label className="control-label col-sm-2" for="fname">
									First Name:
								</label>
								<div className="col-sm-10">
									<input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
								</div>
							</div>
							<div className="form-group">
								<label className="control-label col-sm-2" for="lname">
									Last Name:
								</label>
								<div className="col-sm-10">
									<input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
								</div>
							</div>
							<div className="form-group">
								<label className="control-label col-sm-2" for="email">
									Email:
								</label>
								<div className="col-sm-10">
									<input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
								</div>
							</div>
							<div className="form-group">
								<label className="control-label col-sm-2" for="message">
									Message:
								</label>
								<div className="col-sm-10">
									<textarea className="form-control" rows="5" id="messaage"></textarea>
								</div>
							</div>
							<br />
							<div className="form-group">
								<div className="col-sm-offset-2 col-sm-10">
									<button type="submit" className="btn btn-default">
										Send <GrSend className="ms-3 text-white" />
									</button>
								</div>
							</div>
						</Container> */}

						<form className="contact-form" onSubmit={sendEmail}>
							<input type="hidden" name="contact_number" />
							<div className="form-group">
								<label className="control-label col-sm-2" for="fname">
									Name:
								</label>
								<div className="col-sm-10">
									<input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
								</div>
							</div>
							<br />
							<div className="form-group">
								<label className="control-label col-sm-2" for="email">
									Email:
								</label>
								<div className="col-sm-10">
									<input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
								</div>
							</div>
							<br />
							<label className="control-label col-sm-2" for="message">
								Message:
							</label>
							<textarea name="message" className="form-control" rows="5" id="messaage" />
							<input type="submit" value="Send" />
						</form>
					</Container>
				</Row>
			</Container>
			<Container className="my-5">
				<Row className="mx-auto">
					<div className="my-3"></div>
					<Col sm={12} md={6} lg={3} className="info border rounded mx-auto p-5">
						<Image src="https://i.ibb.co/jM5yRyW/pngtree-vector-location-icon-png-image-317888-removebg-preview.png" className="img-fluid text-black image-icon" alt="Responsive image" />
						<h3>Address</h3>

						<h5 className="text-secondary">Dhaka, Bangladesh</h5>
					</Col>
					<Col sm={12} md={6} lg={3} className="info  border rounded  p-5  mx-auto">
						<Image src="https://i.ibb.co/cDXmnn6/pngtree-email-icon-png-image-1757854-removebg-preview.png" className="img-fluid text-black image-icon" alt="Responsive image" />
						<h3>Email & Phone</h3>
						<h5 className="text-secondary">support@dailyneed.com</h5>
						<h5 className="text-secondary">+880183363763</h5>
					</Col>

					<Col sm={12} md={6} lg={3} className="info  border rounded  p-5  mx-auto">
						<Image src="https://i.ibb.co/JRYythc/1024px-Noun-Project-Network-icon-244889-svg.png" className="img-fluid text-black image-icon" alt="Responsive image" />
						<h3>Social Connection</h3>
						<div className="social ">
							<p>Get connected with us on social networks:</p>
							<a href="https://www.linkedin.com/in/sultanamehe/">
								<ImLinkedin className="ms-3 text-black" />
							</a>
							<a href="https://www.facebook.com/sultanamehe/">
								<ImFacebook2 className="ms-3 text-black" />
							</a>
							<a href="https://twitter.com/sultana_mehe">
								<ImTwitter className="ms-3 text-black" />
							</a>
							<a href="mailto:sultanamehe01@gmail.com">
								<ImMail className="ms-3 text-black" />
							</a>
						</div>
					</Col>
					<Col sm={12} md={6} lg={3} className="info  border rounded  p-5  mx-auto">
						<Image src="https://i.ibb.co/rdRDyNr/475669.png" className="img-fluid text-black image-icon" alt="Responsive image" />
						<h3>Open Hour</h3>
						<h5 className="text-secondary">Sat - Thu At 10.00Am to 10.00PM</h5>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default ContactUs;

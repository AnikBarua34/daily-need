import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
// import useContextBase from './../../hooks/useContextbase';
import Swal from 'sweetalert2';

const Review = () => {
    // const {user}=useContextBase();
    // Add New Product Section 
    const nameRef = useRef();
    const emailRef = useRef();
    const descriptionRef = useRef();
    const ratingRef = useRef();


    const handlePostReview =e=>{
       const userName = nameRef.current.value;
       const email = emailRef.current.value;
       const description =  descriptionRef.current.value;
       const rating =  ratingRef.current.value;
      
       
       e.preventDefault();
          
       
       const newReview = {userName,email, description,rating}
       fetch('https://fathomless-shore-00558.herokuapp.com/postReview',{
         method:'POST',
         headers:{
           'content-type':'application/json'
         },
         
         body:JSON.stringify(newReview)
       })
       .then(res=>res.json())
       .then(data=>{
         if(data.insertedId){
          //  alert('Review Added Successfully, Check Home')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Review Successfully Added in Home',
            showConfirmButton:false,
            timer: 2000
          })
           e.target.reset();
         }
       })
           }
    return (
        <div>
            <h5 className="bg-warning text-dark rounded-3 m-3 p-2">Add a Review About our Website</h5>

<form onSubmit={handlePostReview}  className="booking-form" >
<Row>
  <Col className="mt-2" xs={12} md={12} lg={12}>
  <input  style={{width:'85%'}} type="text" ref={nameRef}  placeholder="Enter Name "/>
  {/* defaultValue={user.displayName} */}
  </Col>
  <Col className="mt-2" xs={12} md={12} lg={12}>
  <input disabled style={{width:'85%'}} type="text" ref={emailRef} placeholder="Enter Email "/>
  {/* defaultValue={user.email}  */}
  </Col>
  <Col className="mt-2" xs={12} md={12} lg={12}>
  <textarea style={{width:'85%'}}  type="text" ref={descriptionRef} placeholder="Enter Description" cols="15" rows="5"></textarea>
  </Col>
  <Col className="mt-2" xs={12} md={12} lg={12}>
  <input required style={{width:'85%'}}  type="text" ref={ratingRef}  placeholder="Enter Your Rating Point 0-5"/>
  </Col>
  <Col className="mt-2" xs={12} md={12} lg={12}>
  <input style={{width:'85%'}}className="btn btn-warning fw-bold mx-auto" type="submit" value="Post Review"/>
  </Col>
</Row>

</form>
        </div>
    );
};

export default Review;
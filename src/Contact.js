import React, { useState } from "react";
const Contact = () => {
  const [data,setData]=useState({
    fullname:"",
    number: "",
    email: "",
    msg: "",
  });

  const InputEvent=(event)=>{
    const {name,value} =event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value
  
  
      }
    })
  }
  


  const fromSubmit=(e)=>{
    e.preventDefault();
    alert(`My name is ${data.fullname} My Email is ${data.email} My Phone Number is ${data.number} and My Message is ${data.message}`);
  };



  return (

    <>

      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact_div">

        <div className="row">

          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={fromSubmit}>


              <div class="mb-3">

                <label for="exampleInputEmail1" class="form-label">
                  Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your Name"
                />

              </div>

              <div class="mb-3">

                <label for="exampleInputEmail1" class="form-label">
                  Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter your Email"
                />

              </div>


              <div class="mb-3">

                <label for="exampleInputEmail1" class="form-label">
                  Phone Number</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="number"
                  value={data.number}
                  onChange={InputEvent}
                  placeholder="Enter your Phone Number"
                />

              </div>


              <div class="mb-3">

                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  rows="3">


                </textarea>
              </div>



              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>














            </form>
          </div>


        </div>
      </div>




    </>

  );
};

export default Contact;

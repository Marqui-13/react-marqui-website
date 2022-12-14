import React from "react";
import profilepic from "../Components/profilepic.jpg";


const About = ({ data }) => {
  if (data) {
    var name = data.name;
    
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Marqui's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
<<<<<<< HEAD
=======
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button download">
                  <i className="fa fa-download"></i>Download Resumeeeee
                </a>
              </p>
            </div>
>>>>>>> 3b7acd51b58cf93e581e082bd4774b28af4ba9d7
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

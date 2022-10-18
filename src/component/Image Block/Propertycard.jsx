import React from "react";

const Propertycard = ({ data }) => {
  const parsedImage = JSON.parse(data.images)
  const parsedpptytype = JSON.parse(data.propertyType)
  const parsedLocation = JSON.parse(data.location)
  const parsedDetails = JSON.parse(data.details)
  return (
    <div className="card">
       <img className="cardimg" src={parsedImage?.[0]} width="100%" height="50%"></img>
       <div className="cardcontent">
      <p>{parsedpptytype?.name}</p>
      <p>{parsedLocation?.city}</p>
      <p className="price"> Rs {parsedDetails?.price?.rate} / month</p>
    </div>
    </div>
  );
};

export default Propertycard;
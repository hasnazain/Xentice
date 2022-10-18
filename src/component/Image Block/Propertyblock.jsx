import React from "react";
import Propertycard from "./Propertycard";

const Propertyblock = ({data}) => {
   
  return (
    <div className="main-card-wrapper">
      {data?.data &&
        data?.data?.length > 0 &&
        data?.data?.map((item, index) => (
          <Propertycard key={index} data={item} />
        ))}
    </div>
  );
};

export default Propertyblock;
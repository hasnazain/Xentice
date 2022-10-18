import { useEffect, useState } from "react";
import { http } from "./http";
import Propertyblock from "./Propertyblock";

function Imagegallery() {
  const [data,setData] = useState(null)

  useEffect(() => {
    const handleFetch=async ()=>{
      const response= await http.get("/api/postadSelect")
      setData(response);
    }
    handleFetch()
   }, []);
  return (
    <>
      <Propertyblock data={data} />
      <Propertyblock data={data}/>
      <Propertyblock data={data}/>
      <Propertyblock data={data}/>
      <Propertyblock data={data}/>
    </>
  );
}

export default Imagegallery;
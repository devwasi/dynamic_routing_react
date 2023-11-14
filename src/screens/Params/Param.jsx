import "../Home/home.css"
import Card from '../../componants/Cards/Card';
import axios from 'axios';
import star from "../../images/star.png"
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Skeleton, Stack } from "@mui/material";



function Param() {
  const [productData,setProductData] = useState([]);
  const [isData, setIsData] = useState(false);
  // get id with useParams 
  let { productId } = useParams() 
// get data from fakestore aapi
  const getData = async ()=>{
    // data link of all products
    let dataLink = "https://fakestoreapi.com/products"
    // data link for a specific product with id
    let dataWithID = "https://fakestoreapi.com/products/"+productId;
   const fetchData = await axios.get(productId ? dataWithID : dataLink)
   try{
    setProductData(productId ? [fetchData.data] : fetchData.data)
    setIsData(true)
  }catch(err){
    console.log(err);
    setIsData(true)
   }
}


  useEffect(()=>{
  getData();
  },[])

  return (
    <div className='main'>
  
      {
       isData ? productData.map((e,i)=>{
          const {title, image, description, rating, price,} = e
          return <Card title={title} image={image} description={description} price={price} rating={rating.rate} key={i} star={star}  />
        }) :  <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
      }
      
    </div>
  );
}

export default Param;

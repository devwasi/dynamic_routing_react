import "../Home/home.css"
import Card from '../../componants/Cards/Card';
import axios from 'axios';
import star from "../../images/star.png"
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";



function Param() {
  const [productData,setProductData] = useState([])
  const [isData, setIsData] = useState(false)
  // useParams
  let { productId } = useParams() 
//   `${productId ? "https://fakestoreapi.com/products/"+{productId} : "https://fakestoreapi.com/products/"}`
  const getData = async ()=>{
    let dataLink = "https://fakestoreapi.com/products"
    let dataWithID = "https://fakestoreapi.com/products/"+productId;
   const fetchData = await axios.get(productId ? dataWithID : dataLink)
   try{
    setProductData(fetchData.data)
    console.log(fetchData.data)
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
            productId && console.log(productData)
        }
       
        {
            isData && <div> <Card title={productData.title} image={productData.image} description={productData.description} price={productData.price} rating={productData.rating.rate} star={star}  /> </div>
        }

    {/* <div>
        {
            <Card />
        }
    </div> */}
      {/* {
       isData ? productData.map((e,i)=>{
          const {title, image, description, rating, price,} = e
          return <Card title={title} image={image} description={description} price={price} rating={rating.rate} key={i} star={star}  />
        }) : 'no Data found'
      } */}
      
    </div>
  );
}

export default Param;

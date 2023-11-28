import ItemDetailContainer from "../components/ItemDetallContainer.jsx/ItemDetailContainer"
import { useState, useEffect } from "react";
import axios from "axios";


const Item = () =>{

    const [product, setProduct] = useState({})

  useEffect(() => {
    axios.get('https://dummyjson.com/products/1').then(res => setProduct(res.data)).catch(error => console.log(error))

  }, []);

  console.log(categories)
    return (

        <ItemDetailContainer/>

    )
}

export default Item
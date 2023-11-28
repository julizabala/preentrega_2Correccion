import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"


const Category = () => {

    const [products, setProducts] = useState([])
    const {CategoryId} = useParams()

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/category/${CategoryId}`).then(res => {
      setProducts(res.data.products)
    }).catch(error => console.log(error));

  }, [CategoryId]) 

  
  console.log(CategoryId);

    return(
        <ItemListContainer products={products}/>
    )
}

export default Category;
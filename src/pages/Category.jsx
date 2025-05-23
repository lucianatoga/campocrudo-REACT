import ItemListContainer from "@/components/ItemListContainer";
import { getProductsByCategory } from "@/services/products.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Category=()=>{
    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(true);
    const {id} = useParams();
    useEffect(()=>{
        getProductsByCategory(id).then((res)=>{setProducts(res.data.products);
            console.log(res.data.products)
        })
        .catch((error)=>console.error(error))
        .finally(()=>{setLoading(false)})
    },[id])
    return(
        loading ? <>Loading...</> : <ItemListContainer title={id} products={products}/>
    )
}

export default Category;
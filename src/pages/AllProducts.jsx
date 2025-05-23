import ItemListContainer from "@/components/ItemListContainer";
import { getAllProducts } from "@/services/products.service";
import { useEffect, useState } from "react";

const AllProducts=()=>{
    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        getAllProducts().then((res)=>{setProducts(res.data.products)})
        .catch((error)=>console.error(error))
        .finally(()=>setLoading(false))
    },[])
    return(
        loading ? <>Loading...</> : <ItemListContainer title='catálogo' products={products}/>
    )
}

export default AllProducts;
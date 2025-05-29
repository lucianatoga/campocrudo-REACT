import ItemContainer from "@/components/ItemContainer";
import LoadingCard from "@/components/LoadingCard";
import { getProductById } from "@/services/products.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleProduct=()=>{
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    useEffect(()=>{
        getProductById(id).then((res)=>{setProduct(res.data)})
        .catch((error)=>console.error(error))
        .finally(()=>setLoading(false))
    },[id])
    return(
        loading ? <LoadingCard/> : <ItemContainer product={product}/>
    )
}

export default SingleProduct;
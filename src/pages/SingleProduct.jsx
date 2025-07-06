import ItemContainer from "@/components/ItemContainer/ItemContainer";
import LoadingCard from "@/components/LoadingCard";
import { db } from "@/services/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleProduct=()=>{
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    useEffect(()=>{
        const dbItem=doc(db, 'products', id);
        getDoc(dbItem).then((snapshot)=>setProduct({id:snapshot.id, ...snapshot.data()}))
        .catch((error)=>console.error(error))
        .finally(()=>setLoading(false))
    },[id])
    return(
        loading ? <LoadingCard/> : <ItemContainer product={product}/>
    )
}

export default SingleProduct;
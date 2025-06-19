import ItemListContainer from "@/components/ItemListContainer";
import LoadingCircle from "@/components/LoadingCircle";
import { db } from "@/services/config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Category=()=>{
    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(true);
    const {id} = useParams();
    useEffect(()=>{
        const dbCollection=collection(db, 'products');
        getDocs(query(dbCollection, where('category','==',id))).then((snapshot)=>{
            const data=snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}));
            setProducts(data)
        })
        .catch((error)=>console.error(error))
        .finally(()=>{setLoading(false)})
    },[id])
    return(
        loading ? <LoadingCircle /> : <ItemListContainer title={id} products={products}/>
    )
}

export default Category;
import { db } from "@/services/config/firebase"
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react";

export const useGetFirestoreDocs=(collectionName)=>{
    const [items, setItems]=useState([]);
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        const dbCollection=collection(db, collectionName);
        getDocs(dbCollection).then((snapshot)=>{
            const data=snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}));
            setItems(data);
        })
        .catch((error)=>{console.error(error)})
        .finally(()=>setLoading(false))
    },[])
    return {items, loading}
}
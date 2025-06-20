import CategoryListContainer from "@/components/CategoryListContainer";
import LoadingCircle from "@/components/LoadingCircle";
import { useGetFirestoreDocs } from "@/hooks/useGetFirestoreDocs";
import { useEffect, useState } from "react";

const Home=()=>{
    const {items:categories, loading}=useGetFirestoreDocs('categories');
    const {items:products}=useGetFirestoreDocs('products');
    const [catImages, setCatImages]=useState([]);

    useEffect(()=>{
        setCatImages(categories.map((cat)=>{
        const prod=(products.find((prod)=>prod.category===cat.slug));
        
        return({...cat, image:prod?.images?.[0]||null, alt:prod?.description||null})
        }))
    },[products, categories])

    return(

        loading ? <LoadingCircle/> : <CategoryListContainer categories={catImages}/>
    )
}

export default Home;
import ItemListContainer from "@/components/ItemListContainer";
import LoadingCircle from "@/components/LoadingCircle";
import { useGetFirestoreDocs } from "@/hooks/useGetFirestoreDocs";

const AllProducts=()=>{
    const {items: products, loading}=useGetFirestoreDocs('products')
    return(
        loading ? <LoadingCircle/> : <ItemListContainer title='catálogo' products={products}/>
    )
}

export default AllProducts;